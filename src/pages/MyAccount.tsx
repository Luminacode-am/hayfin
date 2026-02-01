import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Button from '../components/Button';


interface InfoBlockProps {
  label: string;
  value: string;
}

const mockUser = {
  type: 'user', 
  firstName: '',
  lastName: '',
  companyName: '', 
  email: '',
};

function MyAccount() {
  const isShop = mockUser.type === 'shop';

  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors">
      <AppBar />

      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 border-b border-light-shadow dark:border-dark-shadow pb-6">
            <h1 className="text-3xl font-bold">Իմ էջը</h1>
            <p className="opacity-60 text-sm mt-1">Կառավարեք ձեր հաշվի տեղեկությունները</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 flex flex-col items-center p-6 rounded-2xl bg-light-bg dark:bg-dark-btn shadow-lg border border-light-shadow dark:border-dark-shadow">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                {isShop ? mockUser.companyName[0] : mockUser.firstName[0]}
              </div>
              <h3 className="font-semibold text-center leading-tight">
                {isShop ? mockUser.companyName : `${mockUser.firstName} ${mockUser.lastName}`}
              </h3>
              <span className="text-xs mt-2 px-3 py-1 bg-light-btn dark:bg-dark-bg rounded-full opacity-70">
                {isShop ? 'Ընկերություն' : 'Անձնական'}
              </span>
            </div>

            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="p-6 rounded-2xl bg-light-bg dark:bg-dark-btn shadow-lg border border-light-shadow dark:border-dark-shadow">
                <h4 className="text-lg font-medium mb-4 border-b border-light-shadow dark:border-dark-shadow pb-2">
                   Հիմնական տվյալներ
                </h4>
                
                <div className="space-y-4">
                  {!isShop ? (
                    <div className="grid grid-cols-2 gap-4">
                      <InfoBlock label="Անուն" value={mockUser.firstName} />
                      <InfoBlock label="Ազգանուն" value={mockUser.lastName} />
                    </div>
                  ) : (
                    <InfoBlock label="Ընկերության Անուն" value={mockUser.companyName} />
                  )}

                  <InfoBlock label="Email հասցե" value={mockUser.email} />
                </div>

                <div className="mt-8 flex gap-3">
                  <Button variant="filled" color="primary" className="flex-1 py-2 rounded-xl">
                    Խմբագրել
                  </Button>
                  <Button variant="outlined" className="flex-1 py-2 rounded-xl border-red-500 text-red-500">
                    Դուրս գալ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
function InfoBlock({ label, value }: InfoBlockProps) {
  return (
    <div className="flex flex-col">
      <span className="text-xs opacity-50 mb-1">{label}</span>
      <div className="p-3 bg-light-bg dark:bg-dark-bg rounded-xl border border-light-shadow dark:border-dark-shadow font-medium text-sm">
        {value}
      </div>
    </div>
  );
}

export default MyAccount;