import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

import sanjeewi from '../images/sanjeewi.jpg';
import nelum from '../images/nelum.jpg';
import udara from '../images/udara.jpg';
import navindi from '../images/navindi.jpg';
import harendra from '../images/harendra.jpg';
import vimankith from '../images/vimankith.jpg';
import sayuri from '../images/sayuri.jpg';

const Team = () => {
  const supervisors = [
    {
      name: 'Ms. Sanjeewi Chandrasiri',
      role: 'Supervisor',
      image: sanjeewi,
      department: 'Department of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      linkedin: 'https://www.linkedin.com/in/sanjeevi-chandrasiri-6154b319/',
    },
    {
      name: 'Mr. Nelum Amarasena',
      role: 'Co-Supervisor',
      image: nelum,
      department: 'Department of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      linkedin: 'https://www.linkedin.com/in/nelum-chathuranga-amarasena-703a66176/',
    },
    {
      name: 'Mr. Udara Dissanayake',
      role: 'External Supervisor',
      image: udara,
      department: 'Head of R&D and CEO at Wihaso Innovations',
      institution: 'Wihaso Innovations (PVT) LTD',
      linkedin: 'https://linkedin.com/in/example3',
    },
  ];

  const members = [
    {
      name: 'Navindi R.L.S',
      role: 'Group Member',
      image: navindi,
      department: 'Department of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      linkedin: 'https://www.linkedin.com/in/supuni-navindi-94333b215/',
    },
    {
      name: 'Perera M.A.V.D',
      role: 'Group Member',
      image: vimankith,
      department: 'Department of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      linkedin: 'https://www.linkedin.com/in/vimankith-perera-11b5782a4/',
    },
    {
      name: 'Nayanamudu R.M.H',
      role: 'Group Member',
      image: harendra,
      department: 'Department of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      linkedin: 'https://www.linkedin.com/in/harendra-rathnayaka-868564218/',
    },

    {
      name: 'Perera U.V.S.A',
      role: 'Group Member',
      image: sayuri,
      department: 'Department of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      linkedin: 'https://www.linkedin.com/in/sayuri-perera-364014219/',
    },
  ];

  const TeamCard = ({ member, delay = 0 }) => (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Circular image container */}
      <div className="flex justify-center mb-6">
        <div className="w-45 h-40 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-800 shadow-md">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.src = placeholder;
            }}
          />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          {member.institution}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {member.department}
        </p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
        >
          <Linkedin className="mr-2" size={20} />
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </motion.div>
  );

  return (
    <AnimatedSection id="team" className="bg-white dark:bg-gray-900">
      <SectionTitle
        title="Our Team"
        subtitle="Meet the experts and researchers behind SolarSense"
        center
      />

      <div className="space-y-12 max-w-7xl mx-auto px-4">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Supervisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supervisors.map((supervisor, index) => (
              <TeamCard
                key={supervisor.name}
                member={supervisor}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Group Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Team;
