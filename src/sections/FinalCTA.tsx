import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';

const FinalCTA = () => {
  return (
    <SectionContainer id="contact" className="text-center py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white/90">
            Engineering clarity into every interface.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button href="https://github.com/rohanmukka" variant="primary" className="w-full sm:w-auto min-w-[160px]">
                View GitHub
            </Button>
            <Button href="https://www.linkedin.com/" variant="secondary" className="w-full sm:w-auto min-w-[160px]">
                Connect on LinkedIn
            </Button>
        </div>
    </SectionContainer>
  );
};

export default FinalCTA;
