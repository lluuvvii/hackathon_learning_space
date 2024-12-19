'use client';

import { useState } from 'react';
import Link from 'next/link';

type Topic = {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
};

export default function Forum() {
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: 1,
      title: 'Bagaimana cara menggunakan React Hooks?',
      description: 'Saya ingin memahami lebih dalam tentang React Hooks.',
      author: 'Kelvin',
      createdAt: '2024-12-19',
    },
    {
      id: 2,
      title: 'Apa perbedaan antara Props dan State?',
      description: 'Mohon penjelasannya secara detail.',
      author: 'Marsellino',
      createdAt: '2024-12-18',
    },
  ]);

  const [newTopic, setNewTopic] = useState({ title: '', description: '', author: '' });

  const handleCreateTopic = () => {
    if (newTopic.title && newTopic.description && newTopic.author) {
      const newId = topics.length + 1;
      setTopics([
        ...topics,
        {
          id: newId,
          title: newTopic.title,
          description: newTopic.description,
          author: newTopic.author,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ]);
      setNewTopic({ title: '', description: '', author: '' });
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginTop: '100px' }}>
      <div className="container mt-5">
        {/* Formulir Buat Pertanyaan */}
        <div className="card mb-4">
          <div className="card-header text-white" style={{ backgroundColor: '#00897B' }}>Buat Pertanyaan Baru</div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Judul</label>
              <input
                type="text"
                className="form-control"
                value={newTopic.title}
                onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                placeholder="Masukkan judul pertanyaan"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Deskripsi</label>
              <textarea
                className="form-control"
                rows={3}
                value={newTopic.description}
                onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
                placeholder="Masukkan deskripsi pertanyaan"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Nama Anda</label>
              <input
                type="text"
                className="form-control"
                value={newTopic.author}
                onChange={(e) => setNewTopic({ ...newTopic, author: e.target.value })}
                placeholder="Masukkan nama Anda"
              />
            </div>
            <button className="btn btn-dark" style={{ backgroundColor: '#00897B' }} onClick={handleCreateTopic}>
              Buat Pertanyaan
            </button>
          </div>
        </div>

        {/* Daftar Topik */}
        <h3 className="mb-3 fw-bold" style={{ color: '#00897B' }}>Topik Diskusi</h3>
        {topics.map((topic) => (
          <div className="card mb-3" key={topic.id}>
            <div className="card-body">
              <h5 className="card-title text-success">{topic.title}</h5>
              <p className="card-text">{topic.description}</p>
              <p className="card-text">
                <small className="text-muted">Oleh {topic.author} pada {topic.createdAt}</small>
              </p>
              <Link href={`/forum/${topic.id}`} className="btn btn-outline-success btn-sm">
                Lihat Diskusi
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
