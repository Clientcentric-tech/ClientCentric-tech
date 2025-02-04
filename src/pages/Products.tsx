import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      name: 'Enterprise Suite',
      description: 'Complete business management solution for large organizations',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      features: [
        'Resource Planning',
        'Project Management',
        'Analytics Dashboard',
        'Team Collaboration',
      ],
      price: 'Starting at $999/mo',
    },
    {
      name: 'Cloud Manager',
      description: 'Simplified cloud infrastructure management platform',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      features: [
        'Multi-cloud Support',
        'Cost Optimization',
        'Security Management',
        'Performance Monitoring',
      ],
      price: 'Starting at $499/mo',
    },
    {
      name: 'Security Shield',
      description: 'Advanced cybersecurity solution for businesses',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      features: [
        'Threat Detection',
        'Real-time Monitoring',
        'Compliance Tools',
        'Incident Response',
      ],
      price: 'Starting at $299/mo',
    },
    {
      name: 'Analytics Pro',
      description: 'Business intelligence and analytics platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      features: [
        'Custom Reports',
        'Data Visualization',
        'Predictive Analytics',
        'Integration APIs',
      ],
      price: 'Starting at $199/mo',
    },
    {
      name: 'Mobile Suite',
      description: 'Enterprise mobility management solution',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
      features: [
        'Device Management',
        'App Distribution',
        'Security Controls',
        'Usage Analytics',
      ],
      price: 'Starting at $149/mo',
    },
    {
      name: 'Collaboration Hub',
      description: 'Team collaboration and communication platform',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
      features: [
        'Video Conferencing',
        'Document Sharing',
        'Task Management',
        'Team Chat',
      ],
      price: 'Starting at $99/mo',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Products"
        subtitle="Innovative solutions designed to meet your business needs"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-gray-600">Features</th>
                  <th className="px-6 py-4 text-center text-gray-600">Basic</th>
                  <th className="px-6 py-4 text-center text-gray-600">Pro</th>
                  <th className="px-6 py-4 text-center text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Core Features',
                  'Advanced Analytics',
                  'Priority Support',
                  'Custom Integration',
                  'API Access',
                  'White Labeling',
                ].map((feature, index) => (
                  <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-6 py-4 text-gray-900">{feature}</td>
                    <td className="px-6 py-4 text-center">
                      {index < 2 ? '✓' : '×'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {index < 4 ? '✓' : '×'}
                    </td>
                    <td className="px-6 py-4 text-center">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;