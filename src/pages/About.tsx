import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership with our clients.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of industry trends and technologies.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Impact',
      description: 'We measure our success by the positive impact we create for our clients.',
    },
  ];

  const testimonials = [
    {
      quote: "Working with this company has transformed our business operations. Their innovative solutions and dedicated support have been invaluable.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      quote: "Their expertise and professionalism are unmatched. They truly understand our needs and deliver exceptional results.",
      author: "Michael Chen",
      role: "CTO",
      company: "Global Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Building the future through innovation and excellence"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, we set out with a clear mission: to help businesses thrive in the digital age through innovative technology solutions and expert consulting services.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve clients worldwide, delivering cutting-edge solutions that drive growth and success. Our team of experts brings together decades of industry experience with a passion for innovation.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 text-center">
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;