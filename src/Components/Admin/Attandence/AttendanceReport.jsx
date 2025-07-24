'use client';

import React from 'react';

export default function AttendanceReport() {
  const attendanceData = [
    {
      date: '19/7/2025',
      inLocation:
        'White House, Cluster_mumbai Suburban_381, 3, SG Barve Marg, Netaji Nagar, Kurla West, Kurla, Mumbai, Maharashtra 400070, India',
      inTime: '10:02 am',
      outLocation:
        'White House, Cluster_mumbai Suburban_381, 3, SG Barve Marg, Netaji Nagar, Kurla West, Kurla, Mumbai, Maharashtra 400070, India',
      outTime: '06:23 pm',
      remark: 'Present',
    },
    { date: '18/7/2025', remark: 'Absent' },
    { date: '17/7/2025', remark: 'Absent' },
    { date: '16/7/2025', remark: 'Absent' },
  ];

  const handleExport = () => {
    // Dummy export function (can integrate CSV/Excel later)
    alert('Exporting attendance data...');
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex justify-between mb-4">
        <input
          type="date"
          className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300">
          <option>Remark Type</option>
          <option>Present</option>
          <option>Absent</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded shadow">
        <table className="min-w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">In Location</th>
              <th className="px-4 py-2 text-left">In Time</th>
              <th className="px-4 py-2 text-left">Out Location</th>
              <th className="px-4 py-2 text-left">Out Time</th>
              <th className="px-4 py-2 text-left">Remark</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{data.date}</td>
                <td className="px-4 py-2">{data.inLocation || '-'}</td>
                <td className="px-4 py-2">{data.inTime || '-'}</td>
                <td className="px-4 py-2">{data.outLocation || '-'}</td>
                <td className="px-4 py-2">{data.outTime || '-'}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    data.remark === 'Present' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {data.remark}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Export Button (aligned right) */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Export
        </button>
      </div>
    </div>
  );
}
