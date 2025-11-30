import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import VCardList from '../components/VCardList';
import  Input  from '../components/Input';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
        <CardList />
         <VCardList />
<<<<<<< Updated upstream
         <Input type='email'/>
=======
         <Input className=' input' type='number' />
>>>>>>> Stashed changes
      </main>
      <Footer />
    </div>
  );
}

export default App;
