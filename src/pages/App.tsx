import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import VCardList from '../components/VCardList';
import RegisterForm from '../components/RegForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
        <CardList />
        <VCardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
