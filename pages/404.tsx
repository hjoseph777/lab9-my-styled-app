import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--gray-dark);
  max-width: 600px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default function Custom404() {
  return (
    <Container>
      <Title>404</Title>
      <Message>
        Oops! It looks like you&apos;ve ventured into uncharted territory. 
        The page you&apos;re looking for doesn&apos;t exist.
      </Message>
      <Button as={Link} href="/">
        Return to Home
      </Button>
    </Container>
  );
}