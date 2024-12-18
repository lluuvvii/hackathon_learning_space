import React from 'react'
import Sidebar from '../components/Sidebar'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function page() {
  const projects = [
    {
      title: 'UI/UX',
      totalLessons: 101,
      completedLessons: 81,
      completionPercentage: '80%',
      image: '/img/projects/bg_uiux.jpg',
    },
    {
      title: 'Digmar',
      totalLessons: 101,
      completedLessons: 81,
      completionPercentage: '80%',
      image: '/img/projects/bg_product_manager.jpg',
    },
    {
      title: 'Frontend',
      totalLessons: 101,
      completedLessons: 81,
      completionPercentage: '80%',
      image: '/img/projects/bg_developer.jpg',
    },
  ];
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div style={{ flex: '1', backgroundColor: '#eaf4f4' }}>
        {/* Navbar */}
        <Navbar />
        <div className='container mt-4 mb-4'>
          {/* Tabel Jadwal */}
          <div className='mb-4'>
            <table className='table table-bordered' style={{ backgroundColor: '#e0f4f3' }}>
              <thead>
                <tr>
                  <th>Pelajaran</th>
                  <th>Pengajar</th>
                  <th>Jadwal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UI/UX Design</td>
                  <td>---------------</td>
                  <td style={{ color: '#6c757d' }}>Senin, 08:00 - 10:00</td>
                </tr>
                <tr>
                  <td>Digital Marketing</td>
                  <td>---------------</td>
                  <td style={{ color: '#28a745' }}>Selasa, 10:00 - 12:00</td>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>---------------</td>
                  <td style={{ color: '#6f42c1' }}>Rabu, 08:00 - 10:00</td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>---------------</td>
                  <td style={{ color: '#ffc107' }}>Kamis, 12:00 - 14:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Project Cards */}
          <div>
            {projects.map((project, index) => (
              <div
                key={index}
                className='d-flex align-items-center mb-3 shadow-sm p-2'
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                {/* Project Image */}
                <div style={{ position: 'relative', width: '120px', height: '100px' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>

                {/* Project Info */}
                <div className='flex-grow-1 p-3'>
                  <h5 className='mb-1'>{project.title}</h5>
                  <p className='mb-1'>
                    Total Pelajaran <b>{project.totalLessons}</b>
                  </p>
                  <p className='mb-1'>
                    Pelajaran Selesai <b>{project.completedLessons}/{project.totalLessons}</b>
                  </p>
                  <div
                    className='progress'
                    style={{ height: '5px', marginTop: '5px', backgroundColor: '#dee2e6' }}
                  >
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: project.completionPercentage, backgroundColor: '#007c70' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dropdown Filter */}
          <div className='mt-3 d-flex align-items-center'>
            <label htmlFor='filter' className='me-2'>
              Tampilkan:
            </label>
            <select
              id='filter'
              className='form-select'
              style={{ width: '120px' }}
              defaultValue='Semua'
            >
              <option value='Semua'>Semua</option>
              <option value='Selesai'>Selesai</option>
              <option value='Belum Selesai'>Belum Selesai</option>
            </select>
          </div>

          {/* Link Ke Halaman Lain */}
          <div className='mt-4'>
            <Link href='/dashboard' className='fw-bold' style={{ textDecoration: 'none', color: '#00897B' }}>
              Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page