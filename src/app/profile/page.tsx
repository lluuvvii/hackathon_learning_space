import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserProfile() {
  return (
    <div style={{ backgroundColor: '#F9F9F9', minHeight: '100vh', marginTop: '65px' }}>
      {/* Container */}
      <div className='container py-5'>
        <div className='row'>
          {/* Sidebar */}
          <div className='col-md-3 mb-4'>
            <div className='card shadow-sm'>
              <div className='card-body text-center'>
                <Image
                  src='/'
                  alt='User Avatar'
                  width={150}
                  height={150}
                  className='img-fluid rounded-circle mb-3'
                />
                <h5>Kelvin Marsellino</h5>
                <p className='text-muted'>Silver Member</p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Profil</li>
                <li className='list-group-item'>Progres Belajar</li>
                <li className='list-group-item'>Sertifikat dan Badges</li>
                <li className='list-group-item'>Proyek yang Selesai</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className='col-md-9'>
            <div className='card shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>Profil</h5>
                <div className='row mt-4'>
                  <div className='col-md-3 text-center'>
                    <Image
                      src='/'
                      alt='User Profile'
                      width={120}
                      height={120}
                      className='img-fluid rounded-circle mb-2'
                    />
                    <button className='btn btn-outline-primary btn-sm'>
                      Edit Foto
                    </button>
                  </div>
                  <div className='col-md-9'>
                    <div className='row mb-3'>
                      <div className='col-md-6'>
                        <strong>Nama Lengkap:</strong>
                        <p>Kelvin Marsellino</p>
                      </div>
                      <div className='col-md-6'>
                        <strong>Bio:</strong>
                        <p>Mahasiswa Penyuka Kompetisi</p>
                      </div>
                    </div>
                    <div className='row mb-3'>
                      <div className='col-md-6'>
                        <strong>Email:</strong>
                        <p>Kelvin@gmail.com</p>
                      </div>
                      <div className='col-md-6'>
                        <strong>Keterampilan:</strong>
                        <p>UI/UX Design</p>
                      </div>
                    </div>
                    <button className='btn btn-outline-success btn-sm'>
                      Edit Profil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className='text-center text-white py-4'
        style={{ backgroundColor: '#00897B' }}
      >
        <div className='container'>
          <p className='mb-0'>Hackathon Learning Space</p>
          <p className='mb-0'>
            Jl. Tentara Pelajar 50, Surabaya, Jawa Timur, Indonesia
          </p>
          <div className='mt-3'>
            <Link href='/' className='text-white me-3'>
              Instagram
            </Link>
            <Link href='/' className='text-white me-3'>
              TikTok
            </Link>
            <Link href='/' className='text-white me-3'>
              Facebook
            </Link>
            <Link href='/' className='text-white me-3'>
              LinkedIn
            </Link>
            <Link href='/' className='text-white me-3'>
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}