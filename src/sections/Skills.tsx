import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "Java", "C/C++", "JavaScript", "SQL", "Kotlin", "HTML/CSS", "Jquery", "Typescript", "MATLAB"]
  },
  {
    category: "Developer Tools",
    items: ["GitHub", "Gitlab", "Kubernetes", "Docker", "AWS", "Pycharm", "Eclipse", "Jenkins"]
  },
  {
    category: "Frameworks/Tools",
    items: ["React.js", "Node.js", "Firebase", "Bootstrap5", "Google Cloud", "TensorFlow", "Scikit-learn", "Angular", "Django", "Next.js"]
  },
  {
    category: "Platforms",
    items: ["Linux/Unix", "Windows", "Git", "Microsoft Office Suite"]
  },
  {
    category: "Concepts",
    items: ["RESTful APIs", "Fullstack Web Development", "Machine learning", "MVC", "Software Development", "Web Application Development", "Mobile Application Development", "Distributed Systems", "Parallel Systems", "Natural Language Processing", "Security"]
  },
  {
    category: "Specialized Tech",
    items: ["Accessible Technologies", "Machine Learning Infrastructure", "Speech Audio", "Generative AI", "Reinforcement Learning"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-subtle/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-6">
            Technical Skills
          </h2>
          <p className="text-primary-secondary max-w-2xl text-lg">
             A comprehensive toolkit developed through academic rigor and hands-on project experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/50 border border-glass-border hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-display font-semibold text-primary-text mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-white border border-primary-secondary/10 text-primary-secondary hover:text-primary-text hover:border-accent/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
