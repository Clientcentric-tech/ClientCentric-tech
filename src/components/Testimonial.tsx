import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const Testimonial = ({ quote, author, role, company, image }: TestimonialProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <Quote className="h-8 w-8 text-blue-600 mb-4" />
      <blockquote className="text-gray-600 mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-gray-600">{role}</div>
          <div className="text-blue-600">{company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;