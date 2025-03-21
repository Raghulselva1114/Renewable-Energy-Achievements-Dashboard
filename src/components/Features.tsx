import React from 'react';
import { Battery, Cpu, BarChart3, Settings } from 'lucide-react';

const features = [
  {
    icon: <Battery className="h-6 w-6" />,
    title: 'Energy Storage',
    description: 'Monitor battery levels and optimize storage capacity for maximum efficiency.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Smart Controls',
    description: 'Automated systems for optimal energy distribution and consumption management.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization and insights for informed decision-making.'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'System Configuration',
    description: 'Customize settings and parameters to match your energy requirements.'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Energy Management
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Advanced tools and features for efficient energy monitoring and control
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-900 rounded-md shadow-lg">
                        <div className="text-white">{feature.icon}</div>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;