import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Here you would normally implement your email sending logic
      // For example, using a service like EmailJS, Formspree, or your own backend
      console.log('Sending email to: predictivemaintenance5@gmail.com');
      console.log('Also sending a copy to:', formData.email);
      console.log('Form data:', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="bg-white dark:bg-gray-900">
      <SectionTitle
        title="Contact Us"
        subtitle="Get in touch with our research team for collaborations, questions, or feedback"
        center
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h3>

          <div className="space-y-6">
            {/* Addresses in the same row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-primary-600 dark:text-primary-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">
                    Research Location
                  </h4>
                  <address className="not-italic text-gray-600 dark:text-gray-400">
                    No. 436/3/1 High-Level Road,
                    <br />
                    Pannipitiya,
                    <br />
                    Sri Lanka
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary-600 dark:text-primary-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">
                    Campus Address
                  </h4>
                  <address className="not-italic text-gray-600 dark:text-gray-400">
                    SLIIT Malabe Campus,
                    <br />
                    New Kandy Rd,
                    <br />
                    Malabe 10115
                  </address>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-primary-600 dark:text-primary-400 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  <a
                    href="mailto:predictivemaintenance5@gmail.com"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    predictivemaintenance5@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-primary-600 dark:text-primary-400 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  <a
                    href="tel:+94703844385"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    +94 70 3844 385
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Research Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're currently seeking graduate students and research assistants
              interested in:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Machine learning for time-series prediction</li>
              <li>IoT sensor network development</li>
              <li>Mobile application UI/UX design</li>
              <li>Solar energy systems engineering</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Send a Message
          </h3>

          {submitMessage && (
            <div
              className={`p-4 mb-6 rounded-lg ${
                submitMessage.includes('error')
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {submitMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    formErrors.name
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    formErrors.email
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  formErrors.subject
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder="Research Collaboration"
              />
              {formErrors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  formErrors.message
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder="Your message here..."
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.message}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                id="sendCopy"
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <label
                htmlFor="sendCopy"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Send me a copy of this message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full disabled:opacity-75"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              * All fields are required
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
