import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = ({ onComplete }) => {
  // Wait before triggering the exit
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // the total duration of the splash text sequence
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className={styles.preloaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        className={styles.textWrapper}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-gradient">Hello There,</span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
