import React from 'react';
import { Dumbbell, CalendarCheck, Activity, AlarmClock } from 'lucide-react';

export default function UserStats({ user }) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 my-6">
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <Dumbbell className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-lg font-semibold">{user.membership}</h2>
          <p className="text-sm text-gray-500">Membership</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <CalendarCheck className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-lg font-semibold">{user.attendance}%</h2>
          <p className="text-sm text-gray-500">Attendance</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <Activity className="w-8 h-8 text-red-500" />
        <div>
          <h2 className="text-lg font-semibold">{user.goal}</h2>
          <p className="text-sm text-gray-500">Goal</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <AlarmClock className="w-8 h-8 text-yellow-500" />
        <div>
          <h2 className="text-lg font-semibold">Valid till</h2>
          <p className="text-sm text-gray-500">{user.expiry}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <AlarmClock className="w-8 h-8 text-yellow-500" />
        <div>
          <h2 className="text-lg font-semibold">Member Since</h2>
          <p className="text-sm text-gray-500">{user.Membersince}</p>
        </div>
      </div>
    </div>
  );
}
