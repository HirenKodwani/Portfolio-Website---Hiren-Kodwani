import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

import BorderGlow from '../ui/BorderGlow';

const projects = [
  {
    title: "TourismOS",
    description: "End-to-End Tourism ecosystem. Led the team that cracked the SIH 2025 internal round.",
    tags: ["Product Engineering", "MERN Stack"],
    colSpan: 2,
  },
  {
    title: "Aircraft Detection System",
    description: "Real-time detection and verification for civil/defense applications using computer vision. Published 2 Research Papers presented at IEEE - ISEC 2026 at Princeton University.",
    tags: ["Computer Vision", "Deep Learning"],
    colSpan: 2,
  },
  {
    title: "JARVIZ AI Assistant",
    description: "Voice-activated assistant with specific color and hand gesture detection.",
    tags: ["Python", "Gen AI", "Azure"],
    colSpan: 1,
  },
  {
    title: "HireTrade",
    description: "IPO Trading Algorithm specifically for the Indian IPO market.",
    tags: ["Algorithmic Trading", "Data Science"],
    colSpan: 1,
  },
  {
    title: "Fraudulent Transactions Detection System",
    description: "Fraudulent Transactions Detection System - with Data Science Concepts.",
    tags: ["Jupyter Notebook", "Data Science"],
    colSpan: 1,
  },
  {
    title: "Hand-free Pointer Input using Camera",
    description: "Python-based computer vision projects designed to enable hands-free accessibility and interaction with computers. Algorithms leverage the webcam for real-time tracking.",
    tags: ["Python", "Computer Vision"],
    colSpan: 1,
  }
];

const HoverCard = ({ project }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        height: '100%',
        display: 'block'
      }}
    >
      <BorderGlow animated={true} className={styles.projectCard}>
        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">Projects Showcase</h2>
        
        <div className={styles.bentoGrid}>
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              className={styles.bentoItem}
              style={{ gridColumn: `span ${proj.colSpan}` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <HoverCard project={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
