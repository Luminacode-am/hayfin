<<<<<<< Updated upstream
import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

=======
import Hero from "../components/Hero";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import VCardList from "../components/VCardList";
>>>>>>> Stashed changes
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="grow">
        <Hero />
<<<<<<< Updated upstream
=======
         <VCardList />
        <CardList />
>>>>>>> Stashed changes
      </main>
      <Footer />
    </div>
  );
}

export default App;
