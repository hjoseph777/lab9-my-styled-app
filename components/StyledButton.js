"use client";

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(74, 107, 223, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(74, 107, 223, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 107, 223, 0); }
`;

// Styled button using styled-components with improved design
const Button = styled.button`
  padding: ${props => props.$primary ? '12px 28px' : '10px 24px'};
  background: ${props => props.$primary 
    ? 'linear-gradient(135deg, var(--primary), var(--primary-dark))'
    : 'transparent'};
  color: ${props => props.$primary ? '#fff' : 'var(--primary)'};
  border: ${props => props.$primary ? 'none' : '2px solid var(--primary)'};
  border-radius: 8px;
  font-size: ${props => props.$primary ? '1rem' : '0.9rem'};
  font-weight: ${props => props.$primary ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.75rem 0.5rem;
  box-shadow: ${props => props.$primary 
    ? '0 4px 6px rgba(74, 107, 223, 0.2)'
    : 'none'};
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease-out;
  animation-delay: ${props => props.$animationDelay || '0s'};
  animation-fill-mode: both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.$primary ? 'var(--primary-dark)' : 'var(--gray-light)'};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Pulse animation when mounted */
  &.mounted:not(:hover) {
    animation: ${pulse} 2s infinite;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: ${props => props.$primary ? '10px 20px' : '8px 16px'};
    font-size: ${props => props.$primary ? '0.9rem' : '0.8rem'};
  }
`;

export default function StyledButton({ primary = false, label = "Click Me", onClick = () => {}, animationDelay = "0s" }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Button 
      $primary={primary} 
      $animationDelay={animationDelay}
      onClick={onClick}
      aria-label={label}
      className={mounted ? 'mounted' : ''}
    >
      {label}
    </Button>
  );
}