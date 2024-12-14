'use client'

import Link from 'next/link'
import React from 'react'

function Sidebar() {
  const menuItems = [
    { icon: 'bi bi-grid', label: 'Dashboard', route: '/dashboard' },
    { icon: 'bi bi-folder', label: 'Proyek yang sedang berjalan', route: '/dashboard/projects' },
    { icon: 'bi bi-flag', label: 'Tantangan', route: '/dashboard/challenges' },
    { icon: 'bi bi-award', label: 'Sertifikasi & Badges', route: '/dashboard/certificates' },
    { icon: 'bi bi-file-earmark', label: 'Laporan', route: '/dashboard/reports' },
    { icon: 'bi bi-gear', label: 'Setting', route: '/dashboard/settings' },
  ];
  return (
    <aside
      style={{
        width: '250px',
        backgroundColor: '#006d5b',
        color: '#ffffff',
        padding: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <nav>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.route}
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  padding: '10px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = '#007c70')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = '#006d5b')
                }
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar