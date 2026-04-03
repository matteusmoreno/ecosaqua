import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Desafios from './components/Desafios';
import Solucoes from './components/Solucoes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Desafios />
        <Solucoes />
      </main>
      <Footer />
    </>
  );
}

export default App;