import React, { useState, useEffect, useRef } from 'react';
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

const LoginScreen: React.FC = () => {
  // --- STATE MANAGEMENT / ՎԻՃԱԿԻ ԿԱՌԱՎԱՐՈՒՄ ---

  // Stores the phone number input by the user.
  // Պահում է օգտատերի մուտքագրած հեռախոսահամարը։
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // Stores the 6-digit code input by the user.
  // Պահում է օգտատերի մուտքագրած 6-նիշանոց կոդը։
  const [verificationCode, setVerificationCode] = useState<string>('');

  // Stores the result object from Firebase after sending the SMS. Used to confirm the code later.
  // Պահում է Firebase-ի պատասխանը SMS ուղարկելուց հետո։ Օգտագործվում է կոդը հաստատելու համար։
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Stores error messages to display to the user.
  // Պահում է սխալի հաղորդագրությունները՝ օգտատերին ցուցադրելու համար։
  const [error, setError] = useState<string>('');

  // Controls the loading spinner/disabled state of buttons.
  // Կառավարում է բեռնման ցուցիչը և կոճակների ակտիվությունը։
  const [loading, setLoading] = useState<boolean>(false);


  // --- REFS / ՌԵՖԵՐՆԵՐ ---

  // We use useRef to store the RecaptchaVerifier instance.
  // Unlike useState, changing a ref does NOT trigger a re-render.
  // This is crucial for keeping the reCAPTCHA instance stable between renders.
  //
  // Մենք օգտագործում ենք useRef՝ RecaptchaVerifier օբյեկտը պահելու համար։
  // Ի տարբերություն useState-ի, ref-ի փոփոխությունը ՉԻ թարմացնում էջը (re-render)։
  // Սա կարևոր է reCAPTCHA-ն կայուն պահելու համար։
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);


  // --- HELPER FUNCTIONS / ՕԺԱՆԴԱԿ ՖՈՒՆԿՑԻԱՆԵՐ ---

  // Safely clears the reCAPTCHA widget.
  // Ապահով կերպով մաքրում է reCAPTCHA վիջետը։
  const resetRecaptcha = () => {
    const verifier = recaptchaVerifierRef.current;
    if (verifier && typeof verifier.clear === 'function') {
      try {
        verifier.clear();
      } catch (e) {
        console.error("Error clearing reCAPTCHA:", e);
      }
    }
  };

  // --- USE EFFECT (INITIALIZATION) / ՍԿԶԲՆԱԿԱՆԱՑՈՒՄ ---

  useEffect(() => {
    // 1. Find the HTML element where reCAPTCHA will live.
    // 1. Գտնում ենք այն HTML էլեմենտը, որտեղ տեղադրվելու է reCAPTCHA-ն։
    const container = document.getElementById('recaptcha-container');

    // 2. Initialize only if container exists and verify doesn't exist yet.
    // 2. Սկզբնականացնում ենք միայն եթե կոնտեյները կա, և verifier-ը դեռ չի ստեղծվել։
    if (container && !recaptchaVerifierRef.current) {

      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible', // Invisible means the user doesn't have to click "I am not a robot". / Invisible նշանակում է, որ օգտատերը ստիպված չէ սեղմել "Ես ռոբոտ չեմ":
        'callback': (response: any) => {
          // reCAPTCHA solved - allow signInWithPhoneNumber.
          // reCAPTCHA-ն անցավ - թույլատրել signInWithPhoneNumber:
          console.log("reCAPTCHA check passed automatically.");
        },
        'expired-callback': () => {
          // Token expired, ask user to solve again.
          // Ժամկետը լրացավ, պահանջել նորից լուծել:
          console.log("reCAPTCHA expired.");
        }
      });

      // Save instance to ref.
      // Պահպանում ենք օբյեկտը ref-ի մեջ։
      recaptchaVerifierRef.current = verifier;

      // Render the widget into the DOM.
      // Նկարում ենք վիջետը էջի վրա։
      verifier.render();
    }

    // 3. Cleanup function: Runs when the component unmounts (disappears).
    // 3. Մաքրման ֆունկցիա. Աշխատում է, երբ կոմպոնենտը հեռացվում է էկրանից։
    return () => {
      const verifier = recaptchaVerifierRef.current;
      if (verifier) {
        try {
          verifier.clear(); // Remove the widget / Հեռացնել վիջետը
        } catch (e) {
          // Ignore errors / Անտեսել սխալները
        }
        recaptchaVerifierRef.current = null;
      }
    };
  }, []); // Empty array [] means run only once on mount. / Դատարկ զանգված [] նշանակում է աշխատել միայն մեկ անգամ։


  // --- HANDLERS / ԻՐԱԴԱՐՁՈՒԹՅՈՒՆՆԵՐԻ ԿԱՌԱՎԱՐԻՉՆԵՐ ---

  // Step 1: Send the code to the phone.
  // Քայլ 1: Ուղարկել կոդը հեռախոսահամարին։
  const handleSendCode = async () => {
    setError('');
    setLoading(true);

    const verifier = recaptchaVerifierRef.current;

    // Safety check: ensure reCAPTCHA is ready.
    // Անվտանգության ստուգում. համոզվել, որ reCAPTCHA-ն պատրաստ է։
    if (!verifier) {
      setError('Ներքին սխալ. reCAPTCHA չի ակտիվացվել։');
      setLoading(false);
      return;
    }

    const rawPhoneNumber = phoneNumber.trim();

    // Basic validation (Length check).
    // Պարզ ստուգում (Երկարության ստուգում)։
    if (rawPhoneNumber.length < 8) {
      setError('Մուտքագրեք վավեր հեռախոսահամար');
      setLoading(false);
      return;
    }

    try {
      // Firebase function to send SMS.
      // Firebase-ի ֆունկցիան SMS ուղարկելու համար։
      const result = await signInWithPhoneNumber(
        auth,
        rawPhoneNumber,
        verifier
      );

      // Save the result to verify later.
      // Պահպանում ենք արդյունքը հետագա ստուգման համար։
      setConfirmationResult(result);
      console.log('Code sent successfully!');

    } catch (err: any) {
      // Detailed Error Handling for Students
      // Մանրամասն Սխալների Կառավարում Ուսանողների համար
      let userMessage = 'Ծանր սխալ։ Խնդրում ենք փորձել նորից։';

      if (err.code === 'auth/internal-error') {
        userMessage = `Ներքին սխալ։ Համոզվեք, որ Google Cloud բիլինգը ակտիվ է։`;
      } else if (err.code === 'auth/invalid-phone-number') {
        userMessage = `Անվավեր հեռախոսահամար։`;
      } else if (err.code === 'auth/too-many-requests') {
        userMessage = `Չափազանց շատ հարցումներ։`;
      } else {
        userMessage = `Սխալ (${err.code}): ${err.message}`;
      }

      setError(`Կոդի ուղարկման սխալ: ${userMessage}`);
      setConfirmationResult(null);

      // If it fails, we often need to reset the captcha.
      // Եթե ձախողվի, հաճախ անհրաժեշտ է վերակայել captcha-ն։
      resetRecaptcha();

    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify the code entered by user.
  // Քայլ 2: Ստուգել օգտատերի մուտքագրած կոդը։
  const handleVerifyCode = async () => {
    setError('');
    setLoading(true);

    if (!confirmationResult) {
      setError('Նախ ուղարկեք հեռախոսահամարը։');
      setLoading(false);
      return;
    }

    try {
      // Check the code against Firebase.
      // Ստուգում ենք կոդը Firebase-ի միջոցով։
      const userCredential = await confirmationResult.confirm(verificationCode);

      const user = userCredential.user;
      console.log('Successful login, UID:', user.uid);

      // Cleanup after success.
      // Մաքրում հաջողությունից հետո։
      resetRecaptcha();

      // Navigate to next screen here...
      // Այստեղ կարող եք տեղափոխվել հաջորդ էջ...

    } catch (err: any) {
      setError(`Սխալ հաստատման կոդ։ Փորձեք նորից։`);
    } finally {
      setLoading(false);
    }
  };
  // CSS classes for consistent styling.
  // CSS դասեր՝ միասնական ոճի համար։
  const commonInputClasses = "w-full p-3 mb-4 rounded-lg border border-light-border dark:border-dark-border bg-light-bg text-light-text focus:outline-none focus:ring-2 focus:ring-btn focus:border-btn transition duration-150 shadow-sm";

  const commonButtonClasses = "w-full p-3 font-semibold rounded-lg bg-light-btn dark:bg-dark-btn text-light-text dark:text-dark-text hover:bg-btn-hover active:bg-light-btn-active dark:active:bg-dark-btn-active shadow-md transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

  const isSendDisabled = loading || phoneNumber.length < 8;

  // --- RENDER / ՆԿԱՐՈՒՄ ---
  return (
    <div className="flex items-center justify-center min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="w-full max-w-md p-8 m-4 bg-light-bg dark:bg-dark-bg rounded-xl shadow-lg dark:shadow-dark-shadow">
        <h2 className="text-3xl font-extrabold text-light-text dark:text-dark-text text-center mb-6">
          Մուտք հեռախոսահամարով
        </h2>

        {/* Conditional Rendering: Show error if it exists */}
        {/* Պայմանական Նկարում. Ցույց տալ սխալը, եթե այն գոյություն ունի */}
        {error && (
          <div
            className="p-3 mb-4 text-sm font-semibold text-light-text-danger bg-light-bg border border-light-border rounded-lg"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Logic: If we don't have a confirmation result yet, show Phone Input form.
            Else, show Code Verification form.

            Տրամաբանություն. Եթե դեռ չունենք հաստատման արդյունք, ցույց տալ Հեռախոսի Մուտքագրման ֆորման։
            Հակառակ դեպքում, ցույց տալ Կոդի Ստուգման ֆորման։
        */}
        {!confirmationResult ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendCode();
            }}
          >
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">
              Մուտքագրեք Ձեր հեռախոսահամարը (օրինակ՝ +374...).
            </p>

            <input
              type="tel"
              placeholder="+374XXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={commonInputClasses}
              required
              disabled={loading}
            />

            {/* IMPORTANT: The invisible reCAPTCHA needs this empty div to attach to.
                ԿԱՐԵՎՈՐ: Անտեսանելի reCAPTCHA-ին անհրաժեշտ է այս դատարկ div-ը՝ կցվելու համար։
            */}
            <div id="recaptcha-container" className="mt-4 mb-4"></div>

            <button
              type="submit"
              onClick={handleSendCode}
              disabled={isSendDisabled}
              className={commonButtonClasses}
            >
              {loading ? "Ուղարկում..." : "Ստանալ կոդը"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerifyCode();
            }}
          >
            <p className="text-sm text-light-text-secondary mb-3">
              Հաստատման կոդն ուղարկված է։ Մուտքագրեք այն ներքևում։
            </p>

            <input
              type="text"
              placeholder="XXXXXX"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.slice(0, 6))}
              className={commonInputClasses}
              required
              maxLength={6}
              disabled={loading}
            />

            <button
              type="submit"
              onClick={handleVerifyCode}
              disabled={loading || verificationCode.length !== 6}
              className={commonButtonClasses}
            >
              {loading ? "Ստուգում..." : "Հաստատել և մուտք գործել"}
            </button>

            {/* Button to go back to phone entry */}
            {/* Կոճակ՝ հեռախոսի մուտքագրմանը վերադառնալու համար */}
            <button
              type="button"
              onClick={() => {
                setConfirmationResult(null);
                setVerificationCode("");
              }}
              className="mt-3 w-full p-3 text-sm text-light-link hover:text-light-link-hover active:text-light-link-active bg-transparent"
            >
              Փոխել հեռախոսահամարը
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;

// Extends the Window interface to include recaptchaVerifier for TypeScript type safety.
// Ընդլայնում է Window ինտերֆեյսը՝ ներառելով recaptchaVerifier-ը TypeScript-ի տիպերի անվտանգության համար։
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}