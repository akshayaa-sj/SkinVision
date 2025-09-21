
import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        // In a real app, this would integrate with an email service
    };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-light">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                </div>
                <div>
                    <Button type="submit" className="w-full">Submit</Button>
                </div>
            </form>
        </Card>
        <div className="space-y-8">
            <Card className="p-8">
                <h3 className="text-xl font-bold text-secondary dark:text-light mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>Address:</strong> 123 Health St, Med-City, 45678</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> contact@skinvision.ai</p>
                </div>
            </Card>
             <Card className="overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086319853335!2d-122.4194156846816!3d37.77492957975846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e84f67b%3A0x86134b35e5a9a5f!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1617290829555!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={false}
                    loading="lazy"
                    title="Location Map"
                ></iframe>
            </Card>
        </div>
      </div>
    </div>
  );
};
