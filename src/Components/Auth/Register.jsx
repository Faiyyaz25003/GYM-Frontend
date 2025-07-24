
// 'use client';
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function Register() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     mobile: '',
//     dob: '',
//     gender: '',
//     address: '',
//     role: 'user', // default
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', form);
//       setSuccess('Registered successfully. Redirecting to login...');
//       setTimeout(() => router.push('/login'), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={form.mobile}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="date"
//           name="dob"
//           placeholder="Date of Birth"
//           value={form.dob}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <select
//           name="gender"
//           value={form.gender}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={form.address}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           rows={2}
//           required
//         ></textarea>
//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="w-full mb-4 px-3 py-2 border rounded"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit" className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }
 


'use client';
import { useState } from 'react';
import { User, Mail, Lock, Phone, Calendar, MapPin, UserCheck, Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    dob: '',
    gender: '',
    address: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Registered successfully! Redirecting to login...');
      setTimeout(() => {
        // router.push('/login');
        console.log('Redirecting to login...');
      }, 1500);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="space-y-5">
            {/* Error/Success Messages */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            {success && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md">
                <p className="text-green-700 text-sm">{success}</p>
              </div>
            )}

            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile & DOB Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mobile */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  name="address"
                  placeholder="Enter your address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Role */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Type
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98]'
              } shadow-lg hover:shadow-xl`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our{' '}
            <span className="text-blue-600 hover:underline cursor-pointer">Terms of Service</span>
            {' '}and{' '}
            <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}