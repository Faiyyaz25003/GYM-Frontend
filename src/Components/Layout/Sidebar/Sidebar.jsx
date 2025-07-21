
'use client';
import React, { useState } from 'react';
import {
  LogOut, User, Users, Calendar, ClipboardList,
  BarChart3, Dumbbell, Phone, Info, UserCircle,
  Trophy, Utensils, BookOpen, ChevronDown, ChevronUp
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView, user, isSidebarOpen }) => {
  const [isDietOpen, setIsDietOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false); // NEW STATE

  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
    { id: 'contactData', label: 'Visitor Message', icon: <Phone size={18} /> },
    { id: 'userDetails', label: 'User Details', icon: <Users size={18} /> },
    { id: 'trainers', label: 'Trainers', icon: <Dumbbell size={18} /> },
    { id: 'members', label: 'Members', icon: <User size={18} /> },
    { id: 'expire', label: 'Expire Membership', icon: <User size={18} /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
    { id: 'contact', label: 'Contact Us', icon: <Phone size={18} /> },
    { id: 'about', label: 'About Us', icon: <Info size={18} /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={18} /> },
    { id: 'plans', label: 'My Plan', icon: <ClipboardList size={18} /> },
    {
      id: 'dietDropdown',
      label: 'Diet',
      icon: <Utensils size={18} />,
      isDropdown: true,
      children: [
        { id: 'diet', label: 'Diet', icon: <ClipboardList size={16} /> },
        { id: 'dietReference', label: 'Diet Reference', icon: <BookOpen size={16} /> },
      ],
    },
    {
      id: 'attendanceDropdown',
      label: 'Attandence',
      icon: <UserCircle size={18} />,
      isDropdown: true,
      children: [
        { id: 'attandence', label: 'Mark Attendance', icon: <UserCircle size={16} /> },
        { id: 'attendanceReport', label: 'Attendance Report', icon: <ClipboardList size={16} /> },
      ],
    },
    { id: 'excersizeReference', label: 'Excersize Reference', icon: <BookOpen size={18} /> },
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
    { id: 'dietReference', label: 'Diet Reference', icon: <BookOpen size={18} /> },
    { id: 'excersizeReference', label: 'Excersize Reference', icon: <BookOpen size={18} /> },
     { id: 'attandence', label: 'Mark Attendance', icon: <UserCircle size={16} /> },
    { id: 'user-profile', label: 'User Profile', icon: <UserCircle size={18} /> },
  ];

  const menuToShow = user?.role === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Header */}
      <div className="p-2 border-b border-white/10 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="flex items-center gap-1 py-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center shadow-lg">
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
        {menuToShow.map((item) =>
          item.isDropdown && user?.role === 'admin' ? (
            <div key={item.id} className="flex flex-col">
              <button
                onClick={() =>
                  item.id === 'dietDropdown'
                    ? setIsDietOpen(!isDietOpen)
                    : setIsAttendanceOpen(!isAttendanceOpen)
                }
                className={`flex items-center justify-between gap-2 p-2.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${(item.id === 'dietDropdown' && isDietOpen) || (item.id === 'attendanceDropdown' && isAttendanceOpen)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-inner'
                    : 'text-purple-100 hover:bg-purple-700/20 hover:text-white'}
                `}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {(item.id === 'dietDropdown' ? isDietOpen : isAttendanceOpen)
                  ? <ChevronUp size={16} />
                  : <ChevronDown size={16} />}
              </button>
              {(item.id === 'dietDropdown' ? isDietOpen : isAttendanceOpen) && (
                <div className="ml-6 mt-1 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => setCurrentView(child.id)}
                      className={`flex items-center gap-2 p-2 pl-3 rounded-lg text-sm font-medium transition-all duration-200
                        ${currentView === child.id
                          ? 'bg-purple-600 text-white shadow-inner'
                          : 'text-purple-100 hover:bg-purple-600/20 hover:text-white'}`}
                    >
                      {child.icon}
                      <span>{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex items-center gap-2 p-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${currentView === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-inner'
                  : 'text-purple-100 hover:bg-purple-700/20 hover:text-white'}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          )
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
