import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} glass`}>
      <div className={`container ${styles.navbar}`}>
        <a href="#" className={styles.logo}>
          HK<span className="text-gradient">.</span>
        </a>
        
        <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={styles.link}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
