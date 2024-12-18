'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Sidebar() {
  const pathname = usePathname(); // Mendapatkan URL path saat ini

  const menuItems = [
    { icon: 'bi bi-people', label: 'Anggota', route: '/dashboard/projects/[id]/member' },
    { icon: 'bi bi-list-check', label: 'Daftar Tugas', route: '/dashboard/projects/[id]/tasks' },
    { icon: 'bi bi-calendar', label: 'Kalender', route: '/dashboard/projects/[id]/calendar' },
  ];

  return (
    <aside
      style={{
        width: '250px',
        backgroundColor: '#ffffff',
        color: '#333333',
        padding: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        borderRight: '1px solid #ddd', // Garis pemisah di samping
        height: '100vh', // Sidebar full height
      }}
    >
      <nav>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {menuItems.map((item, index) => {
            const isActive = pathname.includes(item.route.replace('[id]', '1')); // Sesuaikan path dengan parameter dinamis

            return (
              <li key={index}>
                <Link
                  href={item.route.replace('[id]', '1')} // Ganti [id] dengan ID proyek, contoh '1'
                  className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? 'active' : ''}`}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#ffffff' : '#333333', // Teks putih jika aktif
                    backgroundColor: isActive ? '#00897B' : 'transparent', // Highlight background aktif
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;