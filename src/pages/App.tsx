import Hero from '../components/Hero';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import LoginScreen from '../components/LoginScreen/LoginScreen';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoginScreen />
      <AppBar />
      <main className="grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
