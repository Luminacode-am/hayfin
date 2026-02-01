import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import PartnersList from '../components/PartnersList';
import PriceCardList from '../components/PriceCardList';
import Advantages from '../components/Advantages';
import MyAccount  from '../pages/MyAccount';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg">
      <AppBar />
      <main className="flex-grow">
        <LoginScreen />
        <MyAccount/>
        <Hero />
        <Advantages />
        <PriceCardList />
        <PartnersList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
