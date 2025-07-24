
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dumbbell, CalendarCheck, Activity, AlarmClock } from "lucide-react";

export default function UserStats() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Date ko readable banane ka helper
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Axios se data fetch
  useEffect(() => {
    const fetchMember = async () => {
      try {
        // Agar multiple members hain, abhi pehla dikhayenge
        const response = await axios.get("http://localhost:5000/api/members");
        setUser(response.data[2]); // Pehla member le liya
        setLoading(false);
      } catch (err) {
        console.error("Error fetching member data:", err);
        setLoading(false);
      }
    };

    fetchMember();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!user) return <p className="text-center text-red-500">No member found</p>;

  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-4 my-6">
      {/* Membership Plan */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <Dumbbell className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-lg font-semibold">{user.plan}</h2>
          <p className="text-sm text-gray-500">Membership Plan</p>
        </div>
      </div>

      {/* Attendance */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <CalendarCheck className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-lg font-semibold">{user.attendance || 0}%</h2>
          <p className="text-sm text-gray-500">Attendance</p>
        </div>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <Activity className="w-8 h-8 text-red-500" />
        <div>
          <h2 className="text-lg font-semibold">{user.goal || "N/A"}</h2>
          <p className="text-sm text-gray-500">Goal</p>
        </div>
      </div>

      {/* Join Date */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <AlarmClock className="w-8 h-8 text-yellow-500" />
        <div>
          <h2 className="text-lg font-semibold">Join Date</h2>
          <p className="text-sm text-gray-500">{formatDate(user.joinDate)}</p>
        </div>
      </div>

      {/* End Date */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
        <AlarmClock className="w-8 h-8 text-yellow-500" />
        <div>
          <h2 className="text-lg font-semibold">End Date</h2>
          <p className="text-sm text-gray-500">{formatDate(user.endDate)}</p>
        </div>
      </div>
    </div>
  );
}
