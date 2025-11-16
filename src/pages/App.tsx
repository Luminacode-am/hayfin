import Hero from "../components/Hero";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
