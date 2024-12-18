'use client'

import Image from 'next/image'
import React from 'react'

import { FaBookmark } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: any
  altText: string
  onStart: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, altText, onStart }) => {
  const router = useRouter()
  return (
    <div
      className='card h-100'
      style={{
        border: '2px solid #00897B',
      }}
    >
      {/* Header */}
      <div className='card-header text-center' style={{ backgroundColor: '#ffffff' }}>
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
            onClick={() => {
              alert('Project ditambahkan ke bookmark!')
              router.push('/dashboard/projects')
            }} // Tambahkan logika bookmark di sini
          >
            <FaBookmark size={18} style={{ verticalAlign: 'middle' }} />
          </button>
        </div>
      </div>
    </div>
  )
}

const ProjectsPage = () => {
  const router = useRouter()
  const projects = [
    {
      title: 'UI Design: VisioFlow',
      description: 'Desain antarmuka modern yang intuitif untuk meningkatkan pengalaman pengguna.',
      imageSrc: '/img/projects/bg_uiux.jpg',
      altText: 'UI Design Illustration',
    },
    {
      title: 'Backend: Corelink',
      description: 'Sistem backend scalable dengan keamanan tinggi untuk mendukung aplikasi modern.',
      imageSrc: '/img/projects/bg_developer.jpg',
      altText: 'Backend Illustration',
    },
    {
      title: 'Frontend: Nextview',
      description: 'Antarmuka responsif dengan teknologi terkini untuk pengalaman pengguna yang dinamis.',
      imageSrc: '/img/projects/bg_product_manager.jpg',
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

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginTop: '100px' }}>
      {/* Main Section */}
      <main className='container'>
        {/* Project Cards */}
        <div className='container'>
          <div className='row mb-5'>
            {projects.map((project, index) => (
              <div className='col-md-4 mb-4' key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  altText={project.altText}
                  onStart={() => router.push(`/projects/${index + 1}`)}
                />
              </div>
            ))}
          </div>
        </div>

        <section className="mb-5">
          <h3 className="fw-bold mb-4 text-center" style={{ color: '#00897B' }}>
            Keterampilan yang Dibutuhkan
          </h3>
          <div className="accordion" id="skillsAccordion" style={{ border: '2px solid #00897B', borderRadius: '10px', overflow: 'hidden' }}>
            {skills.map((skill, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${index === 0 ? '' : 'collapsed'} fw-bold`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${index}`}
                    style={{ color: '#00897B' }}
                  >
                    {index + 1}. {skill.title}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#skillsAccordion"
                >
                  <div className="accordion-body" style={{ backgroundColor: '#ffffff' }}>
                    <ul>
                      {skill.points.map((point, i) => (
                        <li key={i} style={{ lineHeight: '1.8' }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keterampilan Pendukung */}
        <section className="text-center mb-4">
          <h3 className="fw-bold mb-4" style={{ color: '#00897B' }}>
            Keterampilan Pendukung
          </h3>
          <div
            className="accordion"
            id="supportingSkillsAccordion"
            style={{
              border: '2px solid #00897B',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSupporting">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSupporting"
                  aria-expanded="true"
                  aria-controls="collapseSupporting"
                  style={{ color: '#00897B', fontWeight: 'bold' }}
                >
                  Daftar Keterampilan Pendukung
                </button>
              </h2>
              <div
                id="collapseSupporting"
                className="accordion-collapse collapse show"
                aria-labelledby="headingSupporting"
              >
                <div className="accordion-body text-start">
                  <ul className="mb-0">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectsPage
