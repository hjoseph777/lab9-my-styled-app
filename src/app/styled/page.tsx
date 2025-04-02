import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/StyledPage.module.css';
import StyledButton from '../../../components/StyledButton';
// The page is already set up for the /styled route thanks to Next.js App Router

export default function StyledPage() {
  return (
    <div className={styles.container}>
      {/* Header with inline styles */}
      <header style={{
        backgroundColor: '#f0f4f8',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 className={styles.title}>Styled Page</h1>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          marginTop: '0.5rem' 
        }}>
          Exploring different styling approaches
        </p>
      </header>
      
      <div className={styles.buttonContainer}>
        <StyledButton primary label="Primary Button" />
        <StyledButton label="Secondary Button" />
      </div>
      
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>Inline Styles</h3>
          <p>Styling directly in JSX using style attribute</p>
        </div>
        <div className={styles.card}>
          <h3>CSS Modules</h3>
          <p>Scoped CSS with automatic class naming</p>
        </div>
        <div className={styles.card}>
          <h3>Styled Components</h3>
          <p>CSS-in-JS with component-based styling</p>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <Link href="/" className={styles.link}>
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
