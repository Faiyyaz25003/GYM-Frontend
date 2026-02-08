

"use client";
import React, { useState } from "react";
import {
  Users,
  Calendar,
  ClipboardList,
  BarChart3,
  Dumbbell,
  Phone,
  User,
  Trophy,
  Utensils,
  BookOpen,
  UserCircle,
  ChevronDown,
} from "lucide-react";

const Navbar = ({ currentView, setCurrentView, user }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const userMenuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "plans", label: "Plans" },
    { id: "login", label: "Login" },
  ];

  const menu = user?.role === "admin" ? adminMenuItems : userMenuItems;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-lg">
      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold">
          🏋️‍♂️ <span>FitTrack</span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-4">
          {menu.map((item) =>
            item.dropdown ? (
              <div key={item.id} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.id ? null : item.id)
                  }
                  className="flex items-center gap-1 text-purple-100 hover:text-white px-3 py-2 rounded-lg"
                >
                  {item.icon}
                  {item.label}
                  <ChevronDown size={14} />
                </button>

                {openDropdown === item.id && (
                  <div className="absolute top-12 left-0 bg-[#1e293b] rounded-lg shadow-lg w-44 py-1">
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          setCurrentView(sub.id);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-purple-100 hover:bg-purple-600 hover:text-white"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium
                  ${
                    currentView === item.id
                      ? "bg-purple-600 text-white"
                      : "text-purple-100 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
