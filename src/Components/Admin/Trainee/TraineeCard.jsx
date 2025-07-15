
// 'use client';
// import React from 'react';
// import { Mail, Phone, MapPin, Calendar, Edit, Trash2 } from 'lucide-react';

// const TraineeCard = ({ trainee, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
//       <div className="flex items-center space-x-4 mb-4">
//         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//           {trainee.profilePic ? (
//             <img
//               src={trainee.profilePic}
//               alt={trainee.name}
//               className="w-full h-full rounded-full object-cover"
//             />
//           ) : (
//             trainee.name.charAt(0).toUpperCase()
//           )}
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">{trainee.name}</h3>
//           <p className="text-sm text-gray-600">{trainee.course}</p>
//         </div>
//       </div>

//       <div className="space-y-2 mb-4">
//         <div className="flex items-center text-sm text-gray-600">
//           <Mail className="w-4 h-4 mr-2" />
//           {trainee.email}
//         </div>
//         <div className="flex items-center text-sm text-gray-600">
//           <Phone className="w-4 h-4 mr-2" />
//           {trainee.phone}
//         </div>
//         <div className="flex items-center text-sm text-gray-600">
//           <MapPin className="w-4 h-4 mr-2" />
//           {trainee.address}
//         </div>
//         <div className="flex items-center text-sm text-gray-600">
//           <Calendar className="w-4 h-4 mr-2" />
//           Joined: {new Date(trainee.joinDate).toLocaleDateString()}
//         </div>
//       </div>

//       <div className="flex space-x-2">
//         <button
//           onClick={() => onEdit(trainee)}
//           className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
//         >
//           <Edit className="w-4 h-4 mr-1" />
//           Edit
//         </button>
//         <button
//           onClick={() => onDelete(trainee._id)}
//           className="flex items-center px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
//         >
//           <Trash2 className="w-4 h-4 mr-1" />
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TraineeCard;


'use client';
import React from 'react';
import {
  Pencil,
  Trash,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  UserCircle2,
} from 'lucide-react';

const TraineeCard = ({ trainee, onEdit, onDelete }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-xl p-6 w-full max-w-sm mx-auto border border-gray-200 hover:shadow-2xl transition-all duration-300">
      
      {/* Profile Picture or Initial */}
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 flex items-center justify-center text-white font-bold text-3xl bg-gradient-to-br from-blue-500 to-purple-600">
        {trainee.profilePic ? (
          <img
            src={trainee.profilePic}
            alt={trainee.name}
            className="w-full h-full object-cover"
          />
        ) : (
          trainee.name?.charAt(0).toUpperCase() || 'T'
        )}
      </div>

      {/* Name & Course */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <UserCircle2 size={20} className="text-purple-500" />
          {trainee.name}
        </h2>
        <p className="mt-1 inline-block text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium shadow-sm">
          {trainee.course}
        </p>
      </div>

      {/* Trainee Info */}
      <div className="text-sm text-gray-700 mt-4 space-y-2 border-t pt-4">
        <p className="flex items-center gap-2">
          <Mail size={16} className="text-purple-500" />
          <span className="truncate">{trainee.email}</span>
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} className="text-purple-500" />
          {trainee.phone}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={16} className="text-purple-500" />
          <span className="truncate">{trainee.address}</span>
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays size={16} className="text-green-600" />
          Joined: <span className="font-medium">{new Date(trainee.joinDate).toLocaleDateString()}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => onEdit(trainee)}
          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
        >
          <Pencil size={16} /> Edit
        </button>
        <button
          onClick={() => onDelete(trainee._id)}
          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow"
        >
          <Trash size={16} /> Delete
        </button>
      </div>
    </div>
  );
};

export default TraineeCard;
