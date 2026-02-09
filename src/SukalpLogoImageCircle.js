import React from 'react';

export default function SukalpLogoImageCircle() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full bg-white shadow-lg flex items-center justify-center w-24 h-24 border-2 border-yellow-700 overflow-hidden p-0">
        <img src="/logo.png" alt="Sukalp Logo" className="w-[100%] h-[100%] object-contain" />
      </div>
    </div>
  );
}
