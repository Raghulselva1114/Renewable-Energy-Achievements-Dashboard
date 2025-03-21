import React from 'react';

const stats = [
  { number: '167.71', label: 'Total GW Capacity', suffix: 'GW' },
  { number: '186.5%', label: 'Growth Since 2014', suffix: '%' },
  { number: '61.2%', label: 'Solar Share', suffix: '%' },
  { number: '24,065', label: 'MW Added in 2024-25', suffix: 'MW' }
];

const Statistics = () => {
  return (
    <div className="bg-blue-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-extrabold text-white">
                {stat.number}
                <span className="text-3xl text-blue-300">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-lg font-medium text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;