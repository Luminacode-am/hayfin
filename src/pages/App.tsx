
import Hero from "../components/Hero";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <AppBar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
