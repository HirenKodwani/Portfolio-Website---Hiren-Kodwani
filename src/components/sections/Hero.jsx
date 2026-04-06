import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';
import Orb from '../ui/Orb';

const GithubIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TEXTS = ["Product Engineering", "Cloud Computing", "AI/ML", "DevOps"];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.heroContainer}`}>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, Welcome to my portfolio
          </motion.div>
          
          <h1 className={styles.title}>
            I'm <span className="text-gradient">Hiren Kodwani</span>
          </h1>
          
          <div className={styles.typewriterWrapper}>
            <span className={styles.staticText}>I specialize in </span>
            <motion.span 
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className={`text-gradient ${styles.dynamicText}`}
            >
              {TEXTS[textIndex]}
            </motion.span>
          </div>

          <p className={styles.description}>
            Analytical and innovation-oriented Computer Science undergraduate focused on building intelligent, user-centric systems that integrate tech, data, and business impact.
          </p>

          <div className={styles.actionButtons}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/Hiren Kodwani Clg Resume.pdf" download="Hiren Kodwani Clg Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://github.com/HirenKodwani" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hiren-kodwani-328352192/" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.heroImageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className={styles.imageWrapper}>
            <div style={{ position: 'absolute', inset: -80, zIndex: -1 }}>
              <Orb
                hoverIntensity={2}
                rotateOnHover
                hue={0}
                forceHoverState={false}
                backgroundColor="transparent"
              />
            </div>
            <img src="/profile.png" alt="Hiren Kodwani" className={styles.profileImage} onError={(e) => { e.target.onerror = null; e.target.src="/profile.jpg" }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
