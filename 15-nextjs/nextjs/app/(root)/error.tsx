'use client';
import React from 'react';
import Link from 'next/link';

const ErrorPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Something went wrong</h1>
      <p>We&apos;re sorry, but something went wrong. Please try again later.</p>
      <Link
        href="/"
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          display: 'inline-block',
          backgroundColor: '#0070f3',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
        }}>
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
