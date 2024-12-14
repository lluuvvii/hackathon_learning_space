'use client';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar bg-white shadow-sm px-4 py-2 d-flex justify-content-between align-items-center'>
      {/* Input Search */}
      <div className='input-group' style={{ maxWidth: '300px' }}>
        <span className='input-group-text bg-white border-0'>
          <i className='bi bi-search' style={{ color: '#adb5bd' }}></i>
        </span>
        <input
          type='text'
          className='form-control border-0 shadow-sm'
          placeholder='Search for...'
          style={{ borderRadius: '10px' }}
        />
      </div>

      {/* Notification Icon */}
      <div>
        <i
          className='bi bi-bell'
          style={{ fontSize: '1.5rem', color: '#000' }}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;