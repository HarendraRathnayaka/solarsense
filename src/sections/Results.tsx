import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const Results = () => {
  const stats = [
    { value: "85%", label: "Failure Prediction Accuracy" },
    { value: "30%", label: "Reduction in System Downtime" },
    { value: "25%", label: "Decrease in Maintenance Costs" },
    { value: "15%", label: "Improvement in Energy Output" }
  ];

  const findings = [
    {
      title: "Performance Prediction",
      description: "Our neural network models successfully predict performance degradation up to 2 weeks before traditional monitoring systems can detect issues.",
      image: "https://images.pexels.com/photos/5699480/pexels-photo-5699480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Fault Classification",
      description: "The system accurately classifies 12 different types of solar panel faults with 85% precision, enabling targeted maintenance interventions.",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Energy Efficiency",
      description: "Installations using our predictive maintenance system show an average 15% improvement in energy production efficiency over traditional maintenance approaches.",
      image: "https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <AnimatedSection id="results" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle 
        title="Research Results"
        subtitle="Key findings and outcomes from our ongoing research"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="space-y-16">
        {findings.map((finding, index) => (
          <motion.div 
            key={finding.title}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <img 
                src={finding.image} 
                alt={finding.title}
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{finding.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{finding.description}</p>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border-l-4 border-primary-600">
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Key Insight</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {index === 0 && "Early detection of micro-cracks in solar panels can prevent up to 35% of catastrophic failures."}
                  {index === 1 && "Thermal imaging combined with ML classification identifies hotspots with 92% sensitivity."}
                  {index === 2 && "Optimized cleaning schedules based on predictive soiling models increase energy harvest by 8-12%."}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Current Limitations & Future Work
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Limitations</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Model performance varies with different solar panel technologies</li>
              <li>Limited historical data for rare failure modes</li>
              <li>Energy constraints for remote IoT sensor deployments</li>
              <li>Integration challenges with legacy monitoring systems</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Future Research</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Federated learning across multiple solar installations</li>
              <li>Self-healing recommendations for automated maintenance</li>
              <li>Integration with energy market forecasting</li>
              <li>Extended battery life for IoT sensors using energy harvesting</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Results;