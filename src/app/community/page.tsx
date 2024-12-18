'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: any
  altText: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, altText }) => {
  return (
    <div
      className='card h-100'
      style={{
        border: '2px solid #00897B',
      }}
    >
      {/* Header */}
      <div className='card-header text-center' style={{ backgroundColor: '#E0F2F1' }}>
        <h5 className='fw-bold' style={{ color: '#00897B' }}>
          {title}
        </h5>
      </div>

      {/* Gambar */}
      <div style={{ width: '100%', height: '200px', position: 'relative' }}>
        <Image
          src={imageSrc}
          alt={altText}
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>

      {/* Konten */}
      <div className='card-body text-center'>
        <p className='card-text'>{description}</p>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-success'>
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Komunitas() {
  const router = useRouter()
  const projects = [
    {
      title: 'Product Manager',
      description: ' Kolaborasi, perencanaan, dan pengambilan keputusan terkait pengembangan produk atau pengelolaan proyek.',
      imageSrc: '/img/projects/bg%20product%20manager%201.jpg',
      altText: 'UI Design Illustration',
    },
    {
      title: 'UI/UX',
      description: 'kolaborasi dalam pertukaran ide dalam proses desain antarmuka pengguna (UI) dan pengalaman pengguna (UX). ',
      imageSrc: '/img/projects/BG%20UIUX1.jpg',
      altText: 'Backend Illustration',
    },
    {
      title: 'Developer',
      description: 'Berfokus pada aspek teknis dari pengembangan, seperti implementasi fitur, arsitektur sistem, integrasi, dan debugging.',
      imageSrc: '/img/projects/BG%20DEVELOPER1.jpg',
      altText: 'Frontend Illustration',
    },
  ]
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

      <div className='container d-flex justify-content-center mt-5'>
        <h1 className='fw-bold' style={{ color: '#00897B' }}>
          Temukan Ruang Diskusi
        </h1>
      </div>

      {/* Discussion Cards */}
      <div className='container mt-5'>
        <div className='row mb-5'>
          {projects.map((project, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                altText={project.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
