'use client';

import React, { useState } from 'react';

interface Task {
  id: number;
  description: string;
  checklist: { id: number; title: string; completed: boolean }[];
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      description: 'Deskripsi tugas untuk Hari Ke-1',
      checklist: [
        { id: 1, title: 'Checklist 1', completed: false },
        { id: 2, title: 'Checklist 2', completed: true },
      ],
    },
    {
      id: 2,
      description: 'Deskripsi tugas untuk Hari Ke-2',
      checklist: [
        { id: 1, title: 'Checklist A', completed: false },
        { id: 2, title: 'Checklist B', completed: false },
      ],
    },
    {
      id: 3,
      description: 'Deskripsi tugas untuk Hari Ke-3',
      checklist: [],
    },
  ]);

  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [newChecklistTitle, setNewChecklistTitle] = useState<string>('');

  const handleTaskClick = (taskId: number) => {
    setSelectedTaskId(taskId);
  };

  const handleAddChecklist = () => {
    if (selectedTaskId && newChecklistTitle.trim() !== '') {
      const updatedTasks = tasks.map((task) => {
        if (task.id === selectedTaskId) {
          return {
            ...task,
            checklist: [
              ...task.checklist,
              {
                id: Date.now(),
                title: newChecklistTitle,
                completed: false,
              },
            ],
          };
        }
        return task;
      });

      setTasks(updatedTasks);
      setNewChecklistTitle('');
    }
  };

  const handleToggleChecklist = (taskId: number, checklistId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          checklist: task.checklist.map((item) =>
            item.id === checklistId ? { ...item, completed: !item.completed } : item
          ),
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Frontend</h1>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  className="btn btn-success w-100 mb-3 text-white"
                  style={{ backgroundColor: '#00897B' }}
                  onClick={() => handleTaskClick(task.id)}
                >
                  Hari Ke-{task.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-8">
          {selectedTask ? (
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Hari Ke-{selectedTask.id}</h5>
                <p className="text-muted">{selectedTask.description}</p>

                <h6 className="fw-bold mt-4">Checklist</h6>
                <ul className="list-group mb-3">
                  {selectedTask.checklist.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          checked={item.completed}
                          onChange={() => handleToggleChecklist(selectedTask.id, item.id)}
                        />
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Add New Checklist */}
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tambahkan checklist baru..."
                    value={newChecklistTitle}
                    onChange={(e) => setNewChecklistTitle(e.target.value)}
                  />
                  <button
                    className="btn btn-dark"
                    style={{ backgroundColor: '#00897B' }}
                    onClick={handleAddChecklist}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="alert alert-info">Pilih hari untuk melihat detail tugas.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
