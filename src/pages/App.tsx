import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggleBtn';
import PartnersList from '../components/PartnersList';
import PriceCardList from '../components/PriceCardList';
import Advantages from '../components/Advantages';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg">
      <div className="z-20">
        <ThemeToggle />
      </div>
      <div className="z-0">
        <AppBar />
        <main className="flex-grow">
          <Hero />
          <Advantages />
          <PriceCardList />
          <PartnersList />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
