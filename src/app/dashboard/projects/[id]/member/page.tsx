'use client';

import React, { useState } from 'react';
import MemberModal from './MemberModal';

interface Member {
  id: number;
  name: string;
  email: string;
  role: string;
}

const MemberPage = () => {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'luviluvi', email: 'luviluvi@gmail.com', role: 'Front End' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddMember = (name: string, email: string, role: string) => {
    const newMember: Member = {
      id: Date.now(),
      name,
      email,
      role,
    };
    setMembers([...members, newMember]);
  };

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>Debug Squad</h3>
              <button className="btn btn-dark" style={{ backgroundColor: '#00897B' }} onClick={() => setShowModal(true)}>
                Tambah Anggota
              </button>
            </div>
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="text-muted mb-4">
                  Undang anggota untuk bergabung dengan tim Anda
                </p>
                <ul className="list-group">
                  {members.map((member) => (
                    <li
                      key={member.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{member.name}</strong>
                        <p className="mb-0 text-muted">{member.email}</p>
                      </div>
                      <div>
                        <span className="badge bg-secondary me-3">{member.role}</span>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemoveMember(member.id)}
                        >
                          Hapus
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <MemberModal
            onClose={() => setShowModal(false)}
            onAdd={handleAddMember}
          />
        )}
      </div>
    </div>
  );
};

export default MemberPage;
