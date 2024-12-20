'use client'

import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Image from 'next/image'

export default function Dashboard() {
  const progress = 0;
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div style={{ flex: '1', backgroundColor: '#eaf4f4' }}>
        {/* Navbar */}
        <Navbar />
        {/* Dashboard Content */}
        <main style={{ padding: '20px' }}>
          {/* Progress Statistics */}
          <div>
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
                  backgroundColor: '#00897B',
                  color: '#ffffff',
                  borderRadius: '50%',
                  marginRight: '15px',
                }}
              >
                <i className='bi bi-bar-chart-fill fs-4'></i>
              </div>
              <div>
                <p className='mb-1' style={{ fontWeight: 'bold', color: '#00897B' }}>
                  Progress Proyek
                </p>
                <div className='progress' style={{ height: '10px', width: '300px' }}>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{
                      width: `${progress}%`,
                      backgroundColor: '#00897B',
                    }}
                  ></div>
                </div>
                <small style={{ color: '#666' }}>{progress}% Selesai</small>
              </div>
            </div>
          </div>

          {/* Deadline Section */}
          <h5 style={{ marginTop: '20px' }}>Deadline</h5>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'space-between',
            }}
          >
            {['UI/UX Design', 'Digital Marketing', 'Frontend', 'Backend'].map(
              (item, index) => (
                <div
                  key={index}
                  style={{
                    flex: '1 1 calc(25% - 10px)',
                    backgroundColor: '#ffffff',
                    padding: '15px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                  }}
                >
                  <p>{item}</p>
                  <a href='#' style={{ textDecoration: 'none', color: '#007c70' }}>
                    Selengkapnya
                  </a>
                </div>
              )
            )}
          </div>

          {/* Traffic Chart & Info */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              marginTop: '20px',
              justifyContent: 'space-between',
            }}
          >
            {/* Traffic Chart */}
            <div
              style={{
                flex: '1 1 calc(50% - 10px)',
                backgroundColor: '#ffffff',
                padding: '15px',
                borderRadius: '10px',
              }}
            >
              <h5>
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: '#007c70', marginRight: '10px' }}
                ></i>
                Traffic by Location
              </h5>
              <div
                style={{
                  position: 'relative',
                  height: '150px',
                  borderRadius: '10px',
                  marginTop: '10px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/img/about/about.png"
                  alt="Traffic Map"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>
                  <i className="bi bi-check-circle-fill" style={{ color: '#007c70', marginRight: '5px' }}></i>
                  Progres Belajar: 50%
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" style={{ color: '#007c70', marginRight: '5px' }}></i>
                  Tantangan: 30%
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" style={{ color: '#007c70', marginRight: '5px' }}></i>
                  Laporan selesai: 20%
                </li>
              </ul>
            </div>

            {/* Badges */}
            <div
              style={{
                flex: '1 1 calc(50% - 10px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    flex: '1 1 calc(50% - 10px)',
                    backgroundColor: '#ffffff',
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                  }}
                >
                  <i
                    className='bi bi-award'
                    style={{
                      fontSize: '2rem',
                      color: '#007c70',
                      marginBottom: '5px',
                    }}
                  ></i>
                  <p>UI/UX Designer pemula</p>
                  <a href='#' style={{ textDecoration: 'none', color: '#000' }}>
                    Selengkapnya
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const StatCard = ({
  title,
  value,
  color,
  textColor = '#ffffff',
  border = 'none',
}: {
  title: string
  value: string
  color: string
  textColor?: string
  border?: string
}) => (
  <div
    style={{
      flex: '1 1 calc(33% - 10px)',
      backgroundColor: color,
      color: textColor,
      padding: '20px',
      borderRadius: '10px',
      border,
      textAlign: 'center',
    }}
  >
    <h5>{title}</h5>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
  </div>
)
