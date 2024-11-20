"use client";

import React, { useState } from "react";

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSignUp?: boolean;
}

export default function AuthForm({
  title,
  buttonText,
  onSubmit,
  isSignUp = false,
}: AuthFormProps) {
  const [formState, setFormState] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const toggleVisibility = (field: "showPassword" | "showConfirmPassword") => {
    setFormState((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSignUpValidation = (e: React.FormEvent<HTMLFormElement>) => {
    if (isSignUp && formState.password !== formState.confirmPassword) {
      e.preventDefault();
      alert("Passwords do not match. Please try again.");
      return;
    }
    onSubmit(e);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-light">
      <div
        className="card border-0 p-4 my-5"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "12px",
          background: "transparent",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#0d6efd", fontWeight: "600" }}>
          {title}
        </h2>
        <form onSubmit={handleSignUpValidation}>
          {isSignUp && (
            <FormInput
              id="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              icon="bi-person"
              required
              onChange={handleChange}
            />
          )}
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon="bi-envelope"
            required
            onChange={handleChange}
          />
          <FormInput
            id="password"
            label="Password"
            type={formState.showPassword ? "text" : "password"}
            placeholder="Enter your password"
            icon="bi-lock"
            required
            onChange={handleChange}
            toggleVisibility={() => toggleVisibility("showPassword")}
            isPasswordVisible={formState.showPassword}
          />
          {isSignUp && (
            <FormInput
              id="confirmPassword"
              label="Confirm Password"
              type={formState.showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              icon="bi-lock"
              required
              onChange={handleChange}
              toggleVisibility={() => toggleVisibility("showConfirmPassword")}
              isPasswordVisible={formState.showConfirmPassword}
            />
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {buttonText}
          </button>
        </form>
        <div className="my-3 text-center">
          <p className="fw-semibold mb-2" style={{ color: "#6c757d" }}>
            Or sign in with:
          </p>
          <SocialButtons />
        </div>
        <AuthLinks isSignUp={isSignUp} />
      </div>
    </div>
  );
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
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVisibility?: () => void;
  isPasswordVisible?: boolean;
}) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label fw-semibold">
      {label}
    </label>
    <div className="input-group">
      <span className="input-group-text bg-light">
        <i className={`bi ${icon}`}></i>
      </span>
      <input
        type={type}
        id={id}
        className="form-control border"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      {toggleVisibility && (
        <span
          className="input-group-text bg-light"
          style={{ cursor: "pointer" }}
          onClick={toggleVisibility}
        >
          <i className={`bi ${isPasswordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
        </span>
      )}
    </div>
  </div>
);

const SocialButtons = () => (
  <div className="d-flex justify-content-center gap-2">
    <button
      className="btn btn-outline-primary d-flex align-items-center gap-2"
      style={{ borderColor: "#0d6efd" }}
    >
      <i className="bi bi-google"></i> Google
    </button>
    <button
      className="btn btn-outline-success d-flex align-items-center gap-2"
      style={{ borderColor: "#198754" }}
    >
      <i className="bi bi-linkedin"></i> LinkedIn
    </button>
  </div>
);

const AuthLinks = ({ isSignUp }: { isSignUp: boolean }) => (
  <div className="text-center mt-3">
    {isSignUp ? (
      <a href="/auth/sign-in" className="text-decoration-none" style={{ color: "#0d6efd" }}>
        Already have an account? Sign In
      </a>
    ) : (
      <>
        <a href="/auth/sign-up" className="text-decoration-none" style={{ color: "#0d6efd" }}>
          Don't have an account? Sign Up
        </a>
        <br />
        <a href="/auth/forgot-password" className="text-decoration-none" style={{ color: "#0d6efd" }}>
          Forgot Password?
        </a>
      </>
    )}
  </div>
);
