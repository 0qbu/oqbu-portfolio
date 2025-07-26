import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypingEffect = ({ text, speed = 100, delay = 0, className = '' }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeText = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          setTimeout(typeText, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      typeText();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={`${className} ${isTyping ? 'typing-effect' : ''}`}>
      {displayText}
    </span>
  );
};

export default TypingEffect;