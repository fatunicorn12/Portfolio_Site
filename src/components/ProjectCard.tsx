import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'In Progress' | 'Completed' | 'Archived';
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-600 text-green-100';
      case 'In Progress': return 'bg-blue-600 text-blue-100';
      case 'Archived': return 'bg-gray-600 text-gray-100';
      default: return 'bg-gray-600 text-gray-100';
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-green-400 group-hover:text-green-300">
            {project.title}
          </CardTitle>
          <Badge className={`text-xs ${getStatusColor(project.status)}`}>
            {project.status}
          </Badge>
        </div>
        <CardDescription className="text-gray-300">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="bg-gray-700 text-gray-200 border-gray-600 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}