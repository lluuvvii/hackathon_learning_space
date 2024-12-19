"use client";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import Sidebar from '../../components/Sidebar';

interface Task {
  date: string;
  description: string;
}

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<any>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCurrentMonth((prev) => new Date(prev.setMonth(prev.getMonth() - 1)))}
        >
          &lt; Bulan Sebelumnya
        </button>
        <h4 className="fw-bold mb-0">{format(currentMonth, 'MMMM yyyy')}</h4>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCurrentMonth((prev) => new Date(prev.setMonth(prev.getMonth() + 1)))}
        >
          Bulan Berikutnya &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return (
      <div className="row text-center fw-bold">
        {days.map((day) => (
          <div className="col" key={day}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'yyyy-MM-dd');
        const cloneDay = day;
        days.push(
          <div
            className={`col p-2 border ${!isSameMonth(day, monthStart) ? 'bg-light' : ''
              } ${isSameDay(day, selectedDate) ? 'bg-success text-white' : ''}`}
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
            style={{ cursor: 'pointer' }}
          >
            <span>{format(day, 'd')}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const handleAddTask = () => {
    if (selectedDate && newTask.trim() !== '') {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      setTasks((prev) => [...prev, { date: formattedDate, description: newTask }]);
      setNewTask('');
    }
  };

  const renderTasks = () => {
    if (!selectedDate) return <p>Pilih tanggal untuk melihat atau menambahkan tugas.</p>;

    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const dailyTasks = tasks.filter((task) => task.date === formattedDate);

    return (
      <div>
        <h5>Tugas untuk {format(selectedDate, 'dd MMMM yyyy')}</h5>
        <ul className="list-group mb-3">
          {dailyTasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task.description}
            </li>
          ))}
        </ul>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tambahkan tugas baru..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleAddTask}>
            Tambah
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '75px' }}>
      <Sidebar />
      <div className="container py-4">
        <h3 className="text-center mb-4 fw-bold" style={{ color: '#00897B' }}>Kalender Proyek</h3>
        {renderHeader()}
        {renderDays()}
        {renderCells()}

        <div className="mt-4">
          {renderTasks()}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
