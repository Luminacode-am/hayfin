// src/firebase/AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './config'; // Import the initialized Firebase Auth object. / Ներմուծում ենք Firebase Auth օբյեկտը։

// 1. Defining Types (Տեսակների սահմանում)
// Defines the structure of the data that the AuthContext will provide.
// Սահմանում է տվյալների կառուցվածքը, որը կտրամադրի AuthContext-ը։
interface AuthContextType {
  currentUser: User | null; // The logged-in Firebase user or null. / Մուտք գործած Firebase օգտատերը կամ null։
  loading: boolean;        // Indicates if the initial auth state is still being loaded. / Ցույց է տալիս, արդյոք սկզբնական կարգավիճակը դեռ բեռնվում է։
  logout: () => Promise<void>; // Function to sign the user out. / Գործառույթ՝ օգտատիրոջ դուրս գալու համար։
}

// 2. Creating the Context (Կոնտեքստի ստեղծում)
// createContext holds the initial shape of the context data.
// createContext-ը պահում է կոնտեքստի տվյալների սկզբնական ձևը։
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Context Provider Component (Կոնտեքստի Տրամադրող Բաղադրիչ)
// This component manages the state and provides it to the rest of the app.
// Այս բաղադրիչը կառավարում է վիճակը և տրամադրում այն հավելվածի մնացած մասերին։
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the current user information.
  // Օգտատիրոջ ընթացիկ տվյալները պահելու վիճակ։
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // State to track loading status (true until Firebase confirms auth state).
  // Բեռնման կարգավիճակը հետևելու վիճակ (true, մինչև Firebase-ը հաստատի կարգավիճակը)։
  const [loading, setLoading] = useState(true);

  // Listener for Authentication State Changes (Աուտենտիֆիկացիայի Վիճակի Փոփոխությունների Լսող)
  // useEffect runs only once on mount ([] dependency) and sets up the listener.
  // useEffect-ը գործարկվում է միայն մեկ անգամ և սահմանում է Firebase-ի լսողը։
  useEffect(() => {
    // onAuthStateChanged is the Firebase method to monitor login/logout status.
    // onAuthStateChanged-ը Firebase-ի մեթոդն է մուտքի/դուրս գալու կարգավիճակը վերահսկելու համար։
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Update the state with the current user or null. / Թարմացնում է վիճակը ընթացիկ օգտատիրոջ կամ null-ի միջոցով։
      setLoading(false);    // Once checked, set loading to false. / Ստուգվելուց հետո loading-ը դարձնում է false։
    });

    // Cleanup function: Unsubscribe from the listener when the component unmounts.
    // Մաքրման գործառույթը. Անջատվում է լսողից, երբ բաղադրիչը հեռացվում է։
    return unsubscribe;
  }, []);

  // Logout Function (Դուրս գալու Գործառույթ)
  // Uses Firebase's signOut method.
  // Օգտագործում է Firebase-ի signOut մեթոդը։
  const logout = () => signOut(auth);

  const value: AuthContextType = {
    currentUser,
    loading,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Conditional rendering: Only render children after the initial auth check is complete (loading is false). */}
      {/* Պայմանական ռենդերինգ. Ցուցադրել երեխա բաղադրիչները միայն սկզբնական ստուգումից հետո (loading-ը false է)։ */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 4. Custom Hook for easy consumption (Հարմարեցված Hook հեշտ օգտագործման համար)
// This hook prevents the need to import useContext and AuthContext in every file.
// Այս hook-ը թույլ է տալիս հեշտությամբ ստանալ կոնտեքստը ցանկացած բաղադրիչում։
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Throw an error if the hook is used outside of the AuthProvider.
  // Սխալ է առաջանում, եթե hook-ն օգտագործվում է AuthProvider-ից դուրս։
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};