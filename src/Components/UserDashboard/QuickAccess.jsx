
'use client';

import React, { useState } from 'react';
import { CalendarCheck, Salad, X } from 'lucide-react';
import AttendanceReport from '../Admin/Attandence/AttendanceReport';
import Diet from '../Admin/Diet/Diet';

export default function QuickAccess() {
  const [showAttendance, setShowAttendance] = useState(false);
  const [showDiet, setShowDiet] = useState(false);

  // Close button style
  const closeBtnStyle =
    "absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-2xl font-bold text-gray-700 shadow hover:bg-gray-300 hover:scale-110 transition-transform duration-200";

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {/* Attendance Card */}
      <div className="bg-blue-100 border border-blue-300 rounded-xl shadow p-6 hover:bg-blue-200 transition">
        <div className="flex items-center gap-4">
          <CalendarCheck className="w-10 h-10 text-blue-600" />
          <div>
            <h4 className="text-lg font-bold">Check Attendance</h4>
            <p className="text-sm text-gray-700">Track your daily punch-in/out</p>
          </div>
        </div>

        {/* View All Button (Inside Card) */}
        <button
          onClick={() => setShowAttendance(true)}
          className="mt-4 text-sm right text-blue-600 hover:underline"
        >
          View All
        </button>
      </div>

      {/* Diet Plan Card */}
      <div
        onClick={() => setShowDiet(true)}
        className="cursor-pointer bg-green-100 border border-green-300 rounded-xl shadow p-6 flex items-center gap-4 hover:bg-green-200 transition"
      >
        <Salad className="w-10 h-10 text-green-600" />
        <div>
          <h4 className="text-lg font-bold">View Diet Plan</h4>
          <p className="text-sm text-gray-700">Personalized nutrition schedule</p>
        </div>
      </div>

      {/* Attendance Modal */}
      {showAttendance && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative border">
            <button
              onClick={() => setShowAttendance(false)}
              className={closeBtnStyle}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CalendarCheck className="w-6 h-6 text-blue-600" /> Attendance Report
            </h2>
            <AttendanceReport />
          </div>
        </div>
      )}

      {/* Diet Modal */}
      {showDiet && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative border">
            <button
              onClick={() => setShowDiet(false)}
              className={closeBtnStyle}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Salad className="w-6 h-6 text-green-600" /> Diet Plan
            </h2>
            <Diet />
          </div>
        </div>
      )}
    </div>
  );
}
