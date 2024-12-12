'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Komunitas() {
  const router = useRouter()
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', marginTop: '100px' }}>
      {/* Welcome Section */}
      <section
        style={{
          backgroundColor: 'white',
          border: '3px solid #00897B',
          borderRadius: '15px',
          margin: '20px auto',
          padding: '20px',
          maxWidth: '800px',
        }}
      >
        <h1
          style={{
            color: '#00897B',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Selamat Datang di Forum Diskusi!!
        </h1>
        <p
          style={{
            color: '#333',
            textAlign: 'center',
            fontSize: '1rem',
            marginBottom: '20px',
          }}
        >
          Ikuti Ruang untuk menjelajahi informasi mengenai hackathon.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Button Buat Ruang */}
          <button
            onClick={() => router.push('/community/create')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'white',
              color: '#00897B',
              border: '2px solid #00897B',
              borderRadius: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            <i className='bi bi-plus-circle'></i>
            Buat Ruang
          </button>

          {/* Input Cari */}
          <div
            className='input-group'
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '2px solid #00897B',
              borderRadius: '10px',
              padding: '5px 10px',
              backgroundColor: 'white',
              maxWidth: '200px',
            }}
          >
            <i className='bi bi-search' style={{ color: '#00897B', marginRight: '5px' }} />
            <input type='text' className='form-control' placeholder='Cari' />
          </div>

          {/* Button Filter */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              color: '#00897B',
              border: '2px solid #00897B',
              borderRadius: '10px',
              padding: '10px 15px',
              cursor: 'pointer',
            }}
          >
            <i className='bi bi-filter'></i>
          </button>
        </div>
      </section>

      {/* Discussion Cards */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#007c70', marginBottom: '20px' }}>Temukan Ruang Diskusi</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {[
            { title: 'Product Manager', description: 'Kolaborasi, perencanaan, dan pengambilan keputusan terkait pengembangan produk atau pengelolaan proyek.', image: '/product.png' },
            { title: 'UI/UX', description: 'Kolaborasi dalam pertukaran ide dalam proses desain antarmuka pengguna (UI) dan pengalaman pengguna (UX).', image: '/uiux.png' },
            { title: 'Developer', description: 'Berfokus pada aspek teknis dari pengembangan, seperti implementasi fitur, arsitektur sistem, integrasi, dan debugging.', image: '/developer.png' },
          ].map((room, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 calc(33% - 20px)',
                backgroundColor: '#007c70',
                color: '#ffffff',
                borderRadius: '10px',
                textAlign: 'center',
                padding: '15px',
                maxWidth: '300px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src={room.image}
                alt={room.title}
                width={300}
                height={150}
                style={{
                  objectFit: 'cover',
                  borderRadius: '10px 10px 0 0',
                  marginBottom: '10px',
                }}
              />
              <h3>{room.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{room.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
