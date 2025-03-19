import React from 'react';
import Text from '../components/Text';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/projects/ecommerce.jpg',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
      image: '/projects/taskmanager.jpg',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with a cyberpunk theme and interactive animations.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      image: '/projects/portfolio.jpg',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard application with real-time data and interactive charts.',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind'],
      image: '/projects/weather.jpg',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application with user presence and message history.',
      technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
      image: '/projects/chat.jpg',
    },
    {
      title: 'Recipe Finder',
      description: 'A recipe finder application with search, filtering, and favorite recipes functionality.',
      technologies: ['Next.js', 'TypeScript', 'Spoonacular API', 'Tailwind'],
      image: '/projects/recipes.jpg',
    },
  ];

  return (
    <div className="py-12">
      <Text variant="h1" color="blue" glow className="mb-12 text-center">
        My Projects
      </Text>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} variant="interactive">
            <div className="aspect-video bg-cyber-gray rounded-lg mb-4"></div>
            <Text variant="h4" color="blue">{project.title}</Text>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="purple">{tech}</Badge>
              ))}
            </div>
            <Text variant="body" className="mt-4">
              {project.description}
            </Text>
            <div className="mt-6 flex gap-4">
              <Button variant="primary">
                View Project
              </Button>
              <Button variant="outline">
                Source Code
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects; 