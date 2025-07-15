
'use client';
import React from 'react';
import {
  LogOut,
  User,
  Users,
  Calendar,
  ClipboardList,
  BarChart3,
  Dumbbell,
  Phone,
  Info,
  UserCircle,
  Trophy,
  Utensils,
  BookOpen
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView, user }) => {
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
    { id: 'contactData', label: 'Contact Data', icon: <Phone size={18} /> },
    { id: 'userDetails', label: 'User Details', icon: <Users size={18} /> },
    { id: 'trainers', label: 'Trainers', icon: <Dumbbell size={18} /> },
    { id: 'members', label: 'Members', icon: <User size={18} /> },
    { id: 'expiremembership', label: 'Expire Membership', icon: <User size={18} /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
    { id: 'contact', label: 'Contact Us', icon: <Phone size={18} /> },
    { id: 'about', label: 'About Us', icon: <Info size={18} /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={18} /> },
    { id: 'plans', label: 'My Plan', icon: <ClipboardList size={18} /> },
    { id: 'diet', label: 'Diet', icon: <Utensils size={18} /> },
    { id: 'Reference', label: 'Reference', icon: <BookOpen size={18} /> },
    { id: 'admin-profile', label: 'Admin Profile', icon: <UserCircle size={18} /> },
  ];

  const userMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
    { id: 'trainers', label: 'Trainers', icon: <Dumbbell size={18} /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={18} /> },
    { id: 'contact', label: 'Contact Us', icon: <Phone size={18} /> },
    { id: 'about', label: 'About Us', icon: <Info size={18} /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
    { id: 'plans', label: 'My Plan', icon: <ClipboardList size={18} /> },
    { id: 'diet', label: 'Diet', icon: <ClipboardList size={18} /> },
    { id: 'Reference', label: 'Reference', icon: <ClipboardList size={18} /> },
    { id: 'user-profile', label: 'User Profile', icon: <UserCircle size={18} /> },
  ];

  const menuToShow = user?.role === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] shadow-lg overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="p-2 border-b border-white/10 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="flex items-center gap-1 py-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="text-white text-xl animate-bounce">🏋️‍♂️</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-wide leading-tight">FitTrack</h1>
            <p className="text-[10px] text-purple-300 font-medium leading-none">Gym Management System</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="p-3 flex flex-col gap-1">
        {menuToShow.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex items-center gap-2 p-2.5 rounded-xl text-sm font-medium transition-all duration-200
              ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-inner'
                  : 'text-purple-100 hover:bg-purple-700/20 hover:text-white'
              }
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
