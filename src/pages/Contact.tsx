import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: ['24 Avenue Road', 'Toronto, Canada'],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: ['+1 (416) 547-6638', '+1 (234) 567-8901'],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: ['contact@clientcontracttech.com', 'support@clientcontracttech.com'],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM'],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
      />

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden">
                {/* Replace with actual map implementation */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What services do you offer?',
                answer: "We offer a comprehensive range of technology solutions including software development, cloud services, cybersecurity, and IT consulting.",
              },
              {
                question: 'How can I request a quote?',
                answer: "You can request a quote by filling out our contact form or calling us directly. We'll get back to you within 24 hours.",
              },
              {
                question: 'Do you offer support after project completion?',
                answer: "Yes, we provide ongoing support and maintenance services to ensure your solution continues to perform optimally.",
              },
              {
                question: 'What is your typical project timeline?',
                answer: "Project timelines vary depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;