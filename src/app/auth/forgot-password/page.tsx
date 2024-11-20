"use client";

import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Password reset link sent to: ${email}`);
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
        <h2
          className="text-center mb-4"
          style={{ color: "#0d6efd", fontWeight: "600" }}
        >
          Forgot Password
        </h2>
        <p
          className="text-center text-muted mb-4"
          style={{ fontSize: "0.9rem" }}
        >
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon="bi-envelope"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#0d6efd",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/auth/sign-in"
            className="text-decoration-none"
            style={{ color: "#0d6efd" }}
          >
            Back to Sign In
          </a>
        </div>
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
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  </div>
);