"use client";
import { LayoutDashboard, Users, UserPlus, Shield } from 'lucide-react';

export const Sidebar = ({ activeTab, setActiveTab, isOpen }: any) => {
  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20}/> },
    { id: 'roster', label: 'Roster', icon: <Users size={20}/> },
    { id: 'party', label: 'Party Builder', icon: <UserPlus size={20}/> },
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-[#161926] border-r border-gray-800 transition-all duration-300 flex flex-col h-screen`}>
      <div className="p-6 flex items-center gap-3">
        <Shield className="text-indigo-500" />
        {isOpen && <span className="font-bold text-xl uppercase italic text-white">Exilio</span>}
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-colors ${
              activeTab === item.id 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            {item.icon}
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};