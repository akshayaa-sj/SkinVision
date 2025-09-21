
import React, { useState, useCallback, useRef } from 'react';
import { PredictionResult } from '../types';
import { getPsoriasisPrediction } from '../services/predictionService';
import { Spinner } from './ui/Spinner';
import { ResultDisplay } from './ResultDisplay';

export const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    } else {
      setError('Please select a valid image file (PNG, JPG, etc.).');
    }
  };

  const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleSubmit = async () => {
    if (!image) {
      setError('Please upload an image first.');
      return;
    }
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const predictionResult = await getPsoriasisPrediction(image);
      setResult(predictionResult);
    } catch (err) {
      setError('An error occurred during analysis. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      {!result && !isLoading && (
        <div 
          className={`border-4 border-dashed rounded-xl p-8 text-center transition-colors duration-300 ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600'}`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="flex flex-col items-center justify-center space-y-4 text-gray-600 dark:text-gray-300">
                <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              <p className="text-xl font-semibold">Drag & drop your image here</p>
              <p>or</p>
              <span className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                Browse Files
              </span>
            </div>
          </label>
        </div>
      )}

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {preview && !result && !isLoading && (
        <div className="mt-8 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Image Preview</h3>
          <img src={preview} alt="Skin condition preview" className="max-w-xs mx-auto rounded-lg shadow-lg" />
          <div className="mt-6 flex justify-center space-x-4">
            <button onClick={handleSubmit} className="px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-transform transform hover:scale-105 bg-primary text-white hover:bg-primary-dark focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed">Analyze Image</button>
            <button onClick={handleReset} className="px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-transform transform hover:scale-105 bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400">Choose Another</button>
          </div>
        </div>
      )}

      {isLoading && <div className="mt-8"><Spinner message="Our AI is analyzing your image... This may take a moment." /></div>}
      
      {result && (
         <div className="animate-fade-in">
            <ResultDisplay result={result} onReset={handleReset} />
         </div>
      )}
    </div>
  );
};
