import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { FileText, Link as LinkIcon, Download } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Predictive Maintenance of Solar PV Systems Using Deep Learning",
      authors: "Chen, S., Rodriguez, D., Kumar, M.",
      journal: "Renewable Energy",
      year: "2024",
      doi: "10.1234/renew.2024.0123"
    },
    {
      title: "IoT Sensor Networks for Real-time Monitoring of Solar Panel Health",
      authors: "Rodriguez, D., Wilson, J., Zhang, E.",
      journal: "IEEE Internet of Things Journal",
      year: "2023",
      doi: "10.1109/jiot.2023.1234567"
    },
    {
      title: "Mobile Applications for Solar Maintenance Technicians: User Experience Design",
      authors: "Zhang, E., Patel, S., Chen, S.",
      journal: "International Journal of Human-Computer Interaction",
      year: "2023",
      doi: "10.1080/ijhci.2023.987654"
    },
    {
      title: "Anomaly Detection in Solar PV Output Using Transformer-based Time Series Models",
      authors: "Kumar, M., Chen, S., Wilson, J.",
      journal: "Applied Energy",
      year: "2023",
      doi: "10.1016/j.apenergy.2023.456789"
    },
    {
      title: "Cost-Benefit Analysis of Predictive vs. Reactive Maintenance for Solar Installations",
      authors: "Patel, S., Chen, S., Rodriguez, D.",
      journal: "Renewable and Sustainable Energy Reviews",
      year: "2022",
      doi: "10.1016/j.rser.2022.123456"
    }
  ];

  const resources = [
    {
      title: "Solar Predictive Maintenance Dataset",
      description: "Anonymized time-series data from 50 solar installations with labeled failure events",
      type: "Dataset"
    },
    {
      title: "SolarPredict Mobile App Demo",
      description: "Interactive demonstration of our mobile application interface for maintenance technicians",
      type: "Demo"
    },
    {
      title: "ML Model Documentation",
      description: "Technical documentation of our machine learning pipeline and model architectures",
      type: "Documentation"
    }
  ];

  return (
    <AnimatedSection id="publications" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle 
        title="Publications & Resources"
        subtitle="Research papers, datasets, and tools developed through our project"
      />
      
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Research Papers
        </h3>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div 
              key={pub.title}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-start md:items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-600 dark:text-primary-400 md:mr-2 flex-shrink-0">
                <FileText size={24} />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">{pub.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{pub.authors}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{pub.journal}, {pub.year}</p>
              </div>
              <div className="flex-shrink-0 mt-3 md:mt-0">
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <LinkIcon size={16} className="mr-1" />
                  DOI: {pub.doi}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Research Resources
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div 
              key={resource.title}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                {resource.type}
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{resource.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{resource.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mt-auto"
              >
                <Download size={16} className="mr-1" />
                Access Resource
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Publications;