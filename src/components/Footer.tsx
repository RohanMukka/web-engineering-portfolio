import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 mt-20 overflow-hidden">
      {/* Premium Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-text/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-primary-tertiary relative z-10">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-medium text-primary-text tracking-tight italic">Rohan Mukka</span>
          <span className="text-xs opacity-60">© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
        
        <div className="flex gap-8">
          <a href="https://github.com/rohanmukka" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-surface-subtle hover:text-primary-text transition-all duration-300 group" aria-label="GitHub">
            <Github size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/rohanmukka" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-surface-subtle hover:text-primary-text transition-all duration-300 group" aria-label="LinkedIn">
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:rohanmukka@gmail.com" className="p-2 rounded-lg hover:bg-surface-subtle hover:text-primary-text transition-all duration-300 group" aria-label="Email">
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
