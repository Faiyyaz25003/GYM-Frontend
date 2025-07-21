'use client';

import React, { useState, useRef } from 'react';

export default function AttendancePage() {
  const [punchInData, setPunchInData] = useState(null);
  const [punchOutData, setPunchOutData] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [punchType, setPunchType] = useState('');
  const [punchInTimestamp, setPunchInTimestamp] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async (type) => {
    setPunchType(type);
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Camera error:', error);
      setIsCameraOpen(false);
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 300, 300);
    const photo = canvasRef.current.toDataURL('image/png');

    navigator.geolocation.getCurrentPosition((position) => {
      const location = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
      const time = new Date().toLocaleTimeString();

      if (punchType === 'in') {
        setPunchInData({ photo, location, time });
        setPunchInTimestamp(Date.now());
      } else {
        setPunchOutData({ photo, location, time });
      }

      stopCamera();
    });
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOpen(false);
  };

  const canPunchOut = punchInTimestamp && (Date.now() - punchInTimestamp) >= 60 * 60 * 1000;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Gym Attendance Tracker</h1>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Punch In Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Punch In</h2>
          <p><span className="font-medium">Time:</span> {punchInData?.time || '--:--'}</p>
          <p><span className="font-medium">Location:</span> {punchInData?.location || 'Not punched in yet'}</p>
          {punchInData?.photo && (
            <img src={punchInData.photo} alt="Punch In" className="w-32 h-32 rounded-lg mt-2 border" />
          )}
          <button
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
            onClick={() => startCamera('in')}
            disabled={!!punchInData}
          >
            Punch In
          </button>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-200" />

        {/* Punch Out Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Punch Out</h2>
          <p><span className="font-medium">Time:</span> {punchOutData?.time || '--:--'}</p>
          <p><span className="font-medium">Location:</span> {punchOutData?.location || 'Not punched out yet'}</p>
          {punchOutData?.photo && (
            <img src={punchOutData.photo} alt="Punch Out" className="w-32 h-32 rounded-lg mt-2 border" />
          )}
          <button
            className="mt-3 w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
            onClick={() => startCamera('out')}
            disabled={!punchInData || !!punchOutData || !canPunchOut}
          >
            Punch Out
          </button>
          {!canPunchOut && punchInData && (
            <p className="text-sm text-red-600 mt-2">You can punch out only after 1 hour from punch in.</p>
          )}
        </div>
      </div>

      {/* CAMERA MODAL */}
      {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Take Attendance Selfie</h2>

            <video
              ref={videoRef}
              autoPlay
              className="w-full rounded-lg border-2 border-gray-300 shadow-md mb-4"
            />
            <canvas ref={canvasRef} width={300} height={300} className="hidden" />

            <div className="flex justify-center gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                onClick={stopCamera}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                onClick={capturePhoto}
              >
                Capture Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
