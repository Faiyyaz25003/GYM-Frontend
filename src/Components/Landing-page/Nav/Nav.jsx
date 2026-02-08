
"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Plans from "../Plans/Plans";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Login from "@/Components/Authantication/Login/Login";

export default function Nav() {
  const [currentView, setCurrentView] = useState("home");

  const user = { name: "User", role: "user" };

  const renderPage = () => {
    switch (currentView) {
      case "home":
        return <Home />;
      case "contact":
        return <ContactUs />;
      case "about":
        return <AboutUs />;
      case "plans":
        return <Plans />;
      case "Login":
        return <Login />;
      default:
        return <Login />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        user={user}
      />

      {/* Main Content */}
      <main className="flex-1 pt-[66px] px-4 md:px-0 bg-gray-100 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
