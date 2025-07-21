'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, X } from 'lucide-react';

export default function WorkSchedules() {
  const [schedules, setSchedules] = useState([]);
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/schedules`);
        setSchedules(res.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };
    fetchSchedules();
  }, [BASE_URL]);

  const ScheduleCard = ({ item }) => {
    const classLabel = item.className || item.class || item.course || 'Class Name';
    const trainerLabel = item.trainerName || item.trainer || 'N/A';

    const timeLabel =
      item.startTime && item.endTime
        ? `${item.startTime} - ${item.endTime}`
        : item.time
        ? item.time
        : 'Time N/A';

    return (
      <div className="bg-gray-100 rounded-xl p-4 flex flex-col justify-between hover:bg-gray-200 transition">
        <div className="flex justify-between items-start mb-1">
          <p className="text-md font-bold text-gray-800">{classLabel}</p>
          <p className="text-sm font-semibold text-gray-700 text-right">
            {item.days?.join(', ') || 'Day N/A'}
          </p>
        </div>
        <div className="flex justify-between items-end flex-wrap gap-2">
          <p className="text-sm text-gray-600">Trainer: {trainerLabel}</p>
          <p className="text-sm text-gray-500 text-right">{timeLabel}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6 w-full">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-600" />
          Weekly Workout Schedule
        </h3>
        {schedules.length > 0 && (
          <button
            onClick={() => setViewAllOpen(true)}
            className="text-sm text-purple-600 hover:underline"
          >
            View All
          </button>
        )}
      </div>

      {schedules.length === 0 ? (
        <p className="text-gray-500">No workout schedule found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {schedules.slice(0, 4).map((item) => (
            <li key={item._id}>
              <ScheduleCard item={item} />
            </li>
          ))}
        </ul>
      )}

      {/* Full List Modal */}
      {viewAllOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative">
            <button
              onClick={() => setViewAllOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              All Weekly Schedules
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
              {schedules.map((item) => (
                <li key={item._id}>
                  <ScheduleCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
