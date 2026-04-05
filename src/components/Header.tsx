"use client";
import React from 'react';
import { Search, Menu, Bell } from 'lucide-react';

export const Header = ({ isOpen, setIsOpen }: any) => {
  return (
    <header className="h-16 border-b border-gray-800 bg-[#161926]/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-800 rounded-md text-gray-400">
        <Menu size={20}/>
      </button>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
          <input type="text" placeholder="Buscar..." className="bg-[#0f111a] border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 w-64" />
        </div>
        <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-[#0f111a]" />
      </div>
    </header>
  );
};