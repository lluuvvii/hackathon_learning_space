'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedin } from 'react-icons/fa'

interface AuthFormProps {
  title: string
  buttonText: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isRegister?: boolean
}

export default function AuthForm({
  title,
  buttonText,
  onSubmit,
  isRegister = false,
}: AuthFormProps) {
  const [formState, setFormState] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const toggleVisibility = (field: 'showPassword' | 'showConfirmPassword') => {
    setFormState((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handleSignUpValidation = (e: React.FormEvent<HTMLFormElement>) => {
    if (isRegister && formState.password !== formState.confirmPassword) {
      e.preventDefault()
      alert('Passwords do not match. Please try again.')
      return
    }
    onSubmit(e)
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
        <h1 className='text-start mb-4 fw-bold' style={{ color: '#00897B' }}>
          {title}
        </h1>
        <form onSubmit={handleSignUpValidation}>
          {isRegister && (
            <FormInput
              id='name'
              label='Nama Lengkap'
              type='text'
              placeholder='Masukan nama lengkap'
              icon='bi-person'
              required
              onChange={handleChange}
            />
          )}
          <FormInput
            id='email'
            label='Alamat Email'
            type='email'
            placeholder='Masukan alamat email'
            icon='bi-envelope'
            required
            onChange={handleChange}
          />
          <FormInput
            id='password'
            label='Kata sandi'
            type={formState.showPassword ? 'text' : 'password'}
            placeholder='Masukan kata sandi'
            icon='bi-lock'
            required
            onChange={handleChange}
            toggleVisibility={() => toggleVisibility('showPassword')}
            isPasswordVisible={formState.showPassword}
          />
          {isRegister && (
            <FormInput
              id='confirmPassword'
              label='Konfirmasi Kata Sandi'
              type={formState.showConfirmPassword ? 'text' : 'password'}
              placeholder='Konfirmasi kata sandi'
              icon='bi-lock'
              required
              onChange={handleChange}
              toggleVisibility={() => toggleVisibility('showConfirmPassword')}
              isPasswordVisible={formState.showConfirmPassword}
            />
          )}
          {!isRegister && (
            <div className='text-end my-3'>
              <Link href='/auth/forgot-password' className='text-decoration-none fw-bold' style={{ color: '#00897B' }}>
                Lupa kata sandi?
              </Link>
            </div>
          )}
          <button
            type='submit'
            className='btn w-100 fw-bold'
            style={{
              color: '#ffffff',
              backgroundColor: '#00897B',
            }}
          >
            {buttonText}
          </button>
        </form>
        <div className='my-3 text-center'>
          <p className='fw-semibold mb-2' style={{ color: '#6c757d' }}>
            {isRegister ?
              'Atau daftar dengan:'
              :
              'Atau masuk dengan:'
            }
          </p>
          <SocialButtons />
        </div>
        <AuthLinks isRegister={isRegister} />
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
  toggleVisibility,
  isPasswordVisible,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  icon: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleVisibility?: () => void
  isPasswordVisible?: boolean
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
        className='form-control border'
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      {toggleVisibility && (
        <span
          className='input-group-text bg-light'
          style={{ cursor: 'pointer' }}
          onClick={toggleVisibility}
        >
          <i className={`bi ${isPasswordVisible ? 'bi-eye-slash' : 'bi-eye'}`}></i>
        </span>
      )}
    </div>
  </div>
)

const SocialButtons = () => (
  <div className='d-flex justify-content-center gap-2'>
    {/* Google Button */}
    <button className="btn btn-outline-link d-flex align-items-center gap-2">
      <FcGoogle size={24} /> Google
    </button>

    {/* LinkedIn Button */}
    <button className="btn btn-outline-link d-flex align-items-center gap-2">
      <FaLinkedin size={24} color="#0077B5" /> LinkedIn
    </button>
  </div>
)

const AuthLinks = ({ isRegister }: { isRegister: boolean }) => (
  <div className='text-center mt-3'>
    {isRegister ? (
      <div>
        Sudah mempunyai akun?
        <Link href='/auth/login' className='text-decoration-none mx-1 fw-bold' style={{ color: '#00897B' }}>
          Masuk di sini
        </Link>
      </div>
    ) : (
      <div>
        Belum mempunyai akun?
        <Link href='/auth/register' className='text-decoration-none mx-1 fw-bold' style={{ color: '#00897B' }}>
          Daftar di sini
        </Link>
      </div>
    )}
  </div>
)
