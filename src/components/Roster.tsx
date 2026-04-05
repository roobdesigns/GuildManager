import React from 'react';
import { Save, Trash2, Search, RefreshCw, X } from 'lucide-react';

export const Roster = () => {
  return (
    <div className="flex gap-6 h-full">
      {/* Sidebar de Acciones */}
      <div className="w-64 space-y-4">
        <div className="bg-[#1a1d23] p-4 rounded-xl border border-gray-800 space-y-4 shadow-xl">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Añadir al roster</h4>
          <input 
            type="text" 
            placeholder="Nombre del integrante" 
            className="w-full bg-[#0f111a] border border-gray-700 rounded-lg p-2 text-xs focus:border-indigo-500 outline-none"
          />
          <div className="grid grid-cols-3 gap-1">
             <RoleBtn label="Tanque" color="bg-blue-600" />
             <RoleBtn label="Healer" color="bg-green-600" />
             <RoleBtn label="DPS" color="bg-red-600" />
          </div>
          <button className="w-full bg-indigo-600 py-2 rounded-lg text-xs font-black uppercase tracking-tighter">Agregar al roster</button>
        </div>

        <div className="bg-[#1a1d23] p-4 rounded-xl border border-gray-800 space-y-2">
           <ActionButton label="Guardar roster" icon={<Save size={16}/>} color="bg-emerald-600" />
           <ActionButton label="Limpiar roster" icon={<Trash2 size={16}/>} color="bg-gray-700" />
        </div>
      </div>

      {/* Listado Principal por Columnas */}
      <div className="flex-1 bg-[#1a1d23] p-6 rounded-xl border border-gray-800 overflow-y-auto">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-600" size={16} />
          <input placeholder="Buscar..." className="w-full bg-[#0f111a] border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm" />
        </div>

        <div className="grid grid-cols-3 gap-6">
           <RosterColumn title="DPS" color="border-red-600/50" />
           <RosterColumn title="Tanques" color="border-blue-600/50" />
           <RosterColumn title="Healers" color="border-green-600/50" />
        </div>
      </div>
    </div>
  );
};

const RosterColumn = ({ title, color }: any) => (
  <div className="space-y-3">
    <h3 className={`text-xs font-bold uppercase p-2 border-b-2 ${color} mb-4`}>{title}</h3>
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} className={`flex items-center justify-between p-3 rounded-lg border border-gray-800 bg-[#0f111a]/50 hover:bg-white/[0.03] transition-all group`}>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-gray-200">Player_Example_{i}</span>
          <span className="text-[9px] text-gray-500 italic">(Crusader/Gladiador)</span>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <RefreshCw size={12} className="text-gray-500 hover:text-indigo-400 cursor-pointer" />
          <X size={12} className="text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    ))}
  </div>
);

const RoleBtn = ({ label, color }: any) => (
  <button className={`${color} text-[8px] font-bold py-1 rounded uppercase text-white opacity-80 hover:opacity-100`}>{label}</button>
);

const ActionButton = ({ label, icon, color }: any) => (
  <button className={`w-full ${color} flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold text-white transition-all hover:brightness-110 shadow-lg`}>
    {icon} {label}
  </button>
);