'use client'

import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div style={{ flex: '1', backgroundColor: '#f8f9fa' }}>
        {/* Navbar */}
        <Navbar />
        {/* Dashboard Content */}
        <main style={{ padding: '20px' }}>
          {/* Progress Statistics */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'space-between',
            }}
          >
            <StatCard title='Progres Belajar' value='50%' color='#007c70' />
            <StatCard
              title='Tantangan'
              value='30%'
              color='#ffffff'
              textColor='#000000'
              border='1px solid #ccc'
            />
            <StatCard
              title='Laporan'
              value='20%'
              color='#ffffff'
              textColor='#000000'
              border='1px solid #ccc'
            />
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
              <h5>Traffic by Location</h5>
              <div
                style={{
                  height: '150px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '10px',
                  marginTop: '10px',
                }}
              ></div>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>Progres Belajar: 50%</li>
                <li>Tantangan: 30%</li>
                <li>Laporan selesai: 20%</li>
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
