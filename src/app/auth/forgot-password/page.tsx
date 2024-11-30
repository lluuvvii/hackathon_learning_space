'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter a valid email address.')
      return
    }
    alert(`Password reset link sent to: ${email}`)
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center bg-light'>
      <div
        className='card border-0 p-4 my-5'
        style={{
          maxWidth: '420px',
          width: '100%',
          borderRadius: '12px',
          background: 'transparent',
        }}
      >
        <h1
          className='text-start mb-4 fw-bold'
          style={{ color: '#00897B' }}
        >
          Lupa Kata Sandi
        </h1>
        <p
          className='text-start text-muted mb-4'
          style={{ fontSize: '0.9rem' }}
        >
          Masukan alamat email anda dan kami akan mengirimkan link untuk mereset kata sandi anda
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput
            id='email'
            label='Alamat Email'
            type='email'
            placeholder='Masukan alamat email'
            icon='bi-envelope'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type='submit'
            className='btn w-100'
            style={{
              backgroundColor: '#00897B',
              color: '#fff',
              fontWeight: '600',
            }}
          >
            Kirim
          </button>
        </form>
        <div className='mt-4 text-center'>
          <Link
            href='/auth/login'
            className='text-decoration-none fw-bold'
            style={{ color: '#00897B' }}
          >
            Kembali ke halaman Masuk
          </Link>
        </div>
      </div>
    </div>
  )
}

const FormInput = ({
  id,
  label,
  type,
  placeholder,
  icon,
  required,
  onChange,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  icon: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className='mb-3'>
    <label htmlFor={id} className='form-label fw-semibold'>
      {label}
    </label>
    <div className='input-group'>
      <span className='input-group-text bg-light'>
        <i className={`bi ${icon}`}></i>
      </span>
      <input
        type={type}
        id={id}
        className='form-control'
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  </div>
)
