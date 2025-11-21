import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import VCardList from '../components/VCardList';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
         <VCardList />
        <CardList />

      </main>
      <Footer />
    </div>
  );
}

export default App;