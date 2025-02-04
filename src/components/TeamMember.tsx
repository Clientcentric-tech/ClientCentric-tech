import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamMember = ({ name, role, image, bio, social }: TeamMemberProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden min-h-[36rem]"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover h-[24rem]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        {social && (
          <div className="flex space-x-4">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="text-gray-400 hover:text-blue-600"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember;