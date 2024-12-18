'use client';

import React, { useState } from 'react';
import MemberModal from './MemberModal';
import Sidebar from '../../components/Sidebar';

interface Member {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
}

const MemberPage = () => {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'luviluvi', email: 'luviluvi@gmail.com', role: 'Front End' },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'luviluvi',
      content: 'Halo tim, apa kabar semua?',
      time: '10:00 AM',
    },
  ]);
  const [showChatModal, setShowChatModal] = useState(false);
  const [newMessage, setNewMessage] = useState('');
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

  const handleCopyLink = () => {
    const inviteLink = `${window.location.origin}/invite-link`;
    navigator.clipboard.writeText(inviteLink);
    alert('Tautan undangan berhasil disalin!');
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      sender: 'luviluvi', // Default sender, bisa diubah sesuai user login
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      <Sidebar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className='fw-bold' style={{ color: '#00897B' }}>Nextview</h3>
              <button className="btn btn-dark" style={{ backgroundColor: '#00897B' }} onClick={() => setShowModal(true)}>
                Tambah Anggota
              </button>
            </div>

            {/* Keterangan dan Tombol Salin Link */}
            <div className="gap-3 mb-4">
              <p>
                <strong>Undang anggota untuk bergabung Kelompok Anda</strong> <br />
                Siapa pun yang memiliki tautan undangan dapat bergabung.
              </p>
              <button className="btn btn-outline-secondary" style={{ marginRight: 10 }} onClick={handleCopyLink}>
                Salin Link
              </button>
              <button className="btn btn-dark" style={{ backgroundColor: '#00897B' }} onClick={() => setShowChatModal(true)}>
                Chat Diskusi
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

        {/* Modal Chat Diskusi */}
        {showChatModal && (
          <div className="modal d-block" tabIndex={-1}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div className="modal-header">
                  <h5 className="modal-title">Chat Diskusi</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowChatModal(false)}
                  ></button>
                </div>

                {/* Body dengan Scrollable Chat */}
                <div className="modal-body" style={{ flex: '1', overflowY: 'auto' }}>
                  <ul className="list-group mb-3">
                    {messages.map((message) => (
                      <li key={message.id} className="list-group-item">
                        <strong>{message.sender}</strong>{' '}
                        <span className="text-muted">({message.time})</span>
                        <p className="mb-0">{message.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer tetap di bawah */}
                <div className="modal-footer" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #ddd' }}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ketik pesan..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                      className="btn btn-dark"
                      style={{ backgroundColor: '#00897B' }}
                      onClick={handleSendMessage}
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberPage;
