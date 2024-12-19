'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  return (
    <div style={{ marginTop: '100px' }}>
      {/* Hero Section */}
      <header className="container mt-5 d-flex align-items-center flex-wrap">
        <div className="text-section col-12 col-md-6">
          <h1
            style={{
              color: '#00897B',
              fontWeight: 'bold',
              fontSize: '2rem',
              marginBottom: '20px',
            }}
          >
            Bergabunglah dalam Hackathon Learning Space: Kolaborasi, Inovasi, dan Solusi Nyata!
          </h1>
          <p style={{ color: '#4A4A4A', lineHeight: '1.6rem' }}>
            Hackathon Learning Space adalah sebuah platform kolaboratif yang dirancang untuk menggabungkan pembelajaran intensif dan pengembangan solusi dalam waktu terbatas. Program ini biasanya berlangsung dalam format kompetisi, di mana para peserta bekerja dalam tim untuk menciptakan solusi inovatif terhadap permasalahan tertentu.
          </p>
        </div>
        <div className="image-section col-12 col-md-6 d-flex justify-content-center">
          <Image
            src="/home_hero.png" // Sesuaikan path dengan lokasi file ilustrasi
            alt="Hackathon Learning Space"
            width={680}
            height={400}
            priority
          />
        </div>
      </header>

      {/* Tentang Kami Section */}
      <section className="container my-5">
        <h2 className="fw-bold text-dark">Tentang Kami</h2>
        <p style={{ color: '#4A4A4A', lineHeight: '1.6rem' }}>
          Hackathon Learning Space adalah sebuah platform yang dirancang secara khusus untuk mendukung peserta hackathon dalam proses belajar, berinovasi, dan berkolaborasi secara efektif. Platform ini dapat hadir dalam bentuk fisik, seperti coworking space atau area konferensi, maupun digital, seperti website atau aplikasi online. Tujuan utamanya adalah menciptakan lingkungan yang mendukung kreativitas, produktivitas, dan pertukaran ide secara dinamis.
        </p>
        <button className='btn text-light' style={{ backgroundColor: '#00897B' }} onClick={() => router.push('/about')}>Selengkapnya</button>
      </section>
    </div>
  );
}
