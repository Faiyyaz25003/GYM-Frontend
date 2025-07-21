'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserStats from './UserStats';
import WorkoutSchedule from './WorkoutSchedule';
import QuickAccess from './QuickAccess';

export default function UserDashboard() {
  const [schedules, setSchedules] = useState([]);

  const user = {
    name: 'John Doe',
    membership: 'Gold',
    joinDate: '2024-06-01',
    expiry: '2025-06-01',
    attendance: 87,
    goal: 'Weight Loss',
    Membersince: '2024-06-01',
  };

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

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-800">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Gym Dashboard
        </h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your gym today.</p>
      </div>

      <UserStats user={user} />
      <WorkoutSchedule workouts={schedules} />
      <QuickAccess />
    </div>
  );
}
