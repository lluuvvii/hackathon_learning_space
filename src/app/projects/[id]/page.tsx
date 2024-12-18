'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectDetail() {
  const router = useRouter()

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginTop: '100px' }}>
      {/* Detail Proyek */}
      <div className="container mb-4">
        <h3 className="fw-bold text-center" style={{ color: '#00897B' }}>Detail Proyek</h3>

        {/* Accordion Bootstrap */}
        <div className="accordion mt-4" id="projectAccordion" style={{ border: '2px solid #00897B', borderRadius: '10px', overflow: 'hidden' }}>
          {/* Penelitian dan Analisis */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ color: '#00897B' }}
              >
                1. Penelitian dan Analisis
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#projectAccordion"
            >
              <div className="accordion-body">
                <p>
                  <strong>Pengguna:</strong> Identifikasi kebutuhan dan perilaku pengguna target. Contoh: pelajar,
                  profesional, atau pengguna umum.
                </p>
                <p>
                  <strong>Kompetitor:</strong> Analisis UI dari kompetitor untuk memahami tren pasar dan kelebihan
                  yang bisa diterapkan.
                </p>
              </div>
            </div>
          </div>

          {/* Desain Visual */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ color: '#00897B' }}
              >
                2. Desain Visual
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#projectAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>Pembuatan wireframe awal untuk mendefinisikan tata letak halaman.</li>
                  <li>Pengembangan mockup visual dengan fokus pada warna, tipografi, dan ikonografi.</li>
                  <li>Pembuatan prototype interaktif untuk menggambarkan alur pengguna (user flow).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prinsip Desain */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ color: '#00897B' }}
              >
                3. Prinsip Desain yang Digunakan
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#projectAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>Kesesederhanaan: Meminimalkan elemen yang tidak fokus pada inti fungsi.</li>
                  <li>Konsistensi: Penggunaan warna, font, dan ikon yang seragam.</li>
                  <li>Responsivitas: Berfungsi baik di desktop, tablet, dan smartphone.</li>
                  <li>Aksesibilitas: Memastikan elemen UI dapat diakses oleh kebutuhan khusus.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fitur Utama */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{ color: '#00897B' }}
              >
                4. Fitur Utama yang Didesain
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#projectAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>Header Navigasi</li>
                  <li>Dashboard</li>
                  <li>Formulir Interaktif</li>
                  <li>Komponen Visual</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing dan Validasi */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                style={{ color: '#00897B' }}
              >
                5. Testing dan Validasi
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#projectAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>Melakukan uji coba prototype dengan pengguna untuk mendapatkan umpan balik.</li>
                  <li>Melakukan iterasi berdasarkan hasil pengujian.</li>
                </ul>
              </div>
            </div>
          </div>
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
