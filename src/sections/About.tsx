import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AnimatedSection id="about" className="bg-white dark:bg-gray-900">
      <SectionTitle 
        title="About Our Research"
        subtitle="Innovating the future of solar energy systems through predictive maintenance technologies"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Solar panel installation" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="text-accent-500 font-bold text-4xl">85%</div>
              <div className="text-gray-600 dark:text-gray-400">Failure Prediction Accuracy</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            The Challenge
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Solar energy systems face numerous operational challenges that affect their efficiency and longevity. Current maintenance approaches are often reactive, resulting in downtime, reduced energy output, and increased maintenance costs.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Our Solution
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our research develops a comprehensive predictive maintenance system that leverages machine learning algorithms, IoT sensor networks, and mobile applications to monitor, analyze, and predict potential failures before they occur.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Research Impact
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            By implementing our predictive maintenance solutions, solar installations can achieve up to 30% reduction in downtime, 25% decrease in maintenance costs, and 15% improvement in overall energy output efficiency.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;