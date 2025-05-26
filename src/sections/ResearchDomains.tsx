import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import { BrainCircuit, Cpu, Smartphone } from 'lucide-react';

const ResearchDomains = () => {
  const domains = [
    {
      title: "Machine Learning",
      icon: <BrainCircuit size={40} />,
      description: "Using advanced ML algorithms to analyze patterns in solar panel performance data and predict potential failures before they occur. Our models incorporate deep learning for time-series analysis and anomaly detection."
    },
    {
      title: "Internet of Things",
      icon: <Cpu size={40} />,
      description: "Developing low-power, high-reliability sensor networks to monitor environmental conditions, electrical performance, and mechanical aspects of solar installations. Our IoT architecture ensures real-time data transmission with minimal energy consumption."
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone size={40} />,
      description: "Creating intuitive mobile interfaces for technicians and system operators to monitor system health, receive alerts, and access maintenance recommendations. Our mobile platform includes AR features for on-site diagnostics."
    }
  ];

  return (
    <AnimatedSection id="research" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle 
        title="Research Domains"
        subtitle="Our interdisciplinary approach combines expertise across three key technological areas"
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {domains.map((domain, index) => (
          <FeatureCard 
            key={domain.title}
            icon={domain.icon}
            title={domain.title}
            description={domain.description}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Interdisciplinary Integration
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Data Collection</h4>
            <p className="text-gray-600 dark:text-gray-400">IoT sensors gather performance metrics and environmental data in real-time</p>
          </div>
          
          <div>
            <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Analysis & Prediction</h4>
            <p className="text-gray-600 dark:text-gray-400">Machine learning models process data to identify patterns and predict potential failures</p>
          </div>
          
          <div>
            <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Action & Intervention</h4>
            <p className="text-gray-600 dark:text-gray-400">Mobile applications notify technicians with detailed diagnostics and maintenance procedures</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ResearchDomains;