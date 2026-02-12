import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { Github, Linkedin } from 'lucide-react';

const FinalCTA = () => {
  return (
    <SectionContainer id="contact" className="!py-0 pb-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-4">
          Let’s work together
        </h2>
        <p className="text-primary-secondary mb-10">
          Have a project in mind or want to chat? I’m open to new opportunities.
        </p>
        <a
          href="mailto:rohanmukka@gmail.com"
          className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base mb-10"
        >
          Get in touch
        </a>

      </div>
    </SectionContainer>
  );
};

export default FinalCTA;
