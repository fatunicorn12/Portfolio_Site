import React from 'react';
import { Badge } from './ui/badge';

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  
  // Frameworks / Libraries
  { name: 'Express.js', category: 'Frameworks / Libraries' },
  { name: 'Django', category: 'Frameworks / Libraries' },
  { name: 'Flask', category: 'Frameworks / Libraries' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  
  // DevOps
  { name: 'Docker', category: 'DevOps' },
  
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
];

export function SkillsGrid() {
  // Define the order of categories
  const categoryOrder = [
    'Frontend',
    'Backend',
    'Frameworks / Libraries',
    'Database',
    'DevOps',
    'Tools'
  ];

  return (
    <div className="space-y-6">
      {categoryOrder.map(category => {
        const categorySkills = skills.filter(skill => skill.category === category);
        
        // Only render if there are skills in this category
        if (categorySkills.length === 0) return null;
        
        return (
          <div key={category} className="space-y-3">
            <h3 className="text-lg font-mono text-green-400 border-b border-green-400/30 pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map(skill => (
                <Badge 
                  key={skill.name} 
                  variant="outline" 
                  className="bg-gray-800/50 text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-green-400/50 transition-colors px-3 py-1"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
