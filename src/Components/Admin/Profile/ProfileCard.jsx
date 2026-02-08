
"use client";
import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Trash2,
  Users,
  UserPlus,
  Briefcase,
  HeartPulse,
  ShieldAlert,
  Flag,
  User,
  Star,
  Award,
  Clock,
} from "lucide-react";

const ProfileCard = ({ trainee: initialTrainee, onEdit, onDelete }) => {
  const [trainee, setTrainee] = useState(initialTrainee);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    setTrainee(initialTrainee);
  }, [initialTrainee]);

  const profileData = [
    {
      label: "Email",
      value: trainee.email,
      icon: <Mail className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      label: "Phone",
      value: trainee.phone,
      icon: <Phone className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      label: "Alternate Phone",
      value: trainee.alternatePhone,
      icon: <Phone className="w-5 h-5" />,
      color: "text-green-500",
    },
    {
      label: "Date of Birth",
      value: trainee.dob && new Date(trainee.dob).toLocaleDateString(),
      icon: <Calendar className="w-5 h-5" />,
      color: "text-purple-600",
    },
    {
      label: "Gender",
      value: trainee.gender,
      icon: <Users className="w-5 h-5" />,
      color: "text-pink-600",
    },
    {
      label: "Role",
      value: trainee.role,
      icon: <UserPlus className="w-5 h-5" />,
      color: "text-indigo-600",
    },
    {
      label: "Occupation",
      value: trainee.occupation,
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-orange-600",
    },
    {
      label: "Marital Status",
      value: trainee.maritalStatus,
      icon: <HeartPulse className="w-5 h-5" />,
      color: "text-red-600",
    },
    {
      label: "Blood Group",
      value: trainee.bloodGroup,
      icon: <ShieldAlert className="w-5 h-5" />,
      color: "text-red-500",
    },
    {
      label: "Nationality",
      value: trainee.nationality,
      icon: <Flag className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      label: "Emergency Contact",
      value: trainee.emergencyContactName,
      icon: <User className="w-5 h-5" />,
      color: "text-gray-600",
    },
    {
      label: "Emergency Number",
      value: trainee.emergencyContactNumber,
      icon: <Phone className="w-5 h-5" />,
      color: "text-gray-600",
    },
  ];

  const addressData = [
    {
      label: "Address",
      value: trainee.address,
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: "City",
      value: trainee.city,
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      label: "State",
      value: trainee.state,
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      label: "Country",
      value: trainee.country,
      icon: <Flag className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-6 px-3 sm:px-4">
      <div className="mx-auto w-full lg:w-[900px]">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-4 sm:px-8 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Profile Details
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm opacity-90">
                <Clock className="w-4 h-4" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-8">
            {/* Profile Header */}
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-4xl sm:text-6xl font-bold overflow-hidden shadow-xl">
                  {trainee.profilePic ? (
                    <img
                      src={trainee.profilePic}
                      alt={trainee.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    trainee.name?.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {trainee.name}
                </h3>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
                  <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm capitalize">
                    {trainee.role}
                  </span>
                  {trainee.occupation && (
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-sm">
                      {trainee.occupation}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {trainee.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {trainee.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {[profileData.slice(0, 6), profileData.slice(6)].map(
                (group, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-5">
                    <div className="space-y-3">
                      {group.map(
                        (item) =>
                          item.value && (
                            <div
                              key={item.label}
                              className="flex gap-3 p-3 bg-white rounded-xl"
                            >
                              <span className={item.color}>{item.icon}</span>
                              <div>
                                <p className="text-xs text-gray-500">
                                  {item.label}
                                </p>
                                <p className="text-sm text-gray-800 capitalize">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Address */}
            <div className="bg-green-50 rounded-2xl p-5 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addressData.map(
                  (item) =>
                    item.value && (
                      <div
                        key={item.label}
                        className="flex gap-3 p-3 bg-white rounded-xl"
                      >
                        <span className="text-green-600">{item.icon}</span>
                        <div>
                          <p className="text-xs text-gray-500">{item.label}</p>
                          <p className="text-sm text-gray-800 capitalize">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ),
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onEdit(trainee)}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Edit className="w-5 h-5" /> Edit
              </button>

              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" /> Delete
              </button>

              {showDeleteConfirm && (
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="w-full sm:w-auto bg-gray-600 text-white px-8 py-3 rounded-xl"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
