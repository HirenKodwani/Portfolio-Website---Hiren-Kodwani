import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import BorderGlow from '../ui/BorderGlow';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container`}>
        <motion.div 
          className={styles.aboutContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <div className={styles.grid}>
            <motion.div variants={itemVariants} className={styles.smallCard1}>
              <BorderGlow animated={true} className={styles.card} glowColor="36 100 50">
                <h3 className={styles.cardTitle}>Who I Am</h3>
                <p className={styles.cardText}>
                  I am an analytical and innovation-oriented Computer Science (Data Science) undergraduate at Acropolis Institute of Technology and Research.
                </p>
              </BorderGlow>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.smallCard2}>
              <BorderGlow animated={true} className={styles.card} glowColor="36 100 50">
                <h3 className={styles.cardTitle}>My Passion</h3>
                <p className={styles.cardText}>
                  Passionate about building intelligent, user-centric systems that integrate modern tech, deep data insights, and measurable business impact.
                </p>
              </BorderGlow>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.tallCard}>
              <BorderGlow animated={true} className={styles.card} glowColor="36 100 50">
                <h3 className={styles.cardTitle}>My Approach</h3>
                <p className={styles.cardText}>
                  Whether exploring Product Engineering, Cloud Architecture, or AI/ML model deployment, I focus on solving complex problems with scalable, elegantly designed software ecosystems.
                  <br /><br />
                  Drawing from my hands-on experience, I leverage tools like Jupyter Notebook, Python, and robust database management to architect advanced solutions such as JARVIZ and HireTrade.
                  <br /><br />
                  Furthermore, my leadership roles, like serving as Secretary for the Data Science and Analytics Club, demonstrate my commitment to fostering collaboration, guiding peers, and curating effective data-centric learning paths. I firmly believe in blending analytical algorithms with an actionable strategy to deliver meaningful software applications.
                </p>
              </BorderGlow>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
