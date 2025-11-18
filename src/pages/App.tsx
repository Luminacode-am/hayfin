import Hero from "../components/Hero";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
