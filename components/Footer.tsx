
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} SkinVision. All rights reserved.</p>
            <p className="text-sm text-gray-400">This is a tool for informational purposes and not a substitute for professional medical advice.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter"><i className="fab fa-twitter"></i>Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
