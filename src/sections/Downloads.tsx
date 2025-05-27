import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  FileArchive,
  PresentationIcon,
  ClipboardList,
  BookOpen,
} from 'lucide-react';

const Downloads = () => {
  const resources = [
    {
      title: 'Project Proposal',
      description: 'Initial project proposal and research objectives',
      link: 'https://drive.google.com/drive/folders/1Ivn0cRF-OKm-MfTqp1phizoDLbtGlmy0?usp=sharing',
      icon: ClipboardList,
      color: 'text-blue-500 dark:text-blue-400',
    },
    {
      title: 'Progress Presentation 1',
      description: 'First milestone presentation and progress report',
      link: 'https://drive.google.com/drive/folders/17tQB4WX03ixBhFzWyQfNAMypLL3RirsM?usp=sharing',
      icon: PresentationIcon,
      color: 'text-green-500 dark:text-green-400',
    },
    {
      title: 'Progress Presentation 2',
      description: 'Second milestone presentation and project updates',
      link: 'https://drive.google.com/drive/folders/1ECpehF7qT65lh1-FiU2tAZV_Z8SPGkOO?usp=sharing',
      icon: PresentationIcon,
      color: 'text-yellow-500 dark:text-yellow-400',
    },
    {
      title: 'Final Presentation and Viva',
      description: 'Final presentation slides and viva materials',
      link: 'https://drive.google.com/drive/folders/1VG4WHwfcvb4_f8rTNxegdUcIhU64Phjk?usp=sharing',
      icon: FileArchive,
      color: 'text-purple-500 dark:text-purple-400',
    },
    {
      title: 'Research Paper and Documents',
      description:
        'Research paper, documentation and other supporting materials',
      link: 'https://drive.google.com/drive/folders/1xeIoX1aoqk6kCkUFyFIDjKgTu8Dle0nN?usp=sharing',
      icon: BookOpen,
      color: 'text-red-500 dark:text-red-400',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    hover: {
      y: -8,
      boxShadow:
        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatedSection
      id="downloads"
      className="bg-gray-50 dark:bg-gray-800 py-16"
    >
      <SectionTitle
        title="Downloads"
        subtitle="Access our research materials and presentations"
        center
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <motion.div
              key={resource.title}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex flex-col h-full border border-transparent hover:border-primary-100 dark:hover:border-primary-800 overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <motion.div
                    className={`${resource.color} mb-5 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg inline-block`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                    {resource.description}
                  </p>
                </div>
                <motion.a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group mt-auto"
                  whileHover={{ x: 3 }}
                >
                  <span className="mr-2">Download Resource</span>
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 3 }}>
                    <ExternalLink size={16} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
};

export default Downloads;
