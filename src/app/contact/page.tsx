'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Ready to elevate your business with cutting-edge digital displays? Contact Vizage Solutions 
            today to discover how our innovative signage can transform your customer engagement.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-700">info@vizagesolutions.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-700">
                123 Digital Avenue<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full mt-6 bg-accent text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
