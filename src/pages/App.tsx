import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import PartnersList from '../components/PartnersList';
import PriceCardList from '../components/PriceCardList';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
        <PriceCardList />
        <PartnersList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
