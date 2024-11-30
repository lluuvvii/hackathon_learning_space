import Link from 'next/link'
import Image from 'next/image'

const links = [
  { name: 'Beranda', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Proyek', path: '/projects' },
  { name: 'Komunitas', path: '/community' },
  { name: 'Event', path: '/events' },
]

const Navbar = () => {
  return (
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
              src='/logo.png' // Ganti dengan path logo Anda
              alt='Hackathon Logo'
              width={40}
              height={40}
            />
            <span className='fw-bold'>Hackathon Learning Space</span>
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
              {/* Profile Icon */}
              <li className='nav-item ms-3'>
                <Image
                  src='/profile.png' // Ganti dengan path profile icon Anda
                  alt='Profile'
                  width={40}
                  height={40}
                  className='rounded-circle'
                />
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
    </>
  );
};

export default Navbar