<<<<<<< HEAD
import React from 'react';
import './Pages404'
import Pages404 from '../components/Pages404';

function App() {
  return (
    <div className="">
      <Pages404/>
  </div>
  );
}

export default Pages404;

=======
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
>>>>>>> df06f81163d2952aa097b6eb405d4efc7f0cf142
