import React, { useState } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-12">
      <Text variant="h1" color="blue" glow className="mb-12 text-center">
        Get in Touch
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card variant="hover">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              fullWidth
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="glass w-full px-4 py-2 rounded-md border border-cyber-gray focus:border-cyber-blue focus:outline-none bg-transparent text-white placeholder:text-gray-500"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              isLoading={isSubmitting}
            >
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card variant="hover">
            <Text variant="h3" color="blue" className="mb-4">
              Contact Information
            </Text>
            <div className="space-y-4">
              <div>
                <Text variant="body" color="purple">Email</Text>
                <Text variant="body">your.email@example.com</Text>
              </div>
              <div>
                <Text variant="body" color="purple">Location</Text>
                <Text variant="body">City, Country</Text>
              </div>
              <div>
                <Text variant="body" color="purple">Phone</Text>
                <Text variant="body">+1 234 567 890</Text>
              </div>
            </div>
          </Card>

          <Card variant="hover">
            <Text variant="h3" color="blue" className="mb-4">
              Social Links
            </Text>
            <div className="space-y-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyber-blue hover:text-cyber-purple transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyber-blue hover:text-cyber-purple transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyber-blue hover:text-cyber-purple transition-colors"
              >
                Twitter
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact; 