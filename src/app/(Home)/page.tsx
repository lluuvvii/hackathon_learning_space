"use client";

import { useState } from "react";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-primary text-white p-3 position-fixed vh-100 ${sidebarOpen ? "d-block" : "d-none"
          }`}
        style={{ width: "250px", zIndex: 1050 }}
      >
        <h4>Sidebar</h4>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Menu 1</a></li>
          <li><a href="#" className="text-white text-decoration-none">Menu 2</a></li>
          <li><a href="#" className="text-white text-decoration-none">Menu 3</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`flex-grow-1 ${sidebarOpen ? "ms-250" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="btn btn-outline-primary"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            <span className="navbar-brand">Home</span>
          </div>
        </nav>

        <main className="container py-4">
          <h1>Welcome to Home Page</h1>
          <p>This is a template using Next.js, TypeScript, and Bootstrap 5.</p>
        </main>
      </div>
    </div>
  );
}