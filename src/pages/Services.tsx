import { motion } from 'framer-motion';
import {
  Code,
  LineChart,
  Smartphone,
  Cloud,
  Shield,
  Users,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet your unique business needs.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'Enterprise Software',
        'API Integration',
      ],
      link: '/services/software-development',
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your business.',
      features: [
        'SEO Optimization',
        'Content Marketing',
        'Social Media Management',
        'Analytics & Reporting',
      ],
      link: '/services/digital-marketing',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications for iOS and Android.',
      features: [
        'Native Development',
        'Cross-platform Apps',
        'UI/UX Design',
        'App Store Optimization',
      ],
      link: '/services/mobile-solutions',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Services',
      description: 'Secure and scalable cloud infrastructure solutions.',
      features: [
        'Cloud Migration',
        'AWS & Azure Solutions',
        'Cloud Security',
        'DevOps Services',
      ],
      link: '/services/cloud-services',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Services',
        'Security Training',
      ],
      link: '/services/cybersecurity',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'IT Consulting',
      description: 'Expert guidance for your technology initiatives.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'IT Infrastructure',
      ],
      link: '/services/it-consulting',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive technology solutions to drive your business forward"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
              and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your needs and objectives',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Developing a comprehensive strategy',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implementing the solution',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing maintenance and optimization',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;