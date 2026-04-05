"use client";
import './globals.css'; //
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Dashboard } from '../components/Dashboard';
import { Roster } from '../components/Roster';
import { PartyBuilder } from '../components/PartyBuilder';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#0f111a] text-white">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'roster' && <Roster />}
          {activeTab === 'party' && <PartyBuilder />}
        </main>
      </div>
    </div>
  );
}