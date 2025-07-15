import React, { useState } from 'react';
import { Calendar, Clock, User, Trophy, Target, TrendingUp, Bell, Settings, LogOut, Activity, Users, DollarSign, Dumbbell, Heart, MapPin, Phone, Mail } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);

  // Sample user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    membershipType: "Premium",
    memberSince: "Jan 2024",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    currentStreak: 12,
    totalWorkouts: 89,
    caloriesBurned: 15420,
    nextClass: "HIIT Training - 6:00 PM"
  };

  const workoutHistory = [
    { date: "Today", workout: "Upper Body Strength", duration: "45 min", calories: 320 },
    { date: "Yesterday", workout: "Cardio Blast", duration: "30 min", calories: 280 },
    { date: "Jul 9", workout: "Leg Day", duration: "60 min", calories: 450 },
    { date: "Jul 8", workout: "Core Focus", duration: "25 min", calories: 180 },
    { date: "Jul 7", workout: "Full Body", duration: "50 min", calories: 380 }
  ];

  const upcomingClasses = [
    { name: "HIIT Training", time: "6:00 PM", instructor: "Mike Chen", spots: 5 },
    { name: "Yoga Flow", time: "7:30 PM", instructor: "Sarah Wilson", spots: 3 },
    { name: "Strength Training", time: "8:00 AM", instructor: "David Kim", spots: 8 },
    { name: "Spin Class", time: "9:00 AM", instructor: "Emma Davis", spots: 2 }
  ];

  const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className="text-sm text-green-600 mt-1">
              <TrendingUp size={14} className="inline mr-1" />
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">FitZone Gym</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{userData.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <nav className="flex space-x-2 mb-8 bg-white p-2 rounded-lg shadow-sm">
          <TabButton
            id="overview"
            label="Overview"
            icon={Activity}
            active={activeTab === 'overview'}
            onClick={setActiveTab}
          />
          <TabButton
            id="workouts"
            label="Workouts"
            icon={Dumbbell}
            active={activeTab === 'workouts'}
            onClick={setActiveTab}
          />
          <TabButton
            id="schedule"
            label="Schedule"
            icon={Calendar}
            active={activeTab === 'schedule'}
            onClick={setActiveTab}
          />
          <TabButton
            id="profile"
            label="Profile"
            icon={User}
            active={activeTab === 'profile'}
            onClick={setActiveTab}
          />
        </nav>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome back, {userData.name}!</h2>
              <p className="text-blue-100 mb-4">Ready to crush your fitness goals today?</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>{userData.currentStreak} day streak</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Next: {userData.nextClass}</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Workouts"
                value={userData.totalWorkouts}
                change="+12% this month"
                icon={Dumbbell}
                color="bg-blue-500"
              />
              <StatCard
                title="Calories Burned"
                value={userData.caloriesBurned.toLocaleString()}
                change="+8% this month"
                icon={Heart}
                color="bg-red-500"
              />
              <StatCard
                title="Current Streak"
                value={`${userData.currentStreak} days`}
                change="Personal best!"
                icon={Trophy}
                color="bg-yellow-500"
              />
              <StatCard
                title="Membership"
                value={userData.membershipType}
                icon={Target}
                color="bg-green-500"
              />
            </div>

            {/* Recent Activity & Upcoming Classes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Workouts</h3>
                <div className="space-y-3">
                  {workoutHistory.slice(0, 4).map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{workout.workout}</p>
                        <p className="text-sm text-gray-600">{workout.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{workout.duration}</p>
                        <p className="text-sm text-gray-600">{workout.calories} cal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Classes</h3>
                <div className="space-y-3">
                  {upcomingClasses.map((cls, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{cls.name}</p>
                        <p className="text-sm text-gray-600">{cls.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{cls.time}</p>
                        <p className="text-sm text-green-600">{cls.spots} spots left</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workouts Tab */}
        {activeTab === 'workouts' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Workout History</h3>
              <div className="space-y-3">
                {workoutHistory.map((workout, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Dumbbell className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{workout.workout}</p>
                        <p className="text-sm text-gray-600">{workout.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{workout.duration}</p>
                      <p className="text-sm text-gray-600">{workout.calories} calories</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Schedule</h3>
              <div className="grid gap-4">
                {upcomingClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Calendar className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{cls.name}</p>
                        <p className="text-sm text-gray-600">Instructor: {cls.instructor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{cls.time}</p>
                      <p className="text-sm text-orange-600">{cls.spots} spots available</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Book
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-center">
                  <img
                    src={userData.profileImage}
                    alt={userData.name}
                    className="h-24 w-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{userData.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{userData.membershipType} Member</p>
                  <p className="text-sm text-gray-600">Member since {userData.memberSince}</p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{userData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">{userData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Home Gym</p>
                      <p className="font-medium text-gray-900">FitZone Downtown</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Settings size={16} />
                    <span>Edit Profile</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;