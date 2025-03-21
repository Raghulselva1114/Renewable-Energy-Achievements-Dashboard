import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Wind, Sun, Droplets, Leaf, Trash2 } from 'lucide-react';

const yearlyData = [
  { year: '2014', wind: 21042.58, solar: 2821.91, hydro: 3803.68, biomass: 7951.05, waste: 230.37 },
  { year: '2015', wind: 23354.35, solar: 3993.53, hydro: 4055.36, biomass: 8306.77, waste: 240.08 },
  { year: '2016', wind: 26777.40, solar: 7123.89, hydro: 4273.47, biomass: 8670.86, waste: 245.77 },
  { year: '2017', wind: 32279.77, solar: 12782.52, hydro: 4379.85, biomass: 8835.01, waste: 281.04 },
  { year: '2018', wind: 34145.00, solar: 22346.21, hydro: 4485.80, biomass: 9363.61, waste: 310.81 },
  { year: '2019', wind: 35625.97, solar: 29097.18, hydro: 4593.14, biomass: 9778.31, waste: 317.39 },
  { year: '2020', wind: 37743.76, solar: 35607.24, hydro: 4683.15, biomass: 9875.31, waste: 345.84 },
  { year: '2021', wind: 39247.06, solar: 41236.04, hydro: 4786.80, biomass: 10145.92, waste: 387.59 },
  { year: '2022', wind: 40357.59, solar: 53996.54, hydro: 4848.89, biomass: 10205.61, waste: 476.75 },
  { year: '2023', wind: 42633.14, solar: 66780.34, hydro: 4944.29, biomass: 10248.01, waste: 554.03 },
  { year: '2024', wind: 45886.52, solar: 81813.58, hydro: 5003.24, biomass: 10355.35, waste: 585.80 },
  { year: '2025', wind: 48588.56, solar: 102566.02, hydro: 5100.55, biomass: 10743.11, waste: 711.29 }
];

const sectorContribution = [
  { name: 'Wind Power', value: 48588.56, icon: Wind, color: '#3b82f6' },
  { name: 'Solar Power', value: 102566.02, icon: Sun, color: '#eab308' },
  { name: 'Small Hydro Power', value: 5100.55, icon: Droplets, color: '#06b6d4' },
  { name: 'Biomass', value: 10743.11, icon: Leaf, color: '#22c55e' },
  { name: 'Waste to Power', value: 711.29, icon: Trash2, color: '#ef4444' }
];

const EnergyModel = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Renewable Energy Achievements (2014-2025)</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="solar" name="Solar Power" stackId="1" stroke="#eab308" fill="#fef08a" />
              <Area type="monotone" dataKey="wind" name="Wind Power" stackId="1" stroke="#3b82f6" fill="#bfdbfe" />
              <Area type="monotone" dataKey="hydro" name="Small Hydro" stackId="1" stroke="#06b6d4" fill="#cffafe" />
              <Area type="monotone" dataKey="biomass" name="Biomass" stackId="1" stroke="#22c55e" fill="#bbf7d0" />
              <Area type="monotone" dataKey="waste" name="Waste to Power" stackId="1" stroke="#ef4444" fill="#fecaca" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="g-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Growth Analysis (2024-2025)</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[yearlyData[yearlyData.length - 2], yearlyData[yearlyData.length - 1]]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="solar" name="Solar Power" fill="#eab308" />
                <Bar dataKey="wind" name="Wind Power" fill="#3b82f6" />
                <Bar dataKey="hydro" name="Small Hydro" fill="#06b6d4" />
                <Bar dataKey="biomass" name="Biomass" fill="#22c55e" />
                <Bar dataKey="waste" name="Waste to Power" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="g-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sector-wise Distribution</h2>
          <div className="space-y-4">
            {sectorContribution.map((sector) => {
              const Icon = sector.icon;
              const percentage = ((sector.value / 167709.53) * 100).toFixed(1);
              return (
                <div key={sector.name} className="flex items-center space-x-4">
                  <Icon className="h-6 w-6" style={{ color: sector.color }} />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{sector.name}</span>
                      <span className="text-sm font-medium text-gray-900">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: sector.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <Sun className="h-8 w-8 text-yellow-500 mb-2" />
            <h3 className="text-lg font-semibold">Solar Leadership</h3>
            <p className="text-sm text-gray-600">Dominates with 61.2% of total renewable capacity</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <Wind className="h-8 w-8 text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold">Wind Growth</h3>
            <p className="text-sm text-gray-600">Consistent growth reaching 48.5 GW capacity</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <Droplets className="h-8 w-8 text-cyan-500 mb-2" />
            <h3 className="text-lg font-semibold">Hydro Stability</h3>
            <p className="text-sm text-gray-600">Steady contribution with 5.1 GW capacity</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <Trash2 className="h-8 w-8 text-red-500 mb-2" />
            <h3 className="text-lg font-semibold">Waste to Energy</h3>
            <p className="text-sm text-gray-600">Growing sector with 711.29 MW capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyModel;