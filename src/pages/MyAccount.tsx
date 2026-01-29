import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

function MyAccount() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg">
      <AppBar />
      <main className="flex-grow">Test test test page.</main>
      <Footer />
    </div>
  );
}

export default MyAccount;
