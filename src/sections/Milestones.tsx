import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FileText,
  PenTool,
  Presentation,
  BookOpen,
  Globe,
  ClipboardList,
  Award,
  Flag,
  User,
} from 'lucide-react';

const Milestones = () => {
  const [activeIndex, setActiveIndex] = useState(7); // Start at the final milestone
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  const milestones = [
    {
      title: 'Project Proposal',
      description:
        'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
      icon: PenTool,
      color: 'bg-blue-500',
    },
    {
      title: 'Progress Presentation I',
      description:
        'Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.',
      icon: Presentation,
      color: 'bg-green-500',
    },
    {
      title: 'Progress Presentation II',
      description:
        'Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.',
      icon: Presentation,
      color: 'bg-yellow-500',
    },
    {
      title: 'Research Paper',
      description:
        'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge',
      icon: FileText,
      color: 'bg-purple-500',
    },
    {
      title: 'Website Assessment',
      description:
        'The Website helps to promote our research project and reveals all details related to the project.',
      icon: Globe,
      color: 'bg-pink-500',
    },
    {
      title: 'Logbook',
      description:
        "Status of the project is validated through the Logbook. This also includes 'Status documents' I & II.",
      icon: BookOpen,
      color: 'bg-indigo-500',
    },
    {
      title: 'Final Report',
      description:
        'Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.',
      icon: ClipboardList,
      color: 'bg-orange-500',
    },
    {
      title: 'Final Presentation & Viva',
      description:
        'Viva is held individually to assess each members contribution to the project and knowledge gained.',
      icon: Award,
      color: 'bg-red-500',
    },
  ];

  useEffect(() => {
    // Initial animation: character moves from first to last milestone more slowly
    let currentPos = 0;
    const interval = setInterval(() => {
      if (currentPos < milestones.length - 1) {
        currentPos++;
        setActiveIndex(currentPos);
      } else {
        clearInterval(interval);
        setInitialAnimationDone(true);
      }
    }, 1000); // Increased from 300ms to 1000ms for slower movement

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedSection
      id="milestones"
      className="bg-gray-50 dark:bg-gray-900 py-16 overflow-hidden"
    >
      <SectionTitle
        title="Research Journey"
        subtitle="Follow our path through key project milestones"
        center
      />

      <div className="mt-16 max-w-7xl mx-auto px-4">
        {/* 3D Road Map */}
        <div className="relative mb-16">
          {/* Start and End Flags */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="bg-green-600 p-3 rounded-full shadow-lg">
                <Flag size={20} className="text-white" />
              </div>
              <p className="text-xs font-bold mt-1 text-green-600 dark:text-green-400">
                START
              </p>
            </motion.div>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="bg-red-600 p-3 rounded-full shadow-lg">
                <Flag size={20} className="text-white" />
              </div>
              <p className="text-xs font-bold mt-1 text-red-600 dark:text-red-400">
                FINISH
              </p>
            </motion.div>
          </div>

          {/* Road Path */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-20 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full shadow-lg transform perspective-1000 rotateX-12"
          >
            {/* Road Markings */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white dark:bg-gray-300 z-10">
              <div className="flex justify-between absolute left-0 right-0 -top-1">
                {Array(16)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="w-6 h-1 bg-white dark:bg-gray-300"
                    ></motion.div>
                  ))}
              </div>
            </div>

            {/* Milestone Markers */}
            <div className="absolute top-0 bottom-0 left-8 right-8 flex justify-between items-center">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      scale: { duration: 0.2 },
                    }}
                    className="relative z-10"
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.div
                      className={`w-10 h-10 ${milestone.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                      whileHover={{ scale: 1.15 }}
                      animate={{
                        boxShadow: isActive
                          ? '0 0 0 4px rgba(255,255,255,0.7), 0 0 15px rgba(0,0,0,0.3)'
                          : '0 4px 6px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>

                    {/* Milestone Number */}
                    <motion.div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Technician Avatar - Slowed down transition */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 z-30 pointer-events-none"
              initial={{ left: '0%' }}
              animate={{
                left: `${(activeIndex / (milestones.length - 1)) * 100}%`,
                y: initialAnimationDone ? [-5, 5, -5] : 0,
              }}
              transition={{
                left: {
                  type: 'spring',
                  stiffness: 100, // Reduced from 300 for slower movement
                  damping: 20, // Adjusted for smoother motion
                  duration: 1.2, // Added explicit duration for slower movement
                },
                y: initialAnimationDone
                  ? {
                      repeat: Infinity,
                      duration: 1.5,
                    }
                  : {},
              }}
            >
              <motion.div
                className="relative bg-blue-600 rounded-full p-2 -ml-4 shadow-xl"
                animate={{
                  rotate: initialAnimationDone ? [0, 10, 0, -10, 0] : 0,
                }}
                transition={{
                  repeat: initialAnimationDone ? Infinity : 0,
                  duration: 2,
                }}
              >
                <User size={18} className="text-white" />

                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400 -z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Active Milestone Details - Removed percentage */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl max-w-3xl mx-auto border-l-4"
          style={{
            borderLeftColor: milestones[activeIndex].color.replace(
              'bg-',
              'rgb('
            ),
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className={`${milestones[activeIndex].color} p-3 rounded-lg flex-shrink-0`}
            >
              {React.createElement(milestones[activeIndex].icon, {
                size: 24,
                className: 'text-white',
              })}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {milestones[activeIndex].title}
                </h3>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                  Milestone {activeIndex + 1} of {milestones.length}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {milestones[activeIndex].description}
              </p>

              {/* Progress Bar - Removed percentage */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>Project Progress</span>
                  {/* Percentage removed */}
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-700"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        ((activeIndex + 1) / milestones.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center mt-8 gap-2">
          <motion.button
            onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: activeIndex > 0 ? 1.05 : 1 }}
            whileTap={{ scale: activeIndex > 0 ? 0.95 : 1 }}
          >
            Previous
          </motion.button>

          <motion.button
            onClick={() =>
              activeIndex < milestones.length - 1 &&
              setActiveIndex(activeIndex + 1)
            }
            disabled={activeIndex === milestones.length - 1}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{
              scale: activeIndex < milestones.length - 1 ? 1.05 : 1,
            }}
            whileTap={{ scale: activeIndex < milestones.length - 1 ? 0.95 : 1 }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Milestones;
