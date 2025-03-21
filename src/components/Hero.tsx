import React from 'react';
import { Sun, Wind, Droplets, Leaf, Trash2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Renewable Energy Achievements Dashboard</h1>
          <p className="text-xl text-blue-100">Tracking India's Progress in Renewable Energy (2014-2025)</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Sun className="h-8 w-8 text-yellow-300 mb-4" />
            <h3 className="text-lg font-semibold">Solar Power</h3>
            <p className="text-3xl font-bold mb-2">102.57 GW</p>
            <p className="text-sm text-blue-100">Leading renewable source</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Wind className="h-8 w-8 text-blue-300 mb-4" />
            <h3 className="text-lg font-semibold">Wind Power</h3>
            <p className="text-3xl font-bold mb-2">48.59 GW</p>
            <p className="text-sm text-blue-100">Strong consistent growth</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Droplets className="h-8 w-8 text-cyan-300 mb-4" />
            <h3 className="text-lg font-semibold">Small Hydro</h3>
            <p className="text-3xl font-bold mb-2">5.10 GW</p>
            <p className="text-sm text-blue-100">Stable contribution</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Leaf className="h-8 w-8 text-green-300 mb-4" />
            <h3 className="text-lg font-semibold">Biomass</h3>
            <p className="text-3xl font-bold mb-2">10.74 GW</p>
            <p className="text-sm text-blue-100">Sustainable energy source</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Trash2 className="h-8 w-8 text-red-300 mb-4" />
            <h3 className="text-lg font-semibold">Waste to Power</h3>
            <p className="text-3xl font-bold mb-2">0.71 GW</p>
            <p className="text-sm text-blue-100">Emerging sector</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;