import React from 'react';
import { Trash2, Crown, RefreshCw, X, Download, Plus } from 'lucide-react';

export const PartyBuilder = () => {
  return (
    <div className="space-y-6 text-gray-300">
      {/* Header Acciones Superiores */}
      <div className="flex justify-between items-center bg-[#1a1d23] p-4 rounded-xl border border-gray-800">
        <div className="flex gap-2">
          <button className="bg-gray-800 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 border border-gray-700">
            <Download size={16} /> Descargar Excel
          </button>
          <button className="bg-red-600/20 text-red-500 border border-red-600/50 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <Trash2 size={16} /> Borrar todo
          </button>
        </div>
      </div>

      {/* Filtros de Roles */}
      <div className="flex gap-2 bg-[#1a1d23] p-2 rounded-lg w-fit border border-gray-800">
        <FilterBadge label="Todos" count={45} active />
        <FilterBadge label="Tanques" count={13} color="border-blue-600 text-blue-400" />
        <FilterBadge label="Healers" count={10} color="border-green-600 text-green-400" />
        <FilterBadge label="DPS" count={22} color="border-red-600 text-red-400" />
      </div>

      {/* Grid de Parties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((id) => (
          <PartyCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

const PartyCard = ({ id }: { id: number }) => (
  <div className="bg-[#1a1d23] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
    <div className="p-3 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
      <div>
        <h3 className="text-xs font-black text-white uppercase tracking-tighter">Front Line Party {id}</h3>
        <p className="text-[10px] text-gray-500">👑 Líder: ---</p>
      </div>
      <div className="flex gap-1">
        <button className="p-1 hover:bg-gray-700 rounded text-gray-400"><Trash2 size={14}/></button>
      </div>
    </div>
    
    <div className="p-2 space-y-1.5">
      <PlayerRow name="PRIMOGENITO (Crusader)" role="tank" />
      <PlayerRow name="ROOBFeed (Crusader/Gladiador)" role="tank" />
      <PlayerRow name="MioKaminari (Oracle)" role="healer" />
      <PlayerRow name="RK (Seeker)" role="healer" />
      <PlayerRow name="elVIC (ShadowDancer)" role="dps" />
      <PlayerRow name="Lionnheart (Gladiador)" role="dps" />
    </div>
  </div>
);

const PlayerRow = ({ name, role }: { name: string, role: 'tank' | 'healer' | 'dps' }) => {
  const colors = {
    tank: "bg-blue-900/30 border-blue-600/50 text-blue-200",
    healer: "bg-green-900/30 border-green-600/50 text-green-200",
    dps: "bg-red-900/30 border-red-600/50 text-red-200"
  };

  return (
    <div className={`flex items-center justify-between p-2 rounded-lg border ${colors[role]} text-[11px] font-bold transition-all hover:brightness-125`}>
      <span className="truncate w-32">{name}</span>
      <div className="flex gap-2 opacity-60">
        <Crown size={14} className="hover:text-yellow-500 cursor-pointer" />
        <RefreshCw size={14} className="hover:text-white cursor-pointer" />
        <X size={14} className="hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

const FilterBadge = ({ label, count, color = "border-gray-700", active = false }: any) => (
  <button className={`px-3 py-1 rounded border text-[11px] font-bold ${active ? 'bg-indigo-600 border-indigo-500 text-white' : color}`}>
    {label} ({count})
  </button>
);