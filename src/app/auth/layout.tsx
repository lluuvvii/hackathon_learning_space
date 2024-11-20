import React from 'react';
import '@/app/globals.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-light fixed vh-100'>
      {children}
    </div>
  );
}
