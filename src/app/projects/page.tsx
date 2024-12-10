'use client'

import Image from 'next/image'
import React from 'react'

import projectCardImg from '@/../public/img/projects/Rectangle_198.png'
import { FaBookmark } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: any
  altText: string
  onStart: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, altText, onStart }) => {
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
        <div className='d-flex justify-content-between gap-2'>
          {/* Tombol Mulai */}
          <button
            className='btn text-light'
            style={{
              backgroundColor: '#00897B',
            }}
            onClick={onStart}
          >
            Mulai
          </button>
          {/* Tombol Bookmark */}
          <button
            className='btn btn-outline-success'
            style={{
              border: 'none'
            }}
            onClick={() => alert('Project ditambahkan ke bookmark!')} // Tambahkan logika bookmark di sini
          >
            <FaBookmark size={18} style={{ verticalAlign: 'middle' }} />
          </button>
        </div>
      </div>
    </div>
  )
}


const ProjectsPage = () => {
  const projects = [
    {
      title: 'UI Design: VisioFlow',
      description: 'Desain antarmuka modern yang intuitif untuk meningkatkan pengalaman pengguna.',
      imageSrc: projectCardImg,
      altText: 'UI Design Illustration',
    },
    {
      title: 'Backend: Corelink',
      description: 'Sistem backend scalable dengan keamanan tinggi untuk mendukung aplikasi modern.',
      imageSrc: projectCardImg,
      altText: 'Backend Illustration',
    },
    {
      title: 'Frontend: Nextview',
      description: 'Antarmuka responsif dengan teknologi terkini untuk pengalaman pengguna yang dinamis.',
      imageSrc: projectCardImg,
      altText: 'Frontend Illustration',
    },
  ]

  const skills = [
    {
      title: 'Desain Antarmuka Pengguna (UI)',
      points: [
        'Membuat sketsa sederhana atau wireframe.',
        'Menggunakan alat desain seperti Figma atau Canva.',
        'Memahami dasar kombinasi warna dan tata letak.',
      ],
    },
    {
      title: 'Pengembangan Backend',
      points: [
        'Dasar bahasa pemrograman seperti Python atau PHP.',
        'Pengetahuan dasar tentang database (MySQL atau MongoDB).',
        'Memahami cara kerja API sederhana.',
      ],
    },
    {
      title: 'Pengembangan Frontend',
      points: [
        'HTML, CSS, dan JavaScript dasar.',
        'Membuat halaman web sederhana yang responsif.',
        'Menggunakan CSS framework seperti Bootstrap.',
      ],
    },
    {
      title: 'Digital Marketing',
      points: [
        'Memahami konsep dasar SEO (Search Engine Optimization).',
        'Membuat konten media sosial sederhana.',
        'Menggunakan alat pemasaran gratis seperti Google Analytics atau Facebook Insights.',
      ],
    },
  ]

  const handleStart = (title: string) => {
    alert(`Mulai proyek: ${title}`)
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginTop: '100px' }}>
      {/* Main Section */}
      <main className='container mt-4'>
        {/* Project Cards */}

        <div className='container mt-5'>
          <div className='row mb-5'>
            {projects.map((project, index) => (
              <div className='col-md-4 mb-4' key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  altText={project.altText}
                  onStart={() => handleStart(project.title)}
                />
              </div>
            ))}
          </div>
        </div>

        <section className='container my-5'>
          {/* Purpose Section */}
          <section className='mb-5 text-center'>
            <h3 className='fw-bold mb-4' style={{ color: '#00897B' }}>
              Tujuan
            </h3>
            <div
              className='p-4'
              style={{
                border: '2px solid #00897B',
                borderRadius: '10px',
                backgroundColor: '#F9F9F9',
              }}
            >
              <p className='text-dark mb-0' style={{ lineHeight: '1.8' }}>
                Proyek ini dirancang untuk membantu mahasiswa mempelajari dan
                mengembangkan keterampilan praktis dalam bidang teknologi, termasuk
                desain antarmuka pengguna (UI), pengembangan backend yang efisien
                dan aman, implementasi frontend yang responsif, serta strategi
                digital marketing berbasis data. Melalui proyek ini, mahasiswa
                diharapkan mampu memahami bagaimana mengintegrasikan teknologi dan
                strategi pemasaran untuk menciptakan solusi yang efektif, menarik,
                dan relevan di dunia digital.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className='mb-5'>
            <h3
              className='fw-bold mb-4 text-center'
              style={{ color: '#00897B' }}
            >
              Keterampilan yang Dibutuhkan
            </h3>
            <div className='row g-4'>
              {/* Skill Item */}
              {skills.map((skill, index) => (
                <div className='col-md-6' key={index}>
                  <div
                    className='p-4'
                    style={{
                      border: '2px solid #00897B',
                      borderRadius: '10px',
                      backgroundColor: '#F9F9F9',
                    }}
                  >
                    <h5
                      className='fw-bold mb-3'
                      style={{ color: '#00897B', fontSize: '1.2rem' }}
                    >
                      {index + 1}. {skill.title}
                    </h5>
                    <ul>
                      {skill.points.map((point, i) => (
                        <li key={i} style={{ lineHeight: '1.8' }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button
                      className='btn text-light mt-3'
                      style={{
                        backgroundColor: '#00897B',
                        borderRadius: '5px',
                      }}
                    >
                      Pilih Proyek
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Supporting Skills */}
          <section className='text-center'>
            <h3 className='fw-bold mb-4' style={{ color: '#00897B' }}>
              Keterampilan Pendukung
            </h3>
            <div
              className='text-start p-4'
              style={{
                border: '2px solid #00897B',
                borderRadius: '10px',
              }}
            >
              <ul className='mb-0'>
                <li style={{ lineHeight: '1.8' }}>
                  Kemampuan dasar berkomunikasi dan bekerja dalam tim.
                </li>
                <li style={{ lineHeight: '1.8' }}>
                  Manajemen waktu untuk menyelesaikan tugas tepat waktu.
                </li>
                <li style={{ lineHeight: '1.8' }}>
                  Rasa ingin tahu dan kemauan untuk belajar hal baru.
                </li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default ProjectsPage
