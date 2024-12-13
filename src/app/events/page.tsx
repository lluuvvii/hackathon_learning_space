import Image from 'next/image'
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
      className='card h-100 p-3'
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
        className='card-img'
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p>{description}</p>
        <p>{date}</p>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-success'>
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

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
  ]

  const recommendedEvents = [
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
  ]

  const ongoingEvents = [
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
  ]

  const upcomingEvents = [
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
  ]
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
          Ikuti Event Menantang dari <span style={{ color: '#00798B' }}>Hackathon Learning Space</span>
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
            className='d-flex gap-3 justify-content-center'
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

        {/* Rekomendasi Event */}
        <section className='mb-5'>
          <h3 className='text-center' style={{ color: '#00897B', fontWeight: 'bold' }}>Rekomendasi Event</h3>
          <div
            className='d-flex gap-3 justify-content-center'
            style={{
              overflowX: 'auto',
              padding: '0 10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {recommendedEvents.map((event, index) => (
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

        {/* Event yang sedang berlangsung */}
        <section className='mb-5'>
          <h3 className='text-center' style={{ color: '#00897B', fontWeight: 'bold' }}>Event yang sedang berlangsung</h3>
          <div
            className='d-flex gap-3 justify-content-center'
            style={{
              overflowX: 'auto',
              padding: '0 10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {ongoingEvents.map((event, index) => (
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

        {/* Event yang akan datang */}
        <section className='mb-5'>
          <h3 className='text-center' style={{ color: '#00897B', fontWeight: 'bold' }}>Event yang akan datang</h3>
          <div
            className='d-flex gap-3 justify-content-center'
            style={{
              overflowX: 'auto',
              padding: '0 10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {upcomingEvents.map((event, index) => (
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
      </main>
    </div>
  )
}

export default EventPage
