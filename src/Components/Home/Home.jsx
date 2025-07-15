
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
import DietManager from '../Admin/Diet/DietForm';
import UserDashboard from '../UserDashboard/USerDashboard';
import Diet from '../Admin/Diet/Diet';
import Calculator from '../Admin/Calculator/Calculator';
import Notification from '../Admin/Notification/Notification'; // ✅ Import Notification
import ExpireMember from '../Admin/ExpireMember/ExpireMember';

export default function Home() {
  const [role, setRole] = useState('');
  const [currentView, setCurrentView] = useState('dashboard');

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
        case 'acheivements': return <Acheivements />;
        case 'schedule': return <Schedule />;
        case 'plans': return <Plan />;
        case 'about': return <About />;
        case 'userDetails': return <UserDetails />;
        case 'contact': return <Contact />;
        case 'contactData': return <ContactData />;
        case 'profile': return <Profile />;
        case 'diet': return <DietManager />;
        case 'calculator': return <Calculator />;
        case 'notification': return <Notification />; // ✅ Show in main content
        case 'expireMember': return <ExpireMember />;
        default: return <ExpireMember />;
      }
    } else if (role === 'user') {
      switch (currentView) {
        case 'dashboard': return <UserDashboard />;
        case 'schedule': return <Schedule />;
        case 'trainers': return <Trainee />;
        case 'plans': return <Plan />;
        case 'support': return <div>User Support</div>;
        case 'about': return <About />;
        case 'contact': return <Contact />;
        case 'acheivement': return <Acheivements />;
        case 'profile': return <Profile />;
        case 'diet': return <Diet />;
        case 'calculator': return <Calculator />;
        default: return <Acheivements />;
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
    <div>
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} user={user} />
      <Navbar user={user} setCurrentView={setCurrentView} />
      <main className="ml-64 mt-16 p-6 bg-gray-100 min-h-screen">
        {renderPage()}
      </main>
    </div>
  );
}
