import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../components/Text';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <Text variant="h1" color="blue" glow className="mb-4">
          Welcome to My Portfolio
        </Text>
        <Text variant="h3" color="purple" className="mb-8">
          Full Stack Developer & UI/UX Designer
        </Text>
        <div className="flex justify-center gap-4">
          <Button variant="primary" size="lg">
            View Projects
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <Text variant="h2" color="blue" className="mb-12 text-center">
          Featured Projects
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <Card variant="interactive">
            <div className="aspect-video bg-cyber-gray rounded-lg mb-4"></div>
            <Text variant="h4" color="blue">Project One</Text>
            <div className="mt-2">
              <Badge variant="purple">React</Badge>
              <Badge variant="pink" className="ml-2">TypeScript</Badge>
            </div>
            <Text variant="body" className="mt-4">
              A brief description of the project and its key features.
            </Text>
            <Button variant="primary" className="mt-6">
              View Project
            </Button>
          </Card>

          {/* Project Card 2 */}
          <Card variant="interactive">
            <div className="aspect-video bg-cyber-gray rounded-lg mb-4"></div>
            <Text variant="h4" color="blue">Project Two</Text>
            <div className="mt-2">
              <Badge variant="purple">Node.js</Badge>
              <Badge variant="pink" className="ml-2">Express</Badge>
            </div>
            <Text variant="body" className="mt-4">
              Another amazing project showcasing backend development skills.
            </Text>
            <Button variant="primary" className="mt-6">
              View Project
            </Button>
          </Card>

          {/* Project Card 3 */}
          <Card variant="interactive">
            <div className="aspect-video bg-cyber-gray rounded-lg mb-4"></div>
            <Text variant="h4" color="blue">Project Three</Text>
            <div className="mt-2">
              <Badge variant="purple">Next.js</Badge>
              <Badge variant="pink" className="ml-2">Tailwind</Badge>
            </div>
            <Text variant="body" className="mt-4">
              A modern web application built with cutting-edge technologies.
            </Text>
            <Button variant="primary" className="mt-6">
              View Project
            </Button>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <Text variant="h2" color="blue" className="mb-12 text-center">
          Skills & Expertise
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind CSS', 'UI/UX Design'].map((skill) => (
            <Card key={skill} variant="hover">
              <Text variant="body" color="blue" className="text-center">
                {skill}
              </Text>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 