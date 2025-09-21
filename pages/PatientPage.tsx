
import React from 'react';
import { ImageUploader } from '../components/ImageUploader';

export const PatientPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-light">Patient Analysis Portal</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Upload a clear image of your skin condition to get an instant AI analysis.
          This tool can help you understand your skin better before consulting a doctor.
        </p>
      </div>
      <div className="mt-10">
        <ImageUploader />
      </div>
    </div>
  );
};
