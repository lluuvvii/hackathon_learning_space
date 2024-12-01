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
          backgroundColor: '#ffffff',
          border: '2px solid #007c70',
          borderRadius: '10px',
          margin: '20px auto',
          padding: '20px',
          maxWidth: '1000px',
          textAlign: 'center',
        }}
      >
        <h1 className='text-dark'>Selamat Datang di Forum Diskusi!!</h1>
        <p className='text-dark'>Ikuti Ruang untuk menjelajahi informasi mengenai hackathon.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
          <button
            onClick={() => router.push('/community/create')}
            style={{
              backgroundColor: '#007c70',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            + Buat Ruang
          </button>
          <input
            type='text'
            placeholder='Cari'
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              flex: '1',
              maxWidth: '200px',
              backgroundColor: 'white'
            }}
          />
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#007c70',
              border: '2px solid #007c70',
              borderRadius: '5px',
              padding: '10px',
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
