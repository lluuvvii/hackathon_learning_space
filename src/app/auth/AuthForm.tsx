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
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">{title}</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          {isSignUp && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {buttonText}
          </button>
        </form>
        <div className="my-3 text-center">
          <p className="mb-2">Or sign in with:</p>
          <button className="btn btn-danger w-100 mb-2">Google</button>
          <button className="btn btn-info w-100 mb-2">LinkedIn</button>
        </div>
        <div className="text-center">
          {!isSignUp ? (
            <>
              <a href="/auth/sign-up" className="text-decoration-none">
                Don't have an account? Sign Up
              </a>
              <br />
              <a href="/auth/forgot-password" className="text-decoration-none">
                Forgot Password?
              </a>
            </>
          ) : (
            <a href="/auth/sign-in" className="text-decoration-none">
              Already have an account? Sign In
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
