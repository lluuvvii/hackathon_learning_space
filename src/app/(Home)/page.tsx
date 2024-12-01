'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div style={{ marginTop: '100px' }}>
      {/* Hero Section */}
      <header className='container mt-5 text-center'>
        <div className='p-5 text-white' style={{ backgroundColor: '#00897B', borderRadius: '12px' }}>
          <h1>Hackathon Learning Space: Mengasah Kemampuan, Menciptakan Solusi Inovatif untuk Tantangan Dunia Nyata</h1>
        </div>
      </header>

      {/* Tentang Kami Section */}
      <section className='container mt-5'>
        <h2 className='fw-bold text-dark'>Tentang Kami</h2>
        <p className='text-dark'>Hackathon Learning Space adalah sebuah platform yang dirancang secara khusus untuk mendukung peserta hackathon dalam proses belajar, berinovasi, dan berkolaborasi secara efektif. Platform ini dapat hadir dalam bentuk fisik, seperti coworking space atau area konferensi, maupun digital, seperti website atau aplikasi online. Tujuan utamanya adalah menciptakan lingkungan yang mendukung kreativitas, produktivitas, dan pertukaran ide secara dinamis di antara peserta hackathon, yang biasanya terdiri dari programmer, desainer, pengembang produk, hingga pemasar.</p>
        <button className='btn text-light' style={{ backgroundColor: '#00897B' }} onClick={() => router.push('/about')}>Selengkapnya</button>
      </section>

      {/* Fitur Utama Section */}
      <section className='container mt-5'>
        <h2 className='fw-bold text-dark'>Fitur Utama Hackathon Learning Space</h2>
        <div className='row'>
          <FeatureCard
            title='Dashboard'
            description='Pusat informasi utama untuk menampilkan progress belajar pengguna...'
            color='#00897B'
          />
          <FeatureCard
            title='Komunitas'
            description='Sebagai fasilitas untuk mendukung interaksi dan kolaborasi antar pengguna...'
            color='#00897B'
          />
          <FeatureCard
            title='Event'
            description='Menyediakan berbagai event hackathon atau tantangan yang dapat diikuti...'
            color='#00897B'
          />
        </div>
      </section>

      {/* Footer */}
      <footer className='text-light mt-5 py-4' style={{ backgroundColor: '#00897B' }}>
        <div className='container text-center'>
          <p>Hackathon Learning Space</p>
          <p>Jl. Tentara Pelajar 50, Surabaya, Jawa Timur, Indonesia</p>
          <p>Pusat Bantuan | FAQ | Tentang Kami</p>
          <div className='d-flex justify-content-center gap-3 mt-3'>
            <SocialIcon icon='bi bi-youtube' />
            <SocialIcon icon='bi bi-tiktok' />
            <SocialIcon icon='bi bi-linkedin' />
            <SocialIcon icon='bi bi-envelope' />
          </div>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard = ({ title, description, color }: { title: string, description: string, color: string }) => (
  <div className='col-md-4 mb-3'>
    <div className='p-4 text-white' style={{ backgroundColor: color, borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
)

const SocialIcon = ({ icon }: { icon: string }) => (
  <i className={`${icon} fs-4`} style={{ color: '#fff', cursor: 'pointer' }}></i>
)
