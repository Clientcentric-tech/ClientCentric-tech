import { motion } from 'framer-motion';
import Button from './Button';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const ProductCard = ({
  name,
  description,
  image,
  features,
  price,
  ctaText = 'Learn More',
  onCtaClick,
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden min-h-[654px]"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover min-h-[275px]"
        />
      </div>
      <div className="p-6 h-full grid grid-2 content-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          {price && (
            <p className="text-2xl font-bold text-blue-600 mb-4">
              {price}
            </p>
          )}
          <Button onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>
      </div>


    </motion.div>
  );
};

export default ProductCard;