"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../../styles/StyledPage.module.css';
import StyledButton from '../../../components/StyledButton';

export default function StyledPage() {
  // State for dynamic styling and component visibility
  const [headerColor, setHeaderColor] = useState('#4a6bdf');
  const [fontSize, setFontSize] = useState(24);
  const [mounted, setMounted] = useState(false);
  
  // Add useEffect to ensure hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Inline style objects
  const headerStyle = {
    color: headerColor,
    fontSize: `${fontSize}px`,
    fontWeight: 600,
    marginBottom: '1rem',
    transition: 'all 0.3s ease'
  };
  
  // Color change handler
  const changeHeaderColor = () => {
    const colors = ['#4a6bdf', '#61dafb', '#f687b3', '#10b981', '#8b5cf6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHeaderColor(randomColor);
  };
  
  // Font size change handler
  const changeFontSize = () => {
    setFontSize(prev => prev === 24 ? 28 : 24);
  };

  // Only render after hydration to ensure React components work properly
  if (!mounted) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/styled" className={styles.navLinkActive}>Styling Demo</Link>
        </nav>
        
        <h1 className={styles.title}>Styling Methods in React</h1>
        <p className={styles.description}>
          Explore different ways to style your React applications using inline styles, 
          CSS modules, and styled-components.
        </p>
      </header>
      
      <main>
        <div className={styles.styleGrid}>
          {/* Section 1: Inline Styles */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎨</span>
              Inline Styles
            </h2>
            <p>
              Styling React components directly with JavaScript objects. 
              This approach provides dynamic styling capabilities.
            </p>
            
            <div>
              <h3 style={headerStyle}>Dynamic Header Style</h3>
              <p>The color and size of this header can be changed dynamically.</p>
              
              <div className={styles.buttonContainer}>
                <button 
                  onClick={changeHeaderColor}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#4a6bdf',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    margin: '0.5rem'
                  }}
                >
                  Change Color
                </button>
                
                <button 
                  onClick={changeFontSize}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: 'transparent',
                    color: '#4a6bdf',
                    border: '2px solid #4a6bdf',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    margin: '0.5rem'
                  }}
                >
                  Toggle Size
                </button>
              </div>
            </div>
          </section>
          
          {/* Section 2: CSS Modules */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📝</span>
              CSS Modules
            </h2>
            <p>
              CSS Modules allow you to write traditional CSS that&apos;s scoped locally 
              to components, preventing style conflicts.
            </p>
            
            <div className={styles.buttonContainer}>
              <button className={styles.moduleButton}>CSS Module Button</button>
              <button className={`${styles.moduleButton} ${styles.secondary}`}>Secondary Button</button>
            </div>
            
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3>Scoped Styling</h3>
                <p>CSS Modules automatically generate unique class names to avoid conflicts.</p>
              </div>
              <div className={styles.card}>
                <h3>Composition</h3>
                <p>Compose multiple class names together for reusable style patterns.</p>
              </div>
            </div>
          </section>
          
          {/* Section 3: Styled Components */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✨</span>
              Styled Components
            </h2>
            <p>
              Styled-components let you write actual CSS within JavaScript to style your components. 
              It removes the mapping between components and styles.
            </p>
            
            <div className={styles.buttonContainer}>
              <StyledButton primary label="Primary Button" animationDelay="0.1s" />
              <StyledButton label="Secondary Button" animationDelay="0.2s" />
            </div>
            
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3>Dynamic Props</h3>
                <p>Pass props to styled components to conditionally change styles.</p>
              </div>
              <div className={styles.card}>
                <h3>Theme Support</h3>
                <p>Easily implement and switch between different themes in your application.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>
          Created with <a href="https://nextjs.org" className={styles.link} target="_blank" rel="noopener noreferrer">Next.js</a> and 
          modern styling techniques
        </p>
        <nav className={styles.footerNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/styled" className={styles.navLinkActive}>Styling Demo</Link>
        </nav>
      </footer>
    </div>
  );
}
