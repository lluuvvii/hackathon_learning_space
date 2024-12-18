"use client"

import React from "react";
import Head from "next/head";

const BuatRuang = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "100vh",
          backgroundColor: "#F7F7F7",
          padding: "20px",
        }}
      >
        <div
          className="card"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "15px",
            padding: "30px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ color: "#00897B", margin: "0", fontSize: "1.5rem" }}>
              Buat Ruang Diskusi
            </h2>
            <button
              className="btn"
              style={{
                fontSize: "1.2rem",
                color: "#000",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => window.history.back()}
            >
              ✕
            </button>
          </div>
          <p style={{ color: "#555", fontSize: "1rem", marginBottom: "20px" }}>
            Buatlah ruang diskusi berdasarkan topik
          </p>
          <form>
            {/* Nama Topik */}
            <div className="mb-4">
              <label
                htmlFor="namaTopik"
                style={{ display: "block", fontWeight: "bold", color: "#00897B" }}
              >
                Nama Topik
              </label>
              <input
                type="text"
                id="namaTopik"
                className="form-control"
                style={{
                  border: "2px solid #00897B",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                placeholder="Masukkan nama topik"
              />
            </div>
            {/* Deskripsi Singkat */}
            <div className="mb-4">
              <label
                htmlFor="deskripsiSingkat"
                style={{ display: "block", fontWeight: "bold", color: "#00897B" }}
              >
                Deskripsi Singkat
              </label>
              <textarea
                id="deskripsiSingkat"
                className="form-control"
                style={{
                  border: "2px solid #00897B",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                placeholder="Deskripsi mengenai apa saja yang dibahas dalam ruang diskusi ini"
                rows={4}
              ></textarea>
            </div>
            {/* Tombol Buat */}
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  borderRadius: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#00897B",
                  border: "none",
                }}
              >
                Buat
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuatRuang;
