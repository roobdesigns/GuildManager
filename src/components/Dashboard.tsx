"use client";
import React from 'react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white uppercase italic tracking-wider">
        Guild Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Members */}
        <div className="bg-[#161926] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-colors">
          <h3 className="text-gray-400 text-sm font-medium uppercase">Total Members</h3>
          <p className="text-4xl font-bold text-white mt-2">24</p>
        </div>

        {/* Next Raid */}
        <div className="bg-[#161926] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-colors">
          <h3 className="text-gray-400 text-sm font-medium uppercase">Next Raid</h3>
          <p className="text-xl font-bold text-indigo-400 mt-2">Saturday 8PM</p>
        </div>

        {/* Active Parties */}
        <div className="bg-[#161926] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-colors">
          <h3 className="text-gray-400 text-sm font-medium uppercase">Active Parties</h3>
          <p className="text-4xl font-bold text-white mt-2">3</p>
        </div>
      </div>
    </div>
  );
}