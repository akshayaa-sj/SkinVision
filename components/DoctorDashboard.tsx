
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PsoriasisType } from '../types';
import { Card } from './ui/Card';

const data = [
  { name: 'Plaque', probability: 450 },
  { name: 'Guttate', probability: 200 },
  { name: 'Inverse', probability: 150 },
  { name: 'Pustular', probability: 80 },
  { name: 'Erythrodermic', probability: 20 },
  { name: 'Rare Variant', probability: 50 },
];

export const DoctorDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-secondary dark:text-primary-light">Doctor Dashboard</h2>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Case Distribution Analytics</h3>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'rgba(26, 32, 44, 0.8)', 
                  borderColor: '#007C82'
                }} 
                labelStyle={{ color: '#F5F9FC' }}
              />
              <Legend />
              <Bar dataKey="probability" fill="#007C82" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Recent Patient Reports</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700">
              <span>Patient #1023 - Plaque</span>
              <button className="text-sm text-primary hover:underline">View Report</button>
            </li>
            <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700">
              <span>Patient #1022 - Guttate</span>
              <button className="text-sm text-primary hover:underline">View Report</button>
            </li>
            <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700">
              <span>Patient #1021 - Inverse</span>
              <button className="text-sm text-primary hover:underline">View Report</button>
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Add Clinical Notes</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Patient ID</label>
              <input type="text" id="patientId" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Notes</label>
              <textarea id="notes" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-transform transform hover:scale-105 bg-secondary text-white hover:bg-blue-800 focus:ring-secondary">Save Notes</button>
          </form>
        </Card>
      </div>
    </div>
  );
};
