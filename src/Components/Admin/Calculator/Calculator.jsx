'use client';
import React, { useState } from 'react';

export default function CalculatorPage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent page refresh on Enter or submit

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum || heightNum === 0) {
      setBmi(null);
      setCategory('Invalid input');
      return;
    }

    const bmiValue = weightNum / ((heightNum / 100) ** 2);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">⚖️ BMI Calculator</h2>

        <form onSubmit={calculateBMI} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="e.g., 70"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="e.g., 175"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex-1 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
            >
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className="mt-4 p-4 rounded-lg bg-indigo-50 border border-indigo-200 text-center">
            <p className="text-lg font-bold text-indigo-700">Your BMI: {bmi}</p>
            <p className="text-md font-medium text-gray-600">Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
