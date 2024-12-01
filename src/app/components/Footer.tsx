'use client'

import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: '#00897B' }}>
      <div className="container">
        <div className="row">
          {/* Kolom 1: Informasi Brand */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="fw-bold mb-3">Hackathon Learning Space</h4>
            <p>
              Jl. Tentara Pelajar 50, Surabaya, Jawa Timur, Indonesia
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="col-md-4 mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/help" className="text-white text-decoration-none">
                  Pusat Bantuan
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="text-white text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-decoration-none">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div className="col-md-4">
            <div className="d-flex gap-3 flex-wrap">
              <Link href="https://instagram.com" className="text-white fs-4">
                <FaInstagram />
              </Link>
              <Link href="https://tiktok.com" className="text-white fs-4">
                <FaTiktok />
              </Link>
              <Link href="https://facebook.com" className="text-white fs-4">
                <FaFacebookF />
              </Link>
              <Link href="https://linkedin.com" className="text-white fs-4">
                <FaLinkedin />
              </Link>
              <Link href="mailto:info@hackathon.com" className="text-white fs-4">
                <FaEnvelope />
              </Link>
              <Link href="https://youtube.com" className="text-white fs-4">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
