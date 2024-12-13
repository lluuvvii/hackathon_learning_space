import Image from 'next/image';
import React from 'react';

export default function UserProfile() {
  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      <div className="container">
        <div className='row'>
          {/* Sidebar */}
          <div className="col-md-3">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div className="text-center mb-4">
                <Image
                  src="/Profil-removebg-preview 1.png"
                  alt="User Avatar"
                  width={80}
                  height={80}
                  className="rounded-circle"
                />
                <h5 style={{ color: '#00897B', fontWeight: 'bold' }}>Kelvin Marsellino</h5>
                <p style={{ color: '#8D8D8D', margin: '0' }}>Silver Member</p>
              </div>
              <ul
                style={{
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  color: '#4A4A4A',
                }}
              >
                <li
                  style={{
                    padding: '10px 0',
                    borderBottom: '1px solid #E0E0E0',
                    color: '#00897B',
                    fontWeight: 'bold',
                  }}
                >
                  <i className="bi bi-person" style={{ marginRight: '8px' }}></i>
                  Profil
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #E0E0E0' }}>
                  <i className="bi bi-graph-up" style={{ marginRight: '8px' }}></i>
                  Progres Belajar
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #E0E0E0' }}>
                  <i className="bi bi-patch-check" style={{ marginRight: '8px' }}></i>
                  Sertifikat dan Badges
                </li>
                <li style={{ padding: '10px 0' }}>
                  <i className="bi bi-folder-check" style={{ marginRight: '8px' }}></i>
                  Proyek yang Selesai
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <h5
                style={{
                  color: '#00897B',
                  fontWeight: 'bold',
                  borderBottom: '2px solid #00897B',
                  display: 'inline-block',
                  paddingBottom: '5px',
                }}
              >
                Profil
              </h5>
              <div className="row mt-4">
                <div className="col-md-3 text-center">
                  <Image
                    src="/Profil-removebg-preview 1.png"
                    alt="User Profile"
                    width={100}
                    height={100}
                    className="rounded-circle"
                  />
                  <button
                    className="btn btn-outline-success btn-sm mt-3"
                    style={{ borderRadius: '20px' }}
                  >
                    Edit Foto
                  </button>
                </div>
                <div className="col-md-9">
                  <div
                    style={{
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      padding: '15px',
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <strong style={{ color: '#4A4A4A' }}>Nama Lengkap:</strong>
                        <p style={{ color: '#00897B', margin: '0' }}>Kelvin Marsellino</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <strong style={{ color: '#4A4A4A' }}>Bio:</strong>
                        <p style={{ color: '#00897B', margin: '0' }}>Mahasiswa Penyuka Kompetisi</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <strong style={{ color: '#4A4A4A' }}>Email:</strong>
                        <p style={{ color: '#00897B', margin: '0' }}>Kelvin@gmail.com</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <strong style={{ color: '#4A4A4A' }}>Keterampilan:</strong>
                        <p style={{ color: '#00897B', margin: '0' }}>UI/UX Design</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-success btn-sm mt-3"
                    style={{ borderRadius: '20px' }}
                  >
                    Edit Profil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
