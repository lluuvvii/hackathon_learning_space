import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Banner */}
      <div
        style={{
          width: '100%',
          height: '300px',
          position: 'relative',
        }}
      >
        <Image
          src='/path-to-banner-image.jpg' // Update path sesuai file gambar
          alt='Event Banner'
          layout='fill'
          objectFit='cover'
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            color: 'white',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h1>Ikuti Event Menantang dari Hackathon Learning Space</h1>
        </div>
      </div>

      {/* Buttons */}
      <div
        className='container my-4 text-center'
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <button className='btn btn-outline-teal'>Event Saya</button>
        <button className='btn btn-outline-teal'>Rekomendasi Event</button>
        <button className='btn btn-outline-teal'>Event Sedang Berlangsung</button>
        <button className='btn btn-outline-teal'>Event Akan Datang</button>
      </div>

      {/* Event Sections */}
      <main className='container mt-5'>
        {/* Event Saya */}
        <section className='mb-5' >
          <h3 style={{ color: '#00897B', fontWeight: 'bold' }}>Event Saya</h3>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div
                className='card h-100'
                style={{
                  border: '1px solid #00897B',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src='/path-to-image-1.jpg'
                  alt='Solve for Society'
                  width={500}
                  height={300}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Solve For Society</h5>
                  <p>Kompetisi Teknologi Berdampak Sosial</p>
                  <p>01 Desember - 30 Desember 2024</p>
                  <Link
                    href='/event/solve-for-society'
                    className='btn'
                    style={{
                      backgroundColor: '#00897B',
                      color: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    Informasi Pendaftaran
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Akan Datang */}
        <section className='mb-5' >
          <h3 style={{ color: '#00897B', fontWeight: 'bold' }}>Event Akan Datang</h3>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div
                className='card h-100'
                style={{
                  border: '1px solid #00897B',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src='/path-to-image-2.jpg'
                  alt='Tech Startup Pitch'
                  width={500}
                  height={300}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Tech Startup Pitch</h5>
                  <p>Kompetisi Teknologi Bisnis</p>
                  <p>16 Februari - 28 Februari 2025</p>
                  <Link
                    href='/event/tech-startup-pitch'
                    className='btn'
                    style={{
                      backgroundColor: '#00897B',
                      color: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    Informasi Pendaftaran
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#006d5b',
          color: '#ffffff',
          padding: '20px',
          marginTop: 'auto',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h3>Hackathon Learning Space</h3>
            <p>Jl. Tentara pelajar 50, Surabaya, Jawa Timur, Indonesia</p>
          </div>
          <div style={{ flex: '1', textAlign: 'right' }}>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', gap: '10px' }}>
              {['Pusat Bantuan', 'FAQ', 'Tentang Kami'].map((item, index) => (
                <li key={index} style={{ display: 'inline' }}>
                  <Link href='#' style={{ color: '#ffffff', textDecoration: 'none' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              {['instagram', 'tiktok', 'facebook', 'linkedin', 'email', 'youtube'].map((platform, index) => (
                <i key={index} className={`bi bi-${platform}`} style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EventPage
