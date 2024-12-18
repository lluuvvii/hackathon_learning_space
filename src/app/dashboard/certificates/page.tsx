import React from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link';
import Navbar from '../components/Navbar';

function page() {
  const certificates = [
    { id: 1, title: 'Sertifikat UI/UX Design' },
    { id: 2, title: 'Sertifikat Digital Marketing' },
    { id: 3, title: 'Sertifikat Frontend Development' },
  ];

  const badges = [
    { id: 1, title: 'Silver Member', icon: 'bi-award' },
    { id: 2, title: 'Gold Member', icon: 'bi-gem' },
    { id: 3, title: 'Premium Member', icon: 'bi-star-fill' },
  ];
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      <Sidebar />

      <div style={{ flex: '1', backgroundColor: '#f8f9fa' }}>
        <Navbar />
        <div style={{ backgroundColor: '#eaf4f4', minHeight: '100vh', padding: '20px' }}>
          <h3 className='fw-bold text-center' style={{ color: '#00897B', marginBottom: '20px' }}>Sertifikat</h3>

          {/* Cards Sertifikat */}
          <div className='row g-3'>
            {certificates.map((certificate) => (
              <div key={certificate.id} className='col-md-6 col-lg-4'>
                <div
                  className='card shadow-sm h-100'
                  style={{ borderRadius: '10px', overflow: 'hidden', border: 'none' }}
                >
                  <div
                    className='card-header text-white'
                    style={{
                      backgroundColor: '#00897B',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <i className='bi bi-file-earmark-text me-2 fs-5'></i>
                    {certificate.title}
                  </div>
                  <div className='card-body d-flex justify-content-center align-items-center'>
                    <Link href='/dashboard/certificates/detail' passHref>
                      <button
                        className='btn btn-outline-secondary'
                        style={{
                          color: '#00897B',
                          borderColor: '#00897B',
                          fontWeight: 'bold',
                        }}
                      >
                        <i className='bi bi-arrow-right-circle me-1'></i> Selengkapnya
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className='mt-5'>
            <h3 className='fw-bold text-center' style={{ color: '#00897B', marginBottom: '20px' }}>Badges</h3>
            <div className='row g-3'>
              {badges.map((badge) => (
                <div key={badge.id} className='col-md-4'>
                  <div
                    className='card shadow-sm h-100 d-flex justify-content-center align-items-center'
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      border: 'none',
                      textAlign: 'center',
                      padding: 10
                    }}
                  >
                    <div
                      className='d-flex justify-content-center align-items-center mb-3'
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#00897B',
                        color: '#ffffff',
                        borderRadius: '50%',
                      }}
                    >
                      <i className={`bi ${badge.icon} fs-3`}></i>
                    </div>
                    <p style={{ fontWeight: 'bold', color: '#00897B' }}>{badge.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page