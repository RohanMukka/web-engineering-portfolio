import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    school: "University of Oklahoma",
    location: "Oklahoma, United States",
    degree: "Master of Science in Computer Science",
    gpa: "4.0/4.0",
    period: "Aug 2024 – May 2026",
    color: "#830000" // OU Crimson
  },
  {
    school: "CVR College of Engineering",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    minor: "Minor in AI/ML",
    gpa: "9.1/10.0",
    period: "Aug 2020 – May 2024",
    color: "#FF9933" // Saffron-ish
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-6">
            Education
          </h2>
          <p className="text-primary-secondary max-w-2xl mx-auto text-lg">
            Academic background and qualifications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <SpotlightCard className="p-8 bg-surface-subtle/30 border-glass-border hover:border-accent/40 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <GraduationCap className="text-accent w-6 h-6" />
                       <h3 className="text-2xl font-display font-bold text-primary-text group-hover:text-accent transition-colors">
                        {edu.school}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary-secondary mb-4">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>

                    <h4 className="text-lg font-medium text-primary-text mb-1">
                      {edu.degree}
                    </h4>
                    {edu.minor && (
                      <p className="text-primary-secondary text-sm mb-2 italic">
                        {edu.minor}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 min-w-[200px] md:text-right">
                    <div className="inline-flex items-center gap-2 md:justify-end text-primary-text font-medium bg-white/50 px-3 py-1.5 rounded-full w-fit md:ml-auto md:w-auto border border-glass-border">
                      <Calendar size={16} className="text-accent" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 md:justify-end text-primary-text font-bold bg-accent/10 px-3 py-1.5 rounded-full w-fit md:ml-auto md:w-auto text-accent">
                      <Award size={16} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
