'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import DashboardCardImg from '@/../public/img/featured_card_home/Rectangle.png'
import CommunityCardImg from '@/../public/img/featured_card_home/Rectangle1.png'
import EventCardImg from '@/../public/img/featured_card_home/Rectangle2.png'
import Image from 'next/image'

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
            img={DashboardCardImg}
            altImg='Dashboard'
          />
          <FeatureCard
            title='Komunitas'
            description='Sebagai fasilitas untuk mendukung interaksi dan kolaborasi antar pengguna...'
            color='#00897B'
            img={CommunityCardImg}
            altImg='Komunitas'
          />
          <FeatureCard
            title='Event'
            description='Menyediakan berbagai event hackathon atau tantangan yang dapat diikuti...'
            color='#00897B'
            img={EventCardImg}
            altImg='Event'
          />
        </div>
      </section>

      {/* Project Section */}
      <section className='container mt-5 mb-5'>
        <h2 className='fw-bold text-dark'>Project</h2>
        <p className='text-dark'>Proyek hackathon dengan konsep Learning Space bertujuan untuk menciptakan aplikasi atau platform yang mendukung pembelajaran kolaboratif berbasis teknologi. Learning Space berfungsi sebagai ruang digital yang dirancang untuk memfasilitasi interaksi dan komunikasi antara pelajar, pengajar, dan rekan belajar dalam lingkungan yang produktif dan dinamis. Platform ini diharapkan dapat menjadi solusi bagi kebutuhan pembelajaran modern, di mana kolaborasi, aksesibilitas, dan interaksi waktu nyata sangat penting untuk mendukung proses belajar yang lebih bermakna.</p>
        <button className='btn text-light' style={{ backgroundColor: '#00897B' }} onClick={() => router.push('/projects')}>Cek Proyek</button>
      </section>
    </div>
  )
}

const FeatureCard = ({ title, description, color, img, altImg }: { title: string, description: string, color: string, img: any, altImg: string }) => (
  <div className='col-md-4 mb-3'>
    <div className='d-flex p-4 text-dark gap-3' style={{ border: `5px solid ${color}`, borderRadius: '8px' }}>
      <Image
        src={img}
        alt={altImg}
        width={120}
        height={100}
      />
      <div>
        <h3 style={{ color }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
)