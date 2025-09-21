
import React, { useState } from 'react';
import { DoctorDashboard } from '../components/DoctorDashboard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const DoctorPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock login. In a real app, this would be a call to an auth service.
    if (username === 'doctor' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. (Hint: doctor / password)');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex justify-center items-center animate-fade-in">
        <Card className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-center text-secondary dark:text-light mb-6">Doctor Secure Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password"className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                required 
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <Button type="submit" className="w-full">Log In</Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
      <DoctorDashboard />
    </div>
  );
};
