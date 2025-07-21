
'use client';

import React, { useEffect, useState } from 'react';

import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';

import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import Trainee from '../Admin/Trainee/Trainee';
import Schedule from '../Admin/Schedule/Schedule';
import Plan from '../Admin/Plan/Plan';
import About from '../Admin/About/About';
import Contact from '../Admin/Contact/Contact';
import Member from '../Admin/Members/Member';
import ContactData from '../Admin/Contact/ContactData';
import UserDetails from '../Admin/UserDetails/UserDetails';
import Profile from '../Admin/Profile/Profile';
import Acheivements from '../Admin/Acheivements/Acheivements';
import DietManager from '../Admin/Diet/Diet';
import UserDashboard from '../UserDashboard/USerDashboard';
import Diet from '../Admin/Diet/Diet';
import Calculator from '../Admin/Calculator/Calculator';
import Notification from '../Admin/Notification/Notification';
import Expire from '../Admin/Expire/Expire';
import DietReference from '../Admin/DietReference/DietReference';
import ExcersizeReference from '../Admin/ExcersizeReference/ExcersizeReference';
import Attandence from '../Admin/Attandence/Attandence';
import AttendanceReport from '../Admin/Attandence/AttendanceReport';
import GymAdvertisement from '../Admin/Advertisement/Advertisement';

 // ⬅️ Import your ad component

export default function Home() {
  const [role, setRole] = useState('');
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole || 'admin');
  }, []);

  const user = {
    name: 'App User',
    role: role,
  };

  const renderPage = () => {
    if (role === 'admin') {
      switch (currentView) {
        case 'dashboard': return <AdminDashboard />;
        case 'members': return <Member />;
        case 'trainers': return <Trainee />;
        case 'schedule': return <Schedule />;
        case 'plans': return <Plan />;
        case 'about': return <About />;
        case 'userDetails': return <UserDetails />;
        case 'contact': return <Contact />;
        case 'contactData': return <ContactData />;
        case 'diet': return <DietManager />;
        case 'calculator': return <Calculator />;
        case 'notification': return <Notification />;
        case 'expire': return <Expire />;
        case 'achievements': return <Acheivements />;
        case 'dietReference': return <DietReference />;
        case 'excersizeReference': return <ExcersizeReference />;
        case 'attandence': return <Attandence />;
        case 'attendanceReport': return <AttendanceReport />;
        case 'admin-profile': return <Profile />;
        default: return <AdminDashboard />;
      }
    } else if (role === 'user') {
      switch (currentView) {
        case 'dashboard': return <UserDashboard />;
        case 'schedule': return <Schedule />;
        case 'trainers': return <Trainee />;
        case 'plans': return <Plan />;
        case 'about': return <About />;
        case 'contact': return <Contact />;
        case 'achievements': return <Acheivements />;
        case 'user-profile': return <Profile />;
        case 'diet': return <Diet />;
        case 'calculator': return <Calculator />;
        case 'dietReference': return <DietReference />;
        case 'notification': return <Notification />;
        case 'excersizeReference': return <ExcersizeReference />;
        case 'attandence': return <Attandence />;
        default: return <UserDashboard />; // Default to UserDashboard if no match
      }
    } else {
      return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center text-xl text-gray-500">
          Unauthorized or invalid role.
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* ⬇️ Ad as a floating overlay */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 z-50">
        <GymAdvertisement/>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r transition-transform duration-200 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:inset-0`}>
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} user={user} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Navbar user={user} setCurrentView={setCurrentView} onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
