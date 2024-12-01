'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column', marginTop: '100px' }}>
      {/* Tentang Section */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f7f7f7', textAlign: 'center' }}>
        <h2 style={{ color: '#007c70', fontWeight: 'bold' }}>Tentang Hackathon Learning Space</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', color: '#555' }}>
          Membangun generasi inovatif dengan menyediakan ruang belajar dan berkompetisi untuk menciptakan solusi teknologi bagi tantangan masa kini.
        </p>
        <Image
          src='/about-image.png'
          alt='Tentang Hackathon Learning Space'
          layout='responsive'
          width={800}
          height={400}
          style={{ borderRadius: '10px' }}
        />
      </section>

      {/* Mengenal Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#007c70', fontWeight: 'bold' }}>Mengenal Hackathon Learning Space</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', color: '#555' }}>
          Hackathon Learning Space adalah ruang pembelajaran inovatif yang menawarkan pengalaman unik dalam pengembangan keterampilan teknologi dan kolaborasi kreatif. Melalui platform ini, pengguna dapat terlibat dalam proyek-proyek nyata, bergabung dengan komunitas online yang mendukung, serta belajar dengan fleksibilitas tinggi sesuai minat dan kebutuhan pengguna.
        </p>
        <button
          style={{
            backgroundColor: '#007c70',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Lihat Event
        </button>
      </section>

      {/* Tujuan Section */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#007c70', fontWeight: 'bold' }}>Tujuan Utama Hackathon Learning Space</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          <div
            style={{
              flex: '1 1 300px',
              maxWidth: '300px',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src='/goal1.png'
              alt='Tujuan 1'
              layout='responsive'
              width={300}
              height={150}
              style={{ borderRadius: '10px' }}
            />
            <p>Membangun platform pembelajaran interaktif yang menawarkan pengalaman belajar yang mendalam dan aplikatif.</p>
          </div>
          <div
            style={{
              flex: '1 1 300px',
              maxWidth: '300px',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src='/goal2.png'
              alt='Tujuan 2'
              layout='responsive'
              width={300}
              height={150}
              style={{ borderRadius: '10px' }}
            />
            <p>Menawarkan proyek nyata yang relevan dengan kebutuhan industri melalui komunitas online yang aktif.</p>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#007c70', fontWeight: 'bold' }}>Testimoni Hackathon Learning Space</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          {[
            { name: 'Sarah Amalia', badge: 'UI/UX Pemula', text: 'Saya sangat terkesan dengan fleksibilitas yang ditawarkan. Berkat platform ini, kemampuan saya meningkat pesat!' },
            { name: 'Kehl Savier', badge: 'FrontEnd Pemula', text: 'Dengan komunitas online yang aktif, saya mendapatkan masukan berharga untuk proyek saya.' },
            { name: 'Chistnian Kheul', badge: 'BackEnd Menengah', text: 'Platform ini membuat keterampilan saya lebih relevan dengan kebutuhan industri.' },
            { name: 'Kelvin Manggarai', badge: 'UI/UX Pemula', text: 'Saya belajar banyak dari proyek nyata dan diskusi komunitas.' },
          ].map((testimoni, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 300px',
                maxWidth: '300px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'left',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <strong>{testimoni.name}</strong> <span style={{ fontSize: '0.8rem', color: '#555' }}>({testimoni.badge})</span>
              <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '10px' }}>{testimoni.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
