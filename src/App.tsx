import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EnergyModel from './components/EnergyModel';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
<body>
  image:url(E:\sample\project\src\Energy Consortium.webp)
</body>

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EnergyModel />
      </div>
      <Features />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;