import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';

function page() {
  const reports = [
    {
      title: "UI/UX",
      icon: "bi-geo-alt-fill", // Ganti dengan ikon yang sesuai
      progress: 60,
      color: "#00897B",
    },
    {
      title: "Frontend",
      icon: "bi-code-slash", // Ganti dengan ikon yang sesuai
      progress: 80,
      color: "#00897B",
    },
    {
      title: "Backend",
      icon: "bi-laptop", // Ganti dengan ikon yang sesuai
      progress: 40,
      color: "#00897B",
    },
    {
      title: "Digital Marketing",
      icon: "bi-bullhorn", // Ganti dengan ikon yang sesuai
      progress: 75,
      color: "#00897B",
    },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      <Sidebar />
      <div style={{ flex: '1', backgroundColor: '#f8f9fa' }}>
        <Navbar />
        <div style={{ backgroundColor: '#eaf4f4', minHeight: '100vh', padding: '20px' }}>
          <div className="row">
            {reports.map((report, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100" style={{ borderColor: report.color }}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i
                        className={`bi ${report.icon}`}
                        style={{
                          color: report.color,
                          marginRight: "10px",
                          fontSize: "24px",
                        }}
                      ></i>
                      <h5>{report.title}</h5>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${report.progress}%`, backgroundColor: report.color }}
                        aria-valuenow={report.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <p>Progress: {report.progress}%</p>
                    <button className="btn w-100" style={{ backgroundColor: '#00897B', color: 'white' }}>Lengkapi Laporan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page