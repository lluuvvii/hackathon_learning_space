import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { name: 'Beranda', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Proyek', path: '/projects' },
  { name: 'Komunitas', path: '/community' },
  { name: 'Event', path: '/events' },
];

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top' style={{ backgroundColor: '#00897B' }}>
      <div className='container'>
        {/* Logo */}
        <Link href='/' className='navbar-brand d-flex align-items-center gap-2 text-white'>
          <Image
            src='/logo.png' // Ganti dengan path logo Anda
            alt='Hackathon Logo'
            width={40}
            height={40}
          />
          <span className='fw-bold'>Hackathon Learning Space</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ borderColor: '#ffffff' }}
        >
          <span className='navbar-toggler-icon text-white'></span>
        </button>

        {/* Navigation Links */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {links.map((link, index) => (
              <li className='nav-item' key={index}>
                <Link href={link.path} className='nav-link text-white'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Profile Icon */}
          <div className='ms-3'>
            <Image
              src='/profile.png' // Ganti dengan path profile icon Anda
              alt='Profile'
              width={40}
              height={40}
              className='rounded-circle'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar