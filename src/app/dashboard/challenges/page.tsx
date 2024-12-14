import React from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link';
import Navbar from '../components/Navbar';

function page() {
  const challenges = [
    { id: 1, title: 'Tantangan Proyek 1' },
    { id: 2, title: 'Tantangan Proyek 2' },
    { id: 3, title: 'Tantangan Proyek 3' },
    { id: 4, title: 'Tantangan Proyek 4' },
  ];

  const progress = 75;
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      <Sidebar />
      <div style={{ flex: '1', backgroundColor: '#f8f9fa' }}>
        <Navbar />
        <div style={{ backgroundColor: '#eaf4f4', minHeight: '100vh', padding: '20px' }}>
          {/* Cards Tantangan */}
          <div className='row g-3'>
            {challenges.map((challenge) => (
              <div key={challenge.id} className='col-md-6'>
                <div
                  className='card shadow-sm h-100'
                  style={{ border: 'none', borderRadius: '10px', overflow: 'hidden' }}
                >
                  <div
                    className='card-header text-white'
                    style={{ backgroundColor: '#00798B', fontWeight: 'bold' }}
                  >
                    <i className='bi bi-flag-fill me-2'></i>
                    {challenge.title}
                  </div>
                  <div className='card-body' style={{ backgroundColor: '#ffffff' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                      Selesaikan tantangan ini untuk meningkatkan keterampilan Anda.
                    </p>
                    <div className='d-flex justify-content-between'>
                      <Link href='#' passHref>
                        <button className='btn btn-outline-secondary btn-sm'>
                          <i className='bi bi-info-circle me-1'></i> Detail Tantangan
                        </button>
                      </Link>
                      <Link href='#' passHref>
                        <button
                          className='btn btn-success btn-sm'
                          style={{ backgroundColor: '#00798B', borderColor: '#00798B' }}
                        >
                          <i className='bi bi-play-circle me-1'></i> Mulai
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Tantangan */}
          <div className='mt-5'>
            <h5 style={{ color: '#00798B', marginBottom: '15px' }}>Progress Tantangan</h5>
            <div
              className='card shadow-sm d-flex flex-row align-items-center p-3'
              style={{
                backgroundColor: '#ffffff',
                border: 'none',
                borderRadius: '10px',
              }}
            >
              <div
                className='d-flex justify-content-center align-items-center'
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#00798B',
                  color: '#ffffff',
                  borderRadius: '50%',
                  marginRight: '15px',
                }}
              >
                <i className='bi bi-bar-chart-fill fs-4'></i>
              </div>
              <div>
                <p className='mb-1' style={{ fontWeight: 'bold', color: '#00798B' }}>
                  Progress Tantangan
                </p>
                <div className='progress' style={{ height: '10px', width: '300px' }}>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{
                      width: `${progress}%`,
                      backgroundColor: '#00798B',
                    }}
                  ></div>
                </div>
                <small style={{ color: '#666' }}>{progress}% Selesai</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page