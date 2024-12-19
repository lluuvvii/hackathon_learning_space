'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function UserProfile() {
  // State untuk menyimpan data profil
  const [profile, setProfile] = useState({
    name: 'luviluvi',
    bio: 'Never give up',
    email: 'luviluvi@gmail.com',
    skills: 'Frontend Developer',
  });

  // State untuk mengelola mode edit
  const [isEditing, setIsEditing] = useState(false);

  // State untuk mengelola input sementara
  const [tempProfile, setTempProfile] = useState(profile);

  // Handler untuk menyimpan perubahan
  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  // Handler untuk membatalkan perubahan
  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  // Handler untuk menangani input perubahan
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      <div className="container">
        <div className="row">
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
                <h5 style={{ color: '#00897B', fontWeight: 'bold' }}>{profile.name}</h5>
                <p style={{ color: '#8D8D8D', margin: '0' }}>{profile.bio}</p>
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
                  <Link href='/dashboard/projects' className='text-decoration-none' style={{ color: '#00897B' }}>
                    <i className="bi bi-graph-up" style={{ marginRight: '8px' }}></i>
                    Progres Belajar
                  </Link>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #E0E0E0' }}>
                  <Link href='/dashboard/certificates' className='text-decoration-none' style={{ color: '#00897B' }}>
                    <i className="bi bi-patch-check" style={{ marginRight: '8px' }}></i>
                    Sertifikat dan Badges
                  </Link>
                </li>
                <li style={{ padding: '10px 0' }}>
                  <Link href='/dashboard/projects' className='text-decoration-none' style={{ color: '#00897B' }}>
                    <i className="bi bi-folder-check" style={{ marginRight: '8px' }}></i>
                    Proyek yang Selesai
                  </Link>
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
                    {isEditing ? (
                      <>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label><strong>Nama Lengkap:</strong></label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={tempProfile.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label><strong>Bio:</strong></label>
                            <textarea
                              className="form-control"
                              name="bio"
                              value={tempProfile.bio}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label><strong>Email:</strong></label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={tempProfile.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label><strong>Keterampilan:</strong></label>
                            <input
                              type="text"
                              className="form-control"
                              name="skills"
                              value={tempProfile.skills}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <button className="btn btn-success me-2" onClick={handleSave}>
                          Simpan
                        </button>
                        <button className="btn btn-secondary" onClick={handleCancel}>
                          Batal
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <strong style={{ color: '#4A4A4A' }}>Nama Lengkap:</strong>
                            <p style={{ color: '#00897B', margin: '0' }}>{profile.name}</p>
                          </div>
                          <div className="col-md-6 mb-3">
                            <strong style={{ color: '#4A4A4A' }}>Bio:</strong>
                            <p style={{ color: '#00897B', margin: '0' }}>{profile.bio}</p>
                          </div>
                          <div className="col-md-6 mb-3">
                            <strong style={{ color: '#4A4A4A' }}>Email:</strong>
                            <p style={{ color: '#00897B', margin: '0' }}>{profile.email}</p>
                          </div>
                          <div className="col-md-6 mb-3">
                            <strong style={{ color: '#4A4A4A' }}>Keterampilan:</strong>
                            <p style={{ color: '#00897B', margin: '0' }}>{profile.skills}</p>
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-success btn-sm mt-3"
                          style={{ borderRadius: '20px' }}
                          onClick={() => setIsEditing(true)}
                        >
                          Edit Profil
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
