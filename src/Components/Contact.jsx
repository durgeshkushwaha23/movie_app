import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen xt-white flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl w-full  rounded-lg shadow-lg p-8 animate-fade-in">
        <h1 className="text-5xl font-bold text-purple-500 text-center mb-8 tracking-wider">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-8 leading-relaxed">
          Have any questions? We’d love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-around mb-12">
          <div className="text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl text-purple-400 font-semibold">Email Us</h3>
            <p className="text-gray-400 mt-2">info@company.com</p>
          </div>
          <div className="text-center mt-6 md:mt-0 hover:scale-105 transition duration-300">
            <h3 className="text-2xl text-purple-400 font-semibold">Call Us</h3>
            <p className="text-gray-400 mt-2">+1 (555) 123-4567</p>
          </div>
          <div className="text-center mt-6 md:mt-0 hover:scale-105 transition duration-300">
            <h3 className="text-2xl text-purple-400 font-semibold">Location</h3>
            <p className="text-gray-400 mt-2">123 Street, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label className="text-lg text-purple-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-zinc-800  text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-all"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-lg text-purple-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-zinc-800  text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-all"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-lg text-purple-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-md bg-zinc-800 text-white border border-gray-700 h-32 focus:outline-none focus:border-purple-500 transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
