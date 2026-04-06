import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import styles from './Contact.module.css';
import BorderGlow from '../ui/BorderGlow';
import Stepper, { Step } from '../ui/Stepper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFinalStepCompleted = async () => {
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/hirenkodwani@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        
        <div className={styles.contactWrapper}>
          <BorderGlow animated={true} className={styles.contactInfo} glowColor="36 100 50">
            <h3>Contact Information</h3>
            <p className={styles.infoText}>
              Feel free to reach out for collaborations, project inquiries, or just a friendly chat about tech.
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} color="var(--primary-color)" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hirenkodwani@gmail.com">hirenkodwani@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} color="var(--primary-color)" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917049493002">+91 70494-93002</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} color="var(--primary-color)" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Indore, India</p>
                </div>
              </div>
            </div>
          </BorderGlow>

          <BorderGlow animated={true} className={styles.contactFormContainer} glowColor="36 100 50">
            <h3 className={styles.stepperHeader}>Send a Message</h3>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Stepper
                initialStep={1}
                onFinalStepCompleted={handleFinalStepCompleted}
                backButtonText="Back"
                nextButtonText="Next"
                stepCircleContainerClassName={styles.stepperOverride}
                contentClassName={styles.stepperContentWrapper}
              >
                <Step>
                  <div className={styles.stepContent}>
                    <h2>Let's connect!</h2>
                    <p className={styles.stepDesc}>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's start the conversation!</p>
                  </div>
                </Step>
                <Step>
                  <div className={styles.stepContent}>
                    <h2>What's your name?</h2>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={styles.input}
                        placeholder="John Doe"
                        autoFocus
                      />
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className={styles.stepContent}>
                    <h2>And your email?</h2>
                    <div className={styles.formGroup}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={styles.input}
                        placeholder="john@example.com"
                        autoFocus
                      />
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className={styles.stepContent}>
                    <h2>Your Message</h2>
                    <div className={styles.formGroup} style={{flex: 1}}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className={styles.textarea}
                        placeholder="How can we help?"
                        autoFocus
                      ></textarea>
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className={styles.stepContent}>
                    <h2>Review & Send</h2>
                    {status === 'idle' && (
                      <div className={styles.reviewBox}>
                        <div className={styles.reviewLine}><span>Name:</span> {formData.name || 'Not provided'}</div>
                        <div className={styles.reviewLine}><span>Email:</span> {formData.email || 'Not provided'}</div>
                        <div className={styles.reviewLine}><span>Message:</span> {formData.message || 'Not provided'}</div>
                        <p className={styles.reviewNote}>Click Complete below to send your message.</p>
                      </div>
                    )}
                    {status === 'loading' && (
                      <div className={styles.statusBox}>
                        <div className={styles.spinner}></div>
                        <p>Sending your message...</p>
                      </div>
                    )}
                    {status === 'success' && (
                      <div className={`${styles.statusBox} ${styles.successBox}`}>
                        <CheckCircle2 size={48} color="#22c55e" />
                        <h3>Message Sent!</h3>
                        <p>Thanks for reaching out! I'll get back to you soon.</p>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className={`${styles.statusBox} ${styles.errorBox}`}>
                        <p>Something went wrong. Please try again.</p>
                        <button type="button" onClick={() => setStatus('idle')} className="btn btn-primary" style={{marginTop: '1rem'}}>Retry</button>
                      </div>
                    )}
                  </div>
                </Step>
              </Stepper>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default Contact;
