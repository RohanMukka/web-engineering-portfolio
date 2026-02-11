import React, { useEffect, useRef, useState } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

interface HyperTextProps {
  text: string;
  className?: string;
}

const HyperText: React.FC<HyperTextProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  const startScramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current as number);
    
    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current as number);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
     // Scramble on mount
     startScramble();
     return () => clearInterval(intervalRef.current as number);
  }, []);

  return (
    <span 
      className={`${className} cursor-default font-mono text-inherit`}
      onMouseEnter={startScramble}
    >
      {displayText}
    </span>
  );
};

export default HyperText;
