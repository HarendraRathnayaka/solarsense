import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
            <div className="flex items-start">
              <div className="text-primary-600 dark:text-primary-400 mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Research Location</h4>
                <address className="not-italic text-gray-600 dark:text-gray-400">
                  University Research Lab<br />
                  123 Innovation Avenue<br />
                  Research Park, CA 90210
                </address>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary-600 dark:text-primary-400 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="mailto:contact@solarpredict.research" className="hover:text-primary-600 dark:hover:text-primary-400">
                    contact@solarpredict.research
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary-600 dark:text-primary-400 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="tel:+15551234567" className="hover:text-primary-600 dark:hover:text-primary-400">
                    +1 (555) 123-4567
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
              We're currently seeking graduate students and research assistants interested in:
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
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Research Collaboration"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;