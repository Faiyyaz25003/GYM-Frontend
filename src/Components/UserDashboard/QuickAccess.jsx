import React from 'react';
import { CalendarCheck, Salad } from 'lucide-react';

export default function QuickAccess() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-blue-100 border border-blue-300 rounded-xl shadow p-6 flex items-center gap-4">
        <CalendarCheck className="w-10 h-10 text-blue-600" />
        <div>
          <h4 className="text-lg font-bold">Check Attendance</h4>
          <p className="text-sm text-gray-700">Track your daily punch-in/out</p>
        </div>
      </div>

      <div className="bg-green-100 border border-green-300 rounded-xl shadow p-6 flex items-center gap-4">
        <Salad className="w-10 h-10 text-green-600" />
        <div>
          <h4 className="text-lg font-bold">View Diet Plan</h4>
          <p className="text-sm text-gray-700">Personalized nutrition schedule</p>
        </div>
      </div>
    </div>
  );
}
