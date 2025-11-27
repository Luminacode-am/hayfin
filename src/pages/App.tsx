import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import VCardList from '../components/VCardList';
import ImportantCards from '../components/ImportantCards';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
        <CardList />
        <VCardList />
        <ImportantCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
