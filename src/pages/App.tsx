import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import PartnersList from '../components/PartnersList';
import PriceCardList from '../components/PriceCardList';
import Advantages from '../components/Advantages';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg">
      <AppBar />
      <main className="flex-grow">
        <LoginScreen />
        <Hero />
        <Advantages />
        <PriceCardList />
        <PartnersList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
