'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

type Answer = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
};

export default function TopicDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [answers, setAnswers] = useState<Answer[]>([
    {
      id: 1,
      author: 'John Doe',
      content: 'React Hooks memungkinkan kita menggunakan state dan lifecycle dalam komponen fungsi.',
      createdAt: '2024-12-19',
    },
  ]);

  const [newAnswer, setNewAnswer] = useState({ author: '', content: '' });

  const handleAddAnswer = () => {
    if (newAnswer.author && newAnswer.content) {
      const newId = answers.length + 1;
      setAnswers([
        ...answers,
        {
          id: newId,
          author: newAnswer.author,
          content: newAnswer.content,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ]);
      setNewAnswer({ author: '', content: '' });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-success">Detail Diskusi</h1>

      {/* Informasi Topik */}
      <div className="card mb-4">
        <div className="card-header text-white bg-success">Topik Diskusi #{id}</div>
        <div className="card-body">
          <h5 className="card-title">Bagaimana cara menggunakan React Hooks?</h5>
          <p className="card-text">Saya ingin memahami lebih dalam tentang React Hooks.</p>
          <p className="card-text">
            <small className="text-muted">Oleh Kelvin pada 2024-12-19</small>
          </p>
        </div>
      </div>

      {/* Daftar Jawaban */}
      <h2 className="mb-3">Jawaban</h2>
      {answers.map((answer) => (
        <div className="card mb-3" key={answer.id}>
          <div className="card-body">
            <p className="card-text">{answer.content}</p>
            <p className="card-text">
              <small className="text-muted">Oleh {answer.author} pada {answer.createdAt}</small>
            </p>
          </div>
        </div>
      ))}

      {/* Formulir Tambah Jawaban */}
      <div className="card mt-4">
        <div className="card-header text-white bg-success">Tambahkan Jawaban</div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Nama Anda</label>
            <input
              type="text"
              className="form-control"
              value={newAnswer.author}
              onChange={(e) => setNewAnswer({ ...newAnswer, author: e.target.value })}
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Jawaban</label>
            <textarea
              className="form-control"
              rows={3}
              value={newAnswer.content}
              onChange={(e) => setNewAnswer({ ...newAnswer, content: e.target.value })}
              placeholder="Masukkan jawaban Anda"
            ></textarea>
          </div>
          <button className="btn btn-success" onClick={handleAddAnswer}>
            Tambahkan Jawaban
          </button>
        </div>
      </div>
    </div>
  );
}
