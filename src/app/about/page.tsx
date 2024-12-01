'use client'

import Image from 'next/image'
import React from 'react'
import AboutImg from '@/../public/img/about/about.png'
import PurposeImg from '@/../public/img/about/Frame101464.png'

export default function About() {
  return (
    <div style={{ marginTop: '100px' }}>
      {/* Tentang Section */}
      <section className='container text-center'>
        <h2 className='fw-bold' style={{ color: '#00897B' }}>Tentang Hackathon Learning Space</h2>
        <p>
          Membangun generasi inovatif dengan menyediakan ruang belajar dan berkompetisi untuk menciptakan solusi teknologi bagi tantangan masa kini.
        </p>
        <Image
          src={AboutImg}
          alt='Tentang Hackathon Learning Space'
          layout='responsive'
          width={800}
          height={400}
          style={{ borderRadius: '10px' }}
        />
      </section>

      {/* Mengenal Section */}
      <section className='container text-start mt-5'>
        <h2 className='fw-bold' style={{ color: '#00897B' }}>Mengenal Hackathon Learning Space</h2>
        <p>
          Hackathon Learning Space adalah ruang pembelajaran inovatif yang menawarkan pengalaman unik dalam pengembangan keterampilan teknologi dan kolaborasi kreatif. Melalui platform ini, pengguna dapat terlibat dalam proyek-proyek nyata, bergabung dengan komunitas online yang mendukung, serta belajar dengan fleksibilitas tinggi sesuai minat dan kebutuhan pengguna.
        </p>
        <button className='btn text-light' style={{ backgroundColor: '#00897B' }}>Lihat Event</button>
      </section>

      {/* Tujuan Section */}
      <section className='container mt-5'>
        <div className='row'>
          {/* Gambar */}
          <div className='col-md-5 text-start mb-4 mb-md-0'>
            <Image
              src={PurposeImg}
              alt='Learning Illustration'
              className='rounded'
              width={400}
              height={400}
              style={{ maxWidth: '100%', height: 'auto' }} // Menyesuaikan ukuran gambar
            />
          </div>

          {/* Konten */}
          <div className='col-md-7 text-md-start text-start'>
            <h2 className='fw-bold' style={{ color: '#00897B' }}>
              Tujuan Utama Hackathon Learning Space
            </h2>
            <p className='mt-3'>
              Membangun platform pembelajaran interaktif yang menawarkan pengalaman belajar
              yang mendalam dan aplikatif untuk mengedepankan pengalaman praktis dengan
              proyek nyata yang relevan dengan kebutuhan industri. Dilengkapi dengan komunitas
              online yang aktif dan suportif, memungkinkan pengguna untuk berbagi pengetahuan,
              berdiskusi, dan saling memberikan masukan yang konstruktif.
            </p>
          </div>
        </div>
      </section>


      {/* Testimoni Section */}
      <section className='container mt-5 mb-5'>
        <h2 className='fw-bold text-center' style={{ color: '#00897B' }}>Testimoni Hackathon Learning Space</h2>
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
                border: '2px solid #00897B'
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
