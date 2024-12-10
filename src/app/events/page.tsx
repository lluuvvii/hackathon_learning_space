import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface EventCardProps {
  title: string
  description: string
  date: string
  imageSrc: string
}

const EventCard = ({ title, description, date, imageSrc }: EventCardProps) => {
  return (
    <div
      className="card h-100 p-3"
      style={{
        width: 320,
        border: '2px solid #00897B',
        borderRadius: '15px',
      }}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={320}
        height={200}
        className="card-img"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{description}</p>
        <p>{date}</p>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const EventPage = () => {
  const myEvents = [
    {
      title: 'Solve For Society',
      description: 'Kompetisi teknologi berdampak sosial',
      date: '01 Desember - 30 Desember 2024',
      imageSrc: '/img/events/banner_my_event1.png',
    },
    {
      title: 'Coding Challenge: Build & Code',
      description: 'Kompetisi keterampilan coding',
      date: '01 Februari - 30 Februari 2024',
      imageSrc: '/img/events/banner_my_event2.png',
    },
    {
      title: 'Hackathon 2024',
      description: 'Kompetisi pengembangan aplikasi',
      date: '15 Januari - 15 Maret 2024',
      imageSrc: '/img/events/banner_my_event3.png',
    },
    {
      title: 'Hackathon 2024',
      description: 'Kompetisi pengembangan aplikasi',
      date: '15 Januari - 15 Maret 2024',
      imageSrc: '/img/events/banner_my_event3.png',
    },
  ];
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden'
        }}
      >
        <Image
          src='/img/events/events_background.png'
          alt='Event Banner'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>

      <div className='container d-flex justify-content-center mt-5'>
        <h1 className='fw-bold' style={{ fontSize: '2rem' }}>
          Ikuti Event Menantang dari <span style={{ color: '#00A693' }}>Hackathon Learning Space</span>
        </h1>
      </div>

      {/* Buttons */}
      <div className='container mb-4 d-flex justify-content-center flex-wrap gap-4'>
        <button className='btn btn-outline-teal px-2' style={{ border: '1px solid #00798B' }}>Event Saya</button>
        <button className='btn btn-outline-teal px-2' style={{ border: '1px solid #00798B' }}>Rekomendasi Event</button>
        <button className='btn btn-outline-teal px-2' style={{ border: '1px solid #00798B' }}>Event Berlangsung</button>
        <button className='btn btn-outline-teal px-2' style={{ border: '1px solid #00798B' }}>Event Akan Datang</button>
      </div>


      {/* Event Sections */}
      <main className='container mt-5'>
        {/* Event Saya */}
        <section className='mb-5'>
          <h3 className='text-center' style={{ color: '#00897B', fontWeight: 'bold' }}>Event Saya</h3>
          <div
            className="d-flex gap-3"
            style={{
              overflowX: 'auto',
              padding: '0 10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {myEvents.map((event, index) => (
              <div key={index} style={{ display: 'inline-block' }}>
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  imageSrc={event.imageSrc}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Event Akan Datang */}
        <section className='mb-5' >
          <h3 style={{ color: '#00897B', fontWeight: 'bold' }}>Event Akan Datang</h3>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div
                className='card h-100'
                style={{
                  border: '1px solid #00897B',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src='/path-to-image-2.jpg'
                  alt='Tech Startup Pitch'
                  width={500}
                  height={300}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Tech Startup Pitch</h5>
                  <p>Kompetisi Teknologi Bisnis</p>
                  <p>16 Februari - 28 Februari 2025</p>
                  <Link
                    href='/event/tech-startup-pitch'
                    className='btn'
                    style={{
                      backgroundColor: '#00897B',
                      color: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    Informasi Pendaftaran
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default EventPage
