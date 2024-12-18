'use client';

import React, { useState, DragEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FileUploadState {
  file: File | null;
  error: string | null;
}

export default function ProjectDetail() {
  const router = useRouter()
  const [uploadState, setUploadState] = useState<FileUploadState>({
    file: null,
    error: null,
  });

  const accordionData = [
    {
      id: 'One',
      title: '1. Penelitian dan Analisis',
      content: (
        <>
          <p>
            <strong>Pengguna:</strong> Identifikasi kebutuhan dan perilaku pengguna target. Contoh: pelajar,
            profesional, atau pengguna umum.
          </p>
          <p>
            <strong>Kompetitor:</strong> Analisis UI dari kompetitor untuk memahami tren pasar dan kelebihan
            yang bisa diterapkan.
          </p>
        </>
      ),
    },
    {
      id: 'Two',
      title: '2. Desain Visual',
      content: (
        <ul>
          <li>Pembuatan wireframe awal untuk mendefinisikan tata letak halaman.</li>
          <li>Pengembangan mockup visual dengan fokus pada warna, tipografi, dan ikonografi.</li>
          <li>Pembuatan prototype interaktif untuk menggambarkan alur pengguna (user flow).</li>
        </ul>
      ),
    },
    {
      id: 'Three',
      title: '3. Prinsip Desain yang Digunakan',
      content: (
        <ul>
          <li>Kesesederhanaan: Meminimalkan elemen yang tidak fokus pada inti fungsi.</li>
          <li>Konsistensi: Penggunaan warna, font, dan ikon yang seragam.</li>
          <li>Responsivitas: Berfungsi baik di desktop, tablet, dan smartphone.</li>
          <li>Aksesibilitas: Memastikan elemen UI dapat diakses oleh kebutuhan khusus.</li>
        </ul>
      ),
    },
    {
      id: 'Four',
      title: '4. Fitur Utama yang Didesain',
      content: (
        <ul>
          <li>Header Navigasi</li>
          <li>Dashboard</li>
          <li>Formulir Interaktif</li>
          <li>Komponen Visual</li>
        </ul>
      ),
    },
    {
      id: 'Five',
      title: '5. Testing dan Validasi',
      content: (
        <ul>
          <li>Melakukan uji coba prototype dengan pengguna untuk mendapatkan umpan balik.</li>
          <li>Melakukan iterasi berdasarkan hasil pengujian.</li>
        </ul>
      ),
    },
  ];

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const uploadedFile = files[0];
      if (uploadedFile.type.startsWith('application/')) {
        setUploadState({ file: uploadedFile, error: null });
      } else {
        setUploadState({ file: null, error: 'File yang diunggah harus berupa dokumen!' });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadState.file) {
      alert(`File "${uploadState.file.name}" berhasil diunggah!`);
    } else {
      alert('Harap unggah file proyek terlebih dahulu!');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginTop: '100px' }}>
      {/* Detail Proyek */}
      <div className="container mb-4">
        <h3 className="fw-bold text-center" style={{ color: '#00897B' }}>Detail Proyek</h3>

        {/* Accordion Bootstrap */}
        <div
          className="accordion mt-4"
          id="projectAccordion"
          style={{ border: '2px solid #00897B', borderRadius: '10px', overflow: 'hidden' }}
        >
          {accordionData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button
                  className={`accordion-button fw-bold ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${item.id}`}
                  style={{ color: '#00897B' }}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${item.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#projectAccordion"
              >
                <div className="accordion-body">{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Drag and Drop Upload */}
        <div
          className="upload-section mt-4 p-4 text-center"
          style={{
            border: '2px dashed #00897B',
            borderRadius: '10px',
            backgroundColor: '#F9F9F9',
            color: '#00897B',
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className="fw-bold mb-3">Seret dan jatuhkan file Anda di sini</p>
          <p className="small">Atau klik tombol di bawah untuk memilih file</p>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              id="fileInput"
              className="form-control mb-3"
              style={{ display: 'inline-block', maxWidth: '300px' }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && file.type.startsWith('application/')) {
                  setUploadState({ file, error: null });
                } else {
                  setUploadState({ file: null, error: 'File yang diunggah harus berupa dokumen!' });
                }
              }}
            />
            {uploadState.file && (
              <p className="text-success">
                File dipilih: <strong>{uploadState.file.name}</strong>
              </p>
            )}
            {uploadState.error && (
              <p className="text-danger">
                <strong>{uploadState.error}</strong>
              </p>
            )}
            <button
              type="submit"
              className="btn mx-3"
              style={{ backgroundColor: '#00897B', color: '#FFFFFF' }}
            >
              Unggah File
            </button>
          </form>
        </div>

        {/* Tombol Submit dan Kembali */}
        <div className="text-center mt-4 d-flex justify-content-start gap-3">
          <button className="btn btn-light px-4 py-2" style={{ border: '1px solid gray' }} onClick={() => router.back()}>
            Kembali
          </button>
          <button className="btn btn-dark px-4 py-2" style={{ backgroundColor: '#00897B' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}
