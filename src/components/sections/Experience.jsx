import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';
import BorderGlow from '../ui/BorderGlow';

const experiences = [
  {
    role: "DevOps & Cloud Engineering Intern",
    company: "Indian Railways",
    period: "May 2026 - Present",
    description: "Working on DevOps and Cloud Engineering initiatives.",
    logos: ["/image (2).png"]
  },
  {
    role: "Product Management Intern (Paid)",
    company: "CODE4BOTS PVT LTD",
    period: "Apr 2025 - Sept 2025",
    description: "Assisted in developing 'Its Credible', an AI-powered HR product, focusing on competitive research, DevOps, UI/UX, and feature engineering.",
    logos: ["/CodingJr.png"]
  },
  {
    role: "Data Science Intern (Training)",
    company: "Shamgar Software Solutions ",
    period: "Oct 2025 - Dec 2025",
    description: "Worked on Python programming and deep learning frameworks including TensorFlow and PyTorch.",
    logos: ["/shamgar_software_solutions_logo.jpg"]
  },
  {
    role: "AI & ML Intern (Training)",
    company: "Elevate Labs",
    period: "Sept 2025 - Nov 2025",
    description: "Conducted robust model building and evaluation utilizing TensorFlow and scikit-learn for high-accuracy predictions.",
    logos: ["/Elevate LAbs.jpg"]
  },
  {
    role: "AI & Azure Intern (Training)",
    company: "EduNet Foundation (AICTE, Microsoft)",
    period: "May 2025 - June 2025",
    description: "Utilized Gen AI and Computer Vision technologies to architect and deploy JARVIZ.",
    logos: ["/AICTE.jpg", "/Edunet.png"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.timelineIcon}>
                <Briefcase size={20} color="var(--primary-color)" />
              </div>
              <BorderGlow animated={true} className={styles.timelineContent}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.companyWrapper}>
                  {exp.logos && exp.logos.map((logo, i) => (
                    <img key={i} src={logo} alt={exp.company} className={styles.companyLogo} />
                  ))}
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>
                <p className={styles.description}>{exp.description}</p>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
