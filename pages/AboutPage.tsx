
import React from 'react';
import { PSORIASIS_DATA } from '../constants';
import { Card } from '../components/ui/Card';

const PsoriasisInfoCard: React.FC<{ info: typeof PSORIASIS_DATA[0] }> = ({ info }) => {
  return (
    <Card className="flex flex-col h-full animate-slide-in">
      <img src={info.image} alt={`Illustration of ${info.name}`} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">{info.name}</h3>
        <div className="flex-grow">
            <p className="font-semibold text-gray-700 dark:text-gray-200">Common Symptoms:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 mt-2">
                {info.symptoms.map((symptom, index) => <li key={index}>{symptom}</li>)}
            </ul>
            <p className="font-semibold text-gray-700 dark:text-gray-200 mt-4">Typical Treatment:</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">{info.treatment}</p>
        </div>
      </div>
    </Card>
  );
};

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-light">Understanding Psoriasis</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Psoriasis is a chronic autoimmune condition that causes the rapid build-up of skin cells. This build-up of cells causes scaling on the skin’s surface. Learn about the common and rare types below.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PSORIASIS_DATA.map((pso, index) => (
          <PsoriasisInfoCard key={index} info={pso} />
        ))}
      </div>
    </div>
  );
};
