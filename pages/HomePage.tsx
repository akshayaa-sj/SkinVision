
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-teal-50 via-white to-blue-50 dark:from-slate-900 dark:via-dark dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-secondary dark:text-light leading-tight">
            SkinVision
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AI-powered Psoriasis Detection & Insights. <br/>Clarity for your skin, confidence for your life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/patients">
              <Button>For Patients</Button>
            </Link>
            <Link to="/doctors">
              <Button variant="secondary">For Doctors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary dark:text-light">How It Works</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A simple, three-step process to gain insights.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-in p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">1. Upload Image</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Securely upload a clear photo of the affected skin area.</p>
            </div>
            <div className="animate-slide-in p-6" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">2. AI Analysis</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Our advanced model analyzes the image for patterns of psoriasis.</p>
            </div>
            <div className="animate-slide-in p-6" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">3. Get Report</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Receive a detailed report with the potential type and confidence score.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
