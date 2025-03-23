
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    organization: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      phone: '',
      organization: ''
    });
    
    // Show success feedback
    alert('Your message has been sent. We will get back to you soon!');
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-dark-900"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sample - Have Something On Your Mind?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Reach out to our team and let's discuss how we can help you implement cutting-edge AI solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              
              <InputField 
                label="Email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              
              <InputField 
                label="Company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                required 
              />
              
              <InputField 
                label="Phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>
            
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Organization Type
              </label>
              <select 
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
              >
                <option value="" disabled>Select Organization Type</option>
                <option value="enterprise">Enterprise</option>
                <option value="startup">Startup</option>
                <option value="government">Government</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Message
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
                placeholder="Tell us about your project or inquiry..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField = ({ label, name, type = "text", value, onChange, required }: InputFieldProps) => (
  <div>
    <label className="block text-white mb-2 text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
      required={required}
    />
  </div>
);

export default ContactForm;
