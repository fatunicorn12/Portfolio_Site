import React, { useState, useEffect } from 'react';
import { TypewriterText } from './components/TypewriterText';
import { TerminalWindow } from './components/TerminalWindow';
import { SkillsGrid } from './components/SkillsGrid';
import { ProjectCard } from './components/ProjectCard';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Mail, Github, Linkedin, Coffee, Code, User, Briefcase, FileText, Download } from 'lucide-react';

const projects = [
  {
    title: "Reddit Vibecoder",
    description: "Automatically transforms Reddit posts into fully functional, AI-generated apps by chaining Gemini and Claude inside a Dockerized pipeline with GitHub deployment.",
    technologies: ["Python", "JS", "Docker", "PRAW", "Selenium", "Claude", "Gemini"],
    githubUrl: "https://github.com/fatunicorn12/Reddit-Vibecoder",
    status: "In Progress" as const
  },
  {
    title: "Twitter Clone",
    description: "A full-stack productivity application with real-time features to mimick Twitter.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/fatunicorn12/x-twitter-clone",
    status: "Completed" as const
  },
  {
    title: "Dungeon Doors 3D Game",
    description: "A roguelike arena game focused on defeating enemies, purchasing items, and collecting weapons.",
    technologies: ["Unity", "C#", "ASP.NET"],
    githubUrl: "https://github.com/riley0227/3dGame",
    liveUrl: "https://www.youtube.com/watch?v=WW6Q0j6nqtY",
    status: "Completed" as const
  },
  {
    title: "Image Transformation in ASM", 
    description: "Transpose and recolor an image by converting it into a binary matrix.",
    technologies: ["Assembly"],
    githubUrl: "https://github.com/fatunicorn12/Image-Transformation-in-MIPS-Assembly",
    status: "Completed" as const
  },
  {
    title: "Sumo Snowballs Game",
    description: "A fun take on a Mario Party inspired minigame.",
    technologies: ["Unity", "C#", "ASP.NET"],
    githubUrl: "https://github.com/fatunicorn12/Sumo-Snowballs",
    liveUrl: "https://www.youtube.com/watch?v=ET5Q-V5N7qg",
    status: "Completed" as const
  }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [showMainContent, setShowMainContent] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-green-400">
              <Code className="inline w-5 h-5 mr-2" />
              dev_portfolio.exe
            </div>
            <div className="hidden md:flex items-center space-x-6 font-mono text-sm">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                ~/home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                ~/about
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                ~/projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                ~/skills
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                ~/resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                ~/contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <TerminalWindow title="~/welcome" className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="text-gray-400">
                <span className="text-green-400">guest@portfolio:~$</span> whoami
              </div>
              <div className="text-2xl md:text-4xl">
                <TypewriterText 
                  text="Hello, I'm Will Blodgett" 
                  speed={100}
                  onComplete={() => setShowMainContent(true)}
                />
              </div>
              {showMainContent && (
                <div className="space-y-2 animate-fade-in">
                  <div className="text-gray-400">
                    <span className="text-green-400">guest@portfolio:~$</span> cat role.txt
                  </div>
                  <div className="text-lg text-gray-300">
                    Full-Stack, Game, and Web App Developer
                  </div>
                  <div className="text-gray-400 mt-4">
                    <span className="text-green-400">guest@portfolio:~$</span> ls passions/
                  </div>
                  <div className="text-gray-300">
                    clean-code/ user-experience/ problem-solving/ coffee-brewing/
                  </div>
                </div>
              )}
            </div>
          </TerminalWindow>
          
          {showMainContent && (
            <div className="flex justify-center space-x-4 animate-fade-in">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-mono text-green-400 mb-8 flex items-center">
            <User className="w-8 h-8 mr-3" />
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Coffee className="w-5 h-5 mr-2" />
                  Background
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  I'm a passionate full-stack developer with years of experience building 
                  web applications, games, and random projects that users love. I enjoy the 
                  entire process from conception to deployment.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, playing 
                  all types of games, or enjoying the outdoors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-gray-300">Los Angeles, CA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Degree:</span>
                  <span className="text-gray-300">B.S. in CS, Minor in Mathematics</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-gray-300">5+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Current Focus:</span>
                  <span className="text-gray-300">Leetcode Grind :-)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-mono text-green-400 mb-8 flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-mono text-green-400 mb-8 flex items-center">
            <Code className="w-8 h-8 mr-3" />
            Skills & Technologies
          </h2>
          
          <TerminalWindow title="~/skills --verbose">
            <SkillsGrid />
          </TerminalWindow>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-28 px-6 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-mono text-green-400 mb-8 flex items-center">
            <FileText className="w-8 h-8 mr-3" />
            Resume
          </h2>
          
          <TerminalWindow title="~/resume.pdf">
            <div className="space-y-6">
              <div className="text-gray-400 mb-4">
                <span className="text-green-400">guest@portfolio:~$</span> cat resume.pdf
              </div>
              
              {/* Resume Viewer */}
              <div className="bg-white rounded-lg overflow-hidden" style={{ height: '800px' }}>
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full"
                  title="Resume"
                  style={{ border: 'none' }}
                >
                  <p className="text-gray-600 p-4">
                    Your browser does not support PDFs. 
                    <a href="/resume.pdf" download className="text-green-600 hover:underline ml-1">
                      Download the PDF
                    </a>
                  </p>
                </iframe>
              </div>

              {/* Download Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a href="/resume.pdf" download="Will_Blodgett_Resume.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-mono text-green-400 mb-8 flex items-center justify-center">
            <Mail className="w-8 h-8 mr-3" />
            Let's Connect
          </h2>
          
          <TerminalWindow title="~/contact">
            <div className="space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">guest@portfolio:~$</span> cat contact_me.txt
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  I'm always excited to work on interesting projects and meet fellow developers!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a href="mailto:willrblodgett@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      willrblodgett@gmail.com
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    asChild
                  >
                    <a href="https://github.com/fatunicorn12" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/will-blodgett-wow/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="text-gray-400 text-sm mt-8">
                <span className="text-green-400">guest@portfolio:~$</span> echo "Thanks for visiting!"
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-green-400">~/portfolio</span> © 2025 Will Blodgett
          </p>
        </div>
      </footer>
    </div>
  );
}