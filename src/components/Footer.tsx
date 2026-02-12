import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-tertiary">
        <span>© {new Date().getFullYear()} Rohan Mukka</span>
        <div className="flex gap-6">
          <a href="https://github.com/rohanmukka" target="_blank" rel="noopener noreferrer" className="hover:text-primary-text transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rohanmukka" target="_blank" rel="noopener noreferrer" className="hover:text-primary-text transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rohanmukka@gmail.com" className="hover:text-primary-text transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
