import React from "react";

const ProjectsPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header
        className="bg-teal"
        style={{
          backgroundColor: "#00897B",
          padding: "10px 20px",
          color: "white",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h1 style={{ margin: 0 }}>Hackathon Learning Space</h1>
          <nav>
            <a
              href="/"
              style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
            >
              Beranda
            </a>
            <a
              href="/dashboard"
              style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
            >
              Dashboard
            </a>
            <a
              href="/projects"
              style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
            >
              Proyek
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mt-4">
        {/* Project Cards */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{
                border: "1px solid #00897B",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{ color: "#00897B", fontWeight: "bold" }}
                >
                  UI Design: VisioFlow
                </h5>
                <p className="card-text">
                  Desain antarmuka modern yang intuitif untuk meningkatkan
                  pengalaman pengguna.
                </p>
                <button
                  className="btn text-light"
                  style={{
                    backgroundColor: "#00897B",
                    borderRadius: "5px",
                  }}
                >
                  Mulai
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{
                border: "1px solid #00897B",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{ color: "#00897B", fontWeight: "bold" }}
                >
                  Backend: Corelink
                </h5>
                <p className="card-text">
                  Sistem backend scalable dengan keamanan tinggi untuk
                  mendukung aplikasi modern.
                </p>
                <button
                  className="btn text-light"
                  style={{
                    backgroundColor: "#00897B",
                    borderRadius: "5px",
                  }}
                >
                  Mulai
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{
                border: "1px solid #00897B",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{ color: "#00897B", fontWeight: "bold" }}
                >
                  Frontend: Nextview
                </h5>
                <p className="card-text">
                  Antarmuka responsif dengan teknologi terkini untuk pengalaman
                  pengguna yang dinamis.
                </p>
                <button
                  className="btn text-light"
                  style={{
                    backgroundColor: "#00897B",
                    borderRadius: "5px",
                  }}
                >
                  Mulai
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose Section */}
        <section className="mb-5">
          <h3 className="text-dark" style={{ fontWeight: "bold" }}>Tujuan</h3>
          <p className="text-dark" style={{ lineHeight: "1.8" }}>
            Proyek ini dirancang untuk membantu mahasiswa mempelajari dan
            mengembangkan keterampilan praktis dalam bidang teknologi, termasuk
            desain antarmuka pengguna (UI), pengembangan backend yang efisien
            dan aman, implementasi frontend yang responsif, serta strategi
            digital marketing berbasis data.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-5">
          <h3 className="text-dark" style={{ fontWeight: "bold" }}>
            Keterampilan yang Dibutuhkan
          </h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="text-dark" style={{ fontWeight: "bold" }}>1. Desain Antarmuka Pengguna</h5>
              <ul className="text-dark">
                <li>Membuat sketsa sederhana atau wireframe.</li>
                <li>Menggunakan alat desain seperti Figma atau Canva.</li>
                <li>Memahami dasar kombinasi warna dan tata letak.</li>
              </ul>
              <button
                className="btn text-light"
                style={{
                  backgroundColor: "#00897B",
                  borderRadius: "5px",
                }}
              >
                Pilih Proyek
              </button>
            </div>

            <div className="col-md-6 mb-4">
              <h5 className="text-dark" style={{ fontWeight: "bold" }}>2. Pengembangan Backend</h5>
              <ul className="text-dark">
                <li>Dasar bahasa pemrograman seperti Python atau PHP.</li>
                <li>Pengetahuan dasar tentang database (MySQL atau MongoDB).</li>
                <li>Memahami cara kerja API sederhana.</li>
              </ul>
              <button
                className="btn text-light"
                style={{
                  backgroundColor: "#00897B",
                  borderRadius: "5px",
                }}
              >
                Pilih Proyek
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#006d5b",
          color: "#ffffff",
          padding: "20px",
          marginTop: "auto",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ flex: "1", textAlign: "left" }}>
            <h3>Hackathon Learning Space</h3>
            <p>Jl. Tentara pelajar 50, Surabaya, Jawa Timur, Indonesia</p>
          </div>
          <div style={{ flex: "1", textAlign: "right" }}>
            <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", gap: "10px" }}>
              {["Pusat Bantuan", "FAQ", "Tentang Kami"].map((item, index) => (
                <li key={index} style={{ display: "inline" }}>
                  <a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              {["instagram", "tiktok", "facebook", "linkedin", "email", "youtube"].map((platform, index) => (
                <i key={index} className={`bi bi-${platform}`} style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;
