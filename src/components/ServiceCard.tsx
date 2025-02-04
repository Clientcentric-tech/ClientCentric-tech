import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard = ({ icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 min-h-[384px]"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-700"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;