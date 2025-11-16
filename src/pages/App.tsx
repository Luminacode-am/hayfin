
import Hero from "../components/Hero";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Errors from "../components/Errors";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-grow">
        <Errors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
