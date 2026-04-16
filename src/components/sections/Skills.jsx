import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown } from 'lucide-react';
import { FaAws, FaBuilding, FaChartLine } from 'react-icons/fa';
import {
  SiPython, SiDocker, SiJupyter,
  SiTensorflow, SiFigma, SiJira,
  SiMysql, SiPowerbi
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import styles from './Skills.module.css';
import BorderGlow from '../ui/BorderGlow';

const techLogos = [
  { node: <FaAws />, title: "AWS Cloud" },
  { node: <SiPython />, title: "Python" },
  { node: <SiDocker />, title: "DevOps" },
  { node: <SiJupyter />, title: "Data Science" },
  { node: <SiTensorflow />, title: "Machine Learning" },
  { node: <SiFigma />, title: "UI/UX Design" },
  { node: <SiJira />, title: "Product Management" },
  { node: <SiMysql />, title: "SQL" },
  { node: <FaBuilding />, title: "Corporate and System Research" },
  { node: <FaChartLine />, title: "Financial Market Analysis (Globally)" },
  { node: <SiPowerbi />, title: "Visualization (Power BI)" }
];

const CERTIFICATIONS = [
  { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", image: "/aws-cp.png" },
  { title: "AWS Certified Solutions Architect – Associate", org: "Amazon Web Services", image: "/aws-sa.png" },
  { title: "Machine Learning and Deep Learning (Topper 5%)", org: "NPTEL", image: "/image.png" },
  { title: "Project Management (Elite + Silver)", org: "NPTEL", image: "/image.png" },
  { title: "Software Project Management(Elite)", org: "NPTEL", image: "/image.png" },
  { title: "Cloud Computing", org: "NPTEL", image: "/image.png" },
  { title: "Python for Data Science (Elite)", org: "NPTEL", image: "/image.png" },
  { title: "Award for Presentation", org: "IEEE and Princeton University", image: "/image copy.png" },
  { title: "Listing on Social Stock Exchange", org: "NISM and SEBI", image: "/image copy 2.png" }
];

const LEADERSHIP = [
  { 
    role: "Secretary", 
    org: "Computer Society of India (CSI-AITR)", 
    image: "/image copy 4.png",
    roles: [
      {
        title: "Secretary",
        duration: "Oct 2025 - Present · 7 mos",
        description: "Leading the Computer Society of India AITR chapter. Organizing technical events and workshops."
      },
      {
        title: "Public Relations Manager",
        duration: "Nov 2024 - Oct 2025 · 1 yr",
        description: "Managed public relations and communications for the club."
      }
    ]
  },
  { 
    role: "Vice President", 
    org: "Shagal, The Hobby Club", 
    image: "/image copy 5.png",
    roles: [
      {
        title: "Vice President",
        duration: "2024 - Present",
        description: "Managed operations and creative initiatives for the university hobby club."
      }
    ]
  },
  { 
    role: "Secretary", 
    org: "Data Science and Analytics Club", 
    image: "/image copy 3.png",
    roles: [
      {
        title: "Secretary",
        duration: "Mar 2026 - Present · 2 mos",
        description: "Leadership and Team Leadership"
      },
      {
        title: "Manager",
        duration: "Dec 2024 - Present · 1 yr 5 mos",
        description: "Leading the club's initiatives to promote data science awareness, skill development, and collaborative projects among students. Responsible for organizing workshops, speaker sessions, and hands-on events."
      }
    ]
  }
];

const Skills = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">Skills & Certifications</h2>

        {/* Interactive React LogoLoop */}
        <div style={{ padding: '2rem 0', overflow: 'hidden', position: 'relative' }}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={45}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg-color)"
          />
        </div>

        {/* Certifications Grid */}
        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <BorderGlow animated={true} className={styles.certCard} glowColor="36 100 50">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className={styles.certBadgeImg} onError={(e) => { e.target.onerror = null; e.target.style.display = "none" }} />
                ) : (
                  <Award size={32} color="var(--primary-color)" className={styles.certIconFallback} />
                )}
                <div>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certOrg}>{cert.org}</p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        <h2 className={`section-title text-gradient ${styles.leadershipTitle}`}>Leadership & Co-curriculars</h2>

        {/* Accordion for Leadership */}
        <div className={styles.accordionContainer}>
          {LEADERSHIP.map((item, idx) => (
            <BorderGlow key={idx} animated={true} className={styles.accordionItem} glowColor="36 100 50">
              <button
                className={styles.accordionHeader}
                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {item.image && (
                    <img src={item.image} alt={item.org} className={styles.certBadgeImg} onError={(e) => { e.target.onerror = null; e.target.style.display = "none" }} />
                  )}
                  <div>
                    <h3 className={styles.accordionRole}>{item.role}</h3>
                    <span className={styles.accordionOrg}>{item.org}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeAccordion === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown color="var(--primary-color)" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeAccordion === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.accordionBody}
                  >
                    <div className={styles.timelineContainer}>
                      {item.roles?.map((r, i) => (
                        <div key={i} className={styles.timelineItem}>
                          <div className={styles.timelineDot}></div>
                          <h4 className={styles.timelineTitle}>{r.title}</h4>
                          <p className={styles.timelineDuration}>{r.duration}</p>
                          <p className={styles.timelineDesc}>{r.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </BorderGlow>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
