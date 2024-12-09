'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/../public/hackathon_learning_space_logo.png'
import ProfileUser from '@/../public/Profil-removebg-preview 1.png'

const links = [
  { name: 'Beranda', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Proyek', path: '/projects' },
  { name: 'Komunitas', path: '/community' },
  { name: 'Event', path: '/events' },
  { name: 'Tentang Kami', path: '/about' }
]

const Navbar = () => {
  const pathname = usePathname()
  const shouldShowNavbar = !pathname.startsWith('/auth')

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [offcanvasDropdownVisible, setOffcanvasDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const toggleOffcanvasDropdown = () => {
    setOffcanvasDropdownVisible(!offcanvasDropdownVisible)
  }

  return (
    <>
      {shouldShowNavbar ? (
        <>
          {/* Navbar */}
          <nav
            className='navbar navbar-expand-lg fixed-top'
            style={{ backgroundColor: '#00897B' }}
          >
            <div className='container'>
              {/* Logo */}
              <Link href='/' className='navbar-brand d-flex align-items-center gap-2 text-white'>
                <Image
                  src={Logo}
                  alt='Hackathon Logo'
                  width={100}
                  height={50}
                  quality={100}
                />
              </Link>

              {/* Toggler for mobile */}
              <button
                className='navbar-toggler navbar-dark'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasNavbar'
                aria-controls='offcanvasNavbar'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>

              {/* Navigation Links (desktop view) */}
              <div className='d-none d-lg-block'>
                <ul className='navbar-nav ms-auto d-flex align-items-center'>
                  {links.map((link, index) => (
                    <li className='nav-item' key={index}>
                      <Link href={link.path} className='nav-link text-white'>
                        {link.name}
                      </Link>
                    </li>
                  ))}

                  {/* Profile Dropdown */}
                  <li className='nav-item dropdown ms-3 position-relative'>
                    <button
                      className='btn p-0 border-0 bg-transparent'
                      onClick={toggleDropdown}
                    >
                      <Image
                        src={ProfileUser}
                        alt='Profile'
                        width={40}
                        height={40}
                        className='rounded-circle'
                      />
                    </button>

                    {dropdownVisible && (
                      <ul
                        className='dropdown-menu show position-absolute'
                        style={{ top: '100%', right: 0 }}
                      >
                        <li>
                          <Link href='/profile' className='dropdown-item'>
                            Profil
                          </Link>
                        </li>
                        <li>
                          <Link href='/auth/login' className='dropdown-item'>
                            Masuk
                          </Link>
                        </li>
                        <li>
                          <button
                            className='dropdown-item'
                            onClick={() => alert('Logout clicked!')}
                          >
                            Keluar
                          </button>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Offcanvas Sidebar (mobile view) */}
          <div
            className='offcanvas offcanvas-start'
            tabIndex={-1}
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header' style={{ backgroundColor: '#00897B' }}>
              <h5 className='offcanvas-title text-white' id='offcanvasNavbarLabel'>
                Menu
              </h5>
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              {/* Offcanvas Links */}
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                {links.map((link, index) => (
                  <li className='nav-item' key={index}>
                    <Link href={link.path} className='nav-link text-dark'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Profile Icon in Offcanvas */}
              <div className='mt-3'>
                <button
                  className='btn p-0 border-0 bg-transparent'
                  onClick={toggleOffcanvasDropdown}
                >
                  <Image
                    src={ProfileUser}
                    alt='Profile'
                    width={40}
                    height={40}
                    className='rounded-circle'
                  />
                </button>

                {offcanvasDropdownVisible && (
                  <ul
                    className='dropdown-menu show position-absolute mt-2'
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <li>
                      <Link href='/profile' className='dropdown-item'>
                        Profil
                      </Link>
                    </li>
                    <li>
                      <Link href='/auth/login' className='dropdown-item'>
                        Masuk
                      </Link>
                    </li>
                    <li>
                      <button
                        className='dropdown-item'
                        onClick={() => alert('Logout clicked!')}
                      >
                        Keluar
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Navbar
