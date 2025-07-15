import React from 'react';

export default function ScheduleCard({ schedule, onEdit, onDelete }) {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold text-blue-700">{schedule.title}</h2>
      <p>👤 {schedule.trainer}</p>
      <p>📘 {schedule.course}</p>
      <p>📆 {schedule.days.join(', ')}</p>
      <p>⏰ {schedule.time}</p>
      <p>🏠 Room: {schedule.room}</p>

      <div className="mt-2 flex gap-2">
        <button onClick={() => onEdit(schedule)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(schedule._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}
