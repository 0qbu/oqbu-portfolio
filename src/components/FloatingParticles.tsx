import { useEffect } from 'react';

const FloatingParticles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}%`;
      
      // Random animation duration between 15-25 seconds
      const duration = Math.random() * 10 + 15;
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      document.querySelector('.particles')?.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createParticle(), i * 500);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="particles" />;
};

export default FloatingParticles;