import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jack Petrovic',
      role: 'CEO & Founder', 
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'With over 7 years of experience in technology leadership, Jack drives our company vision and strategy.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jackpetrovic@outlook.com',
      },
    },
    {
      name: 'Austin Ryder',
      role: 'CTO',
      // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Austin leads our technical initiatives with expertise in cloud architecture and enterprise solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'Austinryder@gmail.com',
      },
    },
    {
      name: 'Tomson Ewan',
      role: 'Head of Product',
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      bio: 'Tomson brings innovative product vision and user-centered design thinking to our solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'Tomsonewan@gmail.com',
      },
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      bio: 'Emily creates beautiful and intuitive user experiences that delight our customers.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@company.com',
      },
    },
    {
      name: 'David Martin',
      role: 'Senior Developer',
      // image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      bio: 'David is a full-stack developer with expertise in scalable architecture and cloud solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@company.com',
      },
    },
    {
      name: 'Lisa Bell',
      role: 'Marketing Director',
      // image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      bio: 'Lisa drives our marketing strategy and brand development with creative excellence.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@company.com',
      },
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Team"
        subtitle="Meet the experts behind our success"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      />

      {/* Team Members Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-h-[36rem]"
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team.
              Check out our open positions below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                position: 'Senior Software Engineer',
                department: 'Engineering',
                location: 'Remote',
                type: 'Full-time',
              },
              {
                position: 'UX Designer',
                department: 'Design',
                location: 'San Francisco',
                type: 'Full-time',
              },
              {
                position: 'Product Manager',
                department: 'Product',
                location: 'New York',
                type: 'Full-time',
              },
              {
                position: 'DevOps Engineer',
                department: 'Engineering',
                location: 'Remote',
                type: 'Full-time',
              },
            ].map((job, index) => (
              <motion.div
                key={job.position}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.position}
                </h3>
                <div className="text-gray-600 mb-4">
                  <p>{job.department} • {job.location}</p>
                  <p>{job.type}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Details →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;