
"use client";
import React, { useEffect, useState } from "react";

import Sidebar from "../Layout/Sidebar/Sidebar";
import Navbar from "../Layout/Navbar/Navbar";

import Trainee from "../Admin/Trainee/Trainee";
import Schedule from "../Admin/Schedule/Schedule";
import Plan from "../Admin/Plan/Plan";
import Profile from "../Admin/Profile/Profile";
import Acheivements from "../Admin/Acheivements/Acheivements";
import DietManager from "../Admin/Diet/Diet";
import UserDashboard from "../UserDashboard/UserDashboard";
import Calculator from "../Admin/Calculator/Calculator";
import Notification from "../Admin/Notification/Notification";
import DietReference from "../Admin/DietReference/DietReference";
import ExcersizeReference from "../Admin/ExcersizeReference/ExcersizeReference";
import Attandence from "../Admin/Attandence/Attandence";

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const user = { name: "User", role: "user" };

  const renderPage = () => {
    switch (currentView) {
      case "dashboard":
        return <UserDashboard />;
      case "schedule":
        return <Schedule />;
      case "trainers":
        return <Trainee />;
      case "plans":
        return <Plan />;
      case "achievements":
        return <Acheivements />;
      case "user-profile":
        return <Profile />;
      case "diet":
        return <DietManager />;
      case "calculator":
        return <Calculator />;
      case "dietReference":
        return <DietReference />;
      case "notification":
        return <Notification />;
      case "excersizeReference":
        return <ExcersizeReference />;
      case "attandence":
        return <Attandence />;
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        user={user}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col overflow-hidden w-full transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Navbar
          user={user}
          setCurrentView={setCurrentView}
          toggleSidebar={toggleSidebar}
        />

        {/* Page Render */}
        <main className="flex-1 md:ml-[260px] overflow-y-auto bg-gray-100">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
