

"use client";
import { useState, useEffect } from "react";
import {
  Save,
  X,
  Upload,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Building2,
  Flag,
  Briefcase,
  HeartPulse,
  Users,
  ShieldAlert,
  UserPlus,
  Camera,
} from "lucide-react";

const ProfileForm = ({ trainee, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    alternatePhone: "",
    dob: "",
    gender: "",
    role: "",
    occupation: "",
    maritalStatus: "",
    bloodGroup: "",
    nationality: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    address: "",
    country: "",
    state: "",
    city: "",
    profilePic: "",
  });

  useEffect(() => {
    if (trainee) {
      setFormData({
        ...formData,
        ...trainee,
        dob: trainee.dob
          ? new Date(trainee.dob).toISOString().split("T")[0]
          : "",
      });
    }
  }, [trainee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setFormData({ ...formData, profilePic: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const required = [
      "name",
      "email",
      "phone",
      "dob",
      "gender",
      "role",
      "address",
    ];
    if (required.every((f) => formData[f])) onSave(formData);
    else alert("Please fill all required fields.");
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      icon: <User className="w-5 h-5" />,
      required: true,
    },
    {
      name: "email",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Mobile Number",
      icon: <Phone className="w-5 h-5" />,
      type: "tel",
      required: true,
    },
    {
      name: "alternatePhone",
      label: "Alternate Mobile Number",
      icon: <Phone className="w-5 h-5" />,
      type: "tel",
    },
    {
      name: "dob",
      label: "Date of Birth",
      icon: <Calendar className="w-5 h-5" />,
      type: "date",
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      icon: <Users className="w-5 h-5" />,
      type: "select",
      options: ["Male", "Female", "Other"],
      required: true,
    },
    {
      name: "role",
      label: "Role",
      icon: <UserPlus className="w-5 h-5" />,
      type: "select",
      options: ["admin", "user"],
      required: true,
    },
    {
      name: "occupation",
      label: "Occupation",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      name: "maritalStatus",
      label: "Marital Status",
      icon: <HeartPulse className="w-5 h-5" />,
      type: "select",
      options: ["Single", "Married", "Divorced", "Widowed"],
    },
    {
      name: "bloodGroup",
      label: "Blood Group",
      icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
      name: "nationality",
      label: "Nationality",
      icon: <Flag className="w-5 h-5" />,
    },
    {
      name: "emergencyContactName",
      label: "Emergency Contact Name",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "emergencyContactNumber",
      label: "Emergency Contact Number",
      icon: <Phone className="w-5 h-5" />,
      type: "tel",
    },
    {
      name: "address",
      label: "Address",
      icon: <MapPin className="w-5 h-5" />,
      required: true,
    },
    { name: "city", label: "City", icon: <Building2 className="w-5 h-5" /> },
    { name: "state", label: "State", icon: <Building2 className="w-5 h-5" /> },
    { name: "country", label: "Country", icon: <Flag className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-8 py-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {trainee ? "✨ Edit Profile" : "🚀 Create New Profile"}
            </h2>
            <p className="text-blue-100 mt-1 text-sm sm:text-base">
              {trainee
                ? "Update your information below"
                : "Fill in the details to create a new profile"}
            </p>
          </div>

          <div className="p-4 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Picture */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto border-4 border-dashed rounded-full flex items-center justify-center overflow-hidden">
                    {formData.profilePic ? (
                      <img
                        src={formData.profilePic}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera className="w-10 h-10 text-gray-400" />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-4 w-full text-sm"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {fields.map(
                    ({
                      name,
                      label,
                      icon,
                      type = "text",
                      options,
                      required,
                    }) => (
                      <div key={name}>
                        <label className="text-sm font-semibold flex items-center gap-2 mb-1">
                          {icon} {label}
                          {required && <span className="text-red-500">*</span>}
                        </label>

                        {type === "select" ? (
                          <select
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-xl"
                          >
                            <option value="">Select {label}</option>
                            {options.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-xl"
                          />
                        )}
                      </div>
                    ),
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    {trainee ? "Update Profile" : "Save Profile"}
                  </button>

                  <button
                    onClick={onCancel}
                    className="flex-1 bg-gray-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <X className="w-5 h-5" /> Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
