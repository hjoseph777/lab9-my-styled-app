"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Add animation class only after component is mounted
  const containerClass = `${styles.container} ${mounted ? styles.fadeIn : ''}`;
  
  return (
    <div className={containerClass}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Styled App</h1>
        <p className={styles.description}>
          Explore different approaches to styling in Next.js and React
        </p>
      </header>
      
      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Welcome! 👋</h2>
          <p>This application demonstrates three popular styling methods in React:</p>
          <ul className={styles.featureList}>
            <li><span className={styles.featureIcon}>🎨</span> Inline Styles</li>
            <li><span className={styles.featureIcon}>📝</span> CSS Modules</li>
            <li><span className={styles.featureIcon}>✨</span> Styled Components</li>
          </ul>
          <Link href="/styled" className={styles.button}>
            View Styling Demo
          </Link>
        </div>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span role="img" aria-label="Design" className={styles.featureIcon}>🎨</span>
            </div>
            <h3>Responsive Design</h3>
            <p>Adapts beautifully to any screen size from mobile to desktop</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span role="img" aria-label="Components" className={styles.featureIcon}>🧩</span>
            </div>
            <h3>Component Architecture</h3>
            <p>Built with reusable, modular components for maintainability</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span role="img" aria-label="Dynamic" className={styles.featureIcon}>✨</span>
            </div>
            <h3>Dynamic Styling</h3>
            <p>Interactive elements that change appearance based on state and props</p>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>Built with <span role="img" aria-label="love">❤️</span> using Next.js</p>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/styled" className={styles.navLink}>Styling Demo</Link>
        </nav>
      </footer>
    </div>
  );
}
