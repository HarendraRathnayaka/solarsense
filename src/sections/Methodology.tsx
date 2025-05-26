import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const Methodology = () => {
  const steps = [
    {
      number: "01",
      title: "Data Collection & Preprocessing",
      description: "Gathering performance metrics, environmental data, and maintenance records from solar installations. Data is cleaned, normalized, and prepared for analysis."
    },
    {
      number: "02",
      title: "Feature Engineering & Selection",
      description: "Identifying and extracting meaningful features from raw data that correlate with system failures or performance degradation."
    },
    {
      number: "03",
      title: "Model Development & Training",
      description: "Building and training machine learning models using supervised and unsupervised techniques to predict potential failures and classify system anomalies."
    },
    {
      number: "04",
      title: "IoT Infrastructure Design",
      description: "Developing sensor networks, communication protocols, and edge computing solutions to capture and transmit real-time data efficiently."
    },
    {
      number: "05",
      title: "Mobile Interface Development",
      description: "Creating user-friendly mobile applications that present system status, predictions, and maintenance recommendations to technicians and operators."
    },
    {
      number: "06",
      title: "Validation & Field Testing",
      description: "Implementing the integrated system in real-world solar installations to validate performance, accuracy, and usability under actual operating conditions."
    }
  ];

  return (
    <AnimatedSection id="methodology" className="bg-white dark:bg-gray-900">
      <SectionTitle 
        title="Research Methodology"
        subtitle="Our systematic approach to developing predictive maintenance solutions"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="space-y-12">
              {steps.slice(0, 3).map((step, index) => (
                <motion.div 
                  key={step.number}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="space-y-12">
              {steps.slice(3).map((step, index) => (
                <motion.div 
                  key={step.number}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Research Ethics & Considerations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Data Privacy</h4>
            <p className="text-gray-600 dark:text-gray-400">Our research adheres to strict data privacy protocols, ensuring all collected information is anonymized and securely stored.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Environmental Impact</h4>
            <p className="text-gray-600 dark:text-gray-400">We design our IoT components with sustainability in mind, minimizing resource consumption and ensuring recyclability.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Transparency</h4>
            <p className="text-gray-600 dark:text-gray-400">Our machine learning models are designed for interpretability, allowing users to understand the reasoning behind predictions.</p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Methodology;