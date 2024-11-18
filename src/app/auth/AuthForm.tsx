"use client";

import React from "react";

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
  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-light">
      <div
        className="card shadow border-0 p-4 my-5"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "12px",
          background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#0d6efd", fontWeight: "600" }}>
          {title}
        </h2>
        <form onSubmit={onSubmit}>
          {isSignUp && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Full Name
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#0d6efd",
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
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              style={{ borderColor: "#0d6efd", color: "#0d6efd" }}
            >
              <i className="bi bi-google"></i> Google
            </button>
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              style={{ borderColor: "#198754", color: "#198754" }}
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </button>
          </div>
        </div>

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
              <a
                href="/auth/forgot-password"
                className="text-decoration-none"
                style={{ color: "#0d6efd" }}
              >
                Forgot Password?
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}