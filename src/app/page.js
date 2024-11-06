"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleNext = () => {
    // Redirect to `/welcome/encoded-name`
    router.push(`/welcome/${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
      <h1 className="text-4xl font-bold text-orange-500 mb-2">สวัสดี</h1>
      <p className="text-lg text-gray-700 mb-6">เหล่าสหายที่รักการเดินทางทั้งหลาย</p>
      <div className="mb-6">
        <img src="/duck.png" alt="Ducky" className="w-198 h-296" />
        <p className="text-xl font-medium mt-4">ข้ามีนามว่า <span className="text-orange-500 font-bold">Ducky</span></p>
      </div>
      <p className="text-lg text-gray-700 mb-4">แล้วเจ้าชื่อว่าอะไรหรอ?</p>
      <input
        type="text"
        placeholder="กรอกชื่อของเจ้าในช่องนี้ได้เลยย"
        className="px-4 py-2 rounded-md border-2 border-orange-300 text-center focus:outline-none focus:border-orange-500 mb-4"
        value={name}
        onChange={handleChange}
      />
      <button
        onClick={handleNext}
        className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600"
        disabled={!name} // Disable button if no name
      >
        ถัดไป
      </button>
    </div>
  );
}
