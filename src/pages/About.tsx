import React from 'react';
import Text from '../components/Text';
import Card from '../components/Card';
import Badge from '../components/Badge';

const About: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <Text variant="h1" color="blue" glow className="mb-4">
          About Me
        </Text>
        <Text variant="h3" color="purple" className="mb-8">
          Full Stack Developer & UI/UX Designer
        </Text>
        <div className="max-w-2xl mx-auto">
          <Text variant="body" className="mb-6">
            I'm a passionate developer with a keen eye for design and a love for creating
            beautiful, functional web applications. With several years of experience in
            full-stack development, I specialize in building modern web applications
            using cutting-edge technologies.
          </Text>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <Text variant="h2" color="blue" className="mb-8 text-center">
          Experience
        </Text>
        <div className="space-y-8">
          {[
            {
              title: 'Senior Full Stack Developer',
              company: 'Tech Company',
              period: '2020 - Present',
              description: 'Leading development of multiple web applications and mentoring junior developers.',
              technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
            },
            {
              title: 'Frontend Developer',
              company: 'Design Agency',
              period: '2018 - 2020',
              description: 'Developed responsive web applications and collaborated with design team.',
              technologies: ['React', 'JavaScript', 'Sass', 'WordPress'],
            },
          ].map((job, index) => (
            <Card key={index} variant="hover">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <Text variant="h4" color="blue">{job.title}</Text>
                  <Text variant="body" color="purple">{job.company}</Text>
                </div>
                <Text variant="small" color="muted">{job.period}</Text>
              </div>
              <Text variant="body" className="mb-4">
                {job.description}
              </Text>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech} variant="purple">{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <Text variant="h2" color="blue" className="mb-8 text-center">
          Education
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              degree: 'Bachelor of Computer Science',
              school: 'University of Technology',
              period: '2014 - 2018',
              description: 'Specialized in Software Engineering and Web Development',
            },
            {
              degree: 'UI/UX Design Certification',
              school: 'Design Institute',
              period: '2019',
              description: 'Completed intensive UI/UX design program',
            },
          ].map((edu, index) => (
            <Card key={index} variant="hover">
              <Text variant="h4" color="blue" className="mb-2">{edu.degree}</Text>
              <Text variant="body" color="purple" className="mb-2">{edu.school}</Text>
              <Text variant="small" color="muted" className="mb-4">{edu.period}</Text>
              <Text variant="body">{edu.description}</Text>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 