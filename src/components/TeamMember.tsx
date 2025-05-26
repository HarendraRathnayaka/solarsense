import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

const TeamMember = ({ name, role, image, bio, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-primary-600 dark:text-primary-400 mb-3">{role}</p>
        <p className="text-gray-600 dark:text-gray-400">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;