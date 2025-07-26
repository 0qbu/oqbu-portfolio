import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Bot,
  Clock,
  MapPin
} from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import TypingEffect from './TypingEffect';
import ContactForm from './ContactForm';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Portfolio = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'HTML', icon: <Code className="w-4 h-4" />, category: 'Frontend' },
    { name: 'CSS', icon: <Code className="w-4 h-4" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <Code className="w-4 h-4" />, category: 'Frontend' },
    { name: 'Bootstrap', icon: <Code className="w-4 h-4" />, category: 'Frontend' },
    { name: 'React.js', icon: <Code className="w-4 h-4" />, category: 'Frontend' },
    { name: 'Angular', icon: <Code className="w-4 h-4" />, category: 'Frontend' },
    { name: 'Node.js', icon: <Database className="w-4 h-4" />, category: 'Backend' },
    { name: 'MongoDB', icon: <Database className="w-4 h-4" />, category: 'Backend' },
    { name: 'WordPress', icon: <Globe className="w-4 h-4" />, category: 'CMS' },
    { name: 'Discord Bots', icon: <Bot className="w-4 h-4" />, category: 'Specialty' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/0qbu', color: 'hover:text-purple-400' },
    { name: 'Discord', icon: <MessageCircle className="w-5 h-5" />, url: 'oqbu', color: 'hover:text-blue-400' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:oqbudev@gmail.com', color: 'hover:text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingParticles />
      
      {/* Header Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src={profileAvatar} 
              alt="Oqbu's profile" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-border shadow-2xl glow"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Oqbu
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>My Local Time</span>
                <span className="font-mono text-foreground">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
              <span className="text-green-400 font-medium">Open for Work!</span>
            </div>
            
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  className={`transition-all duration-300 hover:scale-110 ${link.color}`}
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                👋 About Me
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  <TypingEffect 
                    text="Hey there! I'm Oqbu 👨‍💻, a passionate Full Stack Developer with expertise in modern web technologies. 🚀" 
                    speed={50}
                    delay={500}
                  />
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '3s' }}>
                  I specialize in building beautiful, responsive websites and powerful Discord bots. From frontend magic with React ⚛️ and Angular 🅰️ to backend wizardry with Node.js 🧙‍♂️ and MongoDB 🍃, I love bringing ideas to life through code 💡
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '4s' }}>
                  When I'm not coding, you'll find me exploring new technologies 🔍, optimizing Discord servers 🔧, or crafting the perfect user experience 🎨. Ready to work together? Let's build something amazing! 💥👨‍💻
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                🛠 Tech Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="w-full p-3 flex items-center gap-2 hover:bg-accent transition-colors duration-300"
                    >
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I work primarily with <strong>JavaScript</strong> and <strong>TypeScript</strong> for full-stack development. 
                  My frontend expertise includes <strong>React.js</strong>, <strong>Angular</strong>, and modern CSS frameworks like <strong>Bootstrap</strong>. 
                  On the backend, I use <strong>Node.js</strong> with <strong>MongoDB</strong> for scalable applications. 
                  I also specialize in <strong>Discord Bot development</strong> and <strong>WordPress</strong> solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">💬 Let's Connect</h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Need a Discord bot? Just want to chat about tech? 
              I'd love to hear from you!
            </p>
          </div>
          
          <ContactForm />
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Prefer direct contact?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="mailto:oqbu@example.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  oqbudev@gmail.com
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Discord: @oqbu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Oqbu. Built with React, TypeScript, and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;