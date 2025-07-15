// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   CheckCircle,
//   AlertCircle,
//   AlertTriangle,
//   Info,
//   Trash2,
//   Eye
// } from 'lucide-react';

// const getIcon = (type) => {
//   switch (type) {
//     case 'success':
//       return <CheckCircle className="w-6 h-6 text-green-600" />;
//     case 'error':
//       return <AlertCircle className="w-6 h-6 text-red-600" />;
//     case 'warning':
//       return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
//     default:
//       return <Info className="w-6 h-6 text-blue-600" />;
//   }
// };

// const getBgColor = (type, isRead) => {
//   let base = isRead ? 'opacity-60' : '';
//   switch (type) {
//     case 'success':
//       return `bg-green-100 border-green-400 ${base}`;
//     case 'error':
//       return `bg-red-100 border-red-400 ${base}`;
//     case 'warning':
//       return `bg-yellow-100 border-yellow-400 ${base}`;
//     case 'info':
//       return `bg-blue-100 border-blue-400 ${base}`;
//     default:
//       return `bg-gray-100 border-gray-400 ${base}`;
//   }
// };

// export default function Notification() {
//   const [notifications, setNotifications] = useState([]);

//   const fetchNotifications = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/notifications');
//       const data = await res.json();
//       setNotifications(data);
//     } catch (error) {
//       console.error('Failed to fetch notifications', error);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/notifications/${id}`, { method: 'DELETE' });
//       setNotifications(notifications.filter((n) => n._id !== id));
//     } catch (error) {
//       console.error('Failed to delete notification', error);
//     }
//   };

//   const handleMarkAsRead = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/notifications/${id}/read`, { method: 'PUT' });
//       setNotifications(
//         notifications.map((n) =>
//           n._id === id ? { ...n, isRead: true } : n
//         )
//       );
//     } catch (error) {
//       console.error('Failed to mark as read', error);
//     }
//   };

//   return (
//     <div className="p-6 min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#f8f9fc] to-[#e2e8f0] rounded-lg">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">🔔 Notifications</h2>
//       {notifications.length === 0 ? (
//         <p className="text-gray-600">No notifications yet.</p>
//       ) : (
//         <div className="space-y-4">
//           {notifications.map((n) => (
//             <div
//               key={n._id}
//               className={`flex items-start gap-4 p-4 rounded-lg shadow border-l-4 relative ${getBgColor(n.type, n.isRead)}`}
//             >
//               {getIcon(n.type)}
//               <div className="text-gray-800 flex-1">
//                 <p className="font-semibold">{n.title}</p>
//                 <p className="text-sm">{n.message}</p>
//                 <p className="text-xs text-gray-600 mt-1">{new Date(n.time).toLocaleString()}</p>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 {!n.isRead && (
//                   <button
//                     onClick={() => handleMarkAsRead(n._id)}
//                     className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
//                     title="Mark as read"
//                   >
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 )}
//                 <button
//                   onClick={() => handleDelete(n._id)}
//                   className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
//                   title="Delete"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


'use client';
import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info, Trash2, Eye } from 'lucide-react';

const getIcon = (type) => {
  switch (type) {
    case 'success': return <CheckCircle className="w-6 h-6 text-green-600" />;
    case 'error': return <AlertCircle className="w-6 h-6 text-red-600" />;
    case 'warning': return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
    default: return <Info className="w-6 h-6 text-blue-600" />;
  }
};

const getBgColor = (type, isRead) => {
  let base = isRead ? 'opacity-60' : '';
  switch (type) {
    case 'success': return `bg-green-100 border-green-400 ${base}`;
    case 'error': return `bg-red-100 border-red-400 ${base}`;
    case 'warning': return `bg-yellow-100 border-yellow-400 ${base}`;
    case 'info': return `bg-blue-100 border-blue-400 ${base}`;
    default: return `bg-gray-100 border-gray-400 ${base}`;
  }
};

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [userRole, setUserRole] = useState('');

  const fetchNotifications = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/notifications');
      const data = await res.json();

      // Filter: Show only if user is admin or recipientRole is 'all'
      const role = localStorage.getItem('role') || 'user';
      setUserRole(role);
      const filteredNotifications = role === 'admin'
        ? data
        : data.filter((n) => n.recipientRole === 'all');

      setNotifications(filteredNotifications);
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notifications/${id}`, { method: 'DELETE' });
      setNotifications(notifications.filter((n) => n._id !== id));
    } catch (error) {
      console.error('Failed to delete notification', error);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notifications/${id}/read`, { method: 'PUT' });
      setNotifications(notifications.map((n) => n._id === id ? { ...n, isRead: true } : n));
    } catch (error) {
      console.error('Failed to mark as read', error);
    }
  };

  return (
    <div className="p-6 min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#f8f9fc] to-[#e2e8f0] rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🔔 Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-600">No notifications yet.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n._id}
              className={`flex items-start gap-4 p-4 rounded-lg shadow border-l-4 relative ${getBgColor(n.type, n.isRead)}`}
            >
              {getIcon(n.type)}
              <div className="text-gray-800 flex-1">
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm">{n.message}</p>
                <p className="text-xs text-gray-600 mt-1">{new Date(n.time).toLocaleString()}</p>
              </div>
              {userRole === 'admin' && (
                <div className="flex flex-col space-y-2">
                  {!n.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(n._id)}
                      className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
                      title="Mark as read"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(n._id)}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
