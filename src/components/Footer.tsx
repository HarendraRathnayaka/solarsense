import { Link } from 'react-scroll';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left section - Brand and icons */}
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary-600 dark:text-primary-400"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
              <span className="text-xl font-bold text-primary-700 dark:text-primary-400">
                SolarPredict
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Predictive maintenance systems for solar installations using
              machine learning, IoT, and mobile applications.
            </p>
            <div className="flex space-x-4 mb-8">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <Github size={22} />
              </div>
              <div className="bg-sky-500 text-white p-2 rounded-full">
                <Twitter size={22} />
              </div>
              <div className="bg-blue-700 text-white p-2 rounded-full">
                <Linkedin size={22} />
              </div>
              <div className="bg-red-500 text-white p-2 rounded-full">
                <Mail size={22} />
              </div>
            </div>
          </div>

          {/* Middle section - Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-primary-500 pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Research', 'Methodology', 'Results'].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors duration-200 flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-primary-500 pb-2 inline-block">
                Resources
              </h3>
              <ul className="space-y-3">
                {[
                  'Team',
                  'Publications',
                  'Contact',
                  'Privacy Policy',
                  'Terms of Use',
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase().replace(/\s+/g, '-')}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={700}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right section - Contact with quote */}
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-primary-500 pb-2 inline-block">
              Our Mission
            </h3>
            <blockquote className="border-l-4 border-primary-500 pl-4 py-2 italic text-gray-600 dark:text-gray-400 mb-6">
              "Predicting tomorrow's solar performance today. Our maintenance
              systems empower sustainable energy through proactive intelligence,
              ensuring every ray of sunlight reaches its full potential."
            </blockquote>
            
          </div>
        </div>

        {/* Bottom copyright with divider */}
        <div className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SolarSense Research. All
              rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
              Designed with ♥ for sustainable energy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
