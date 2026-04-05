import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Trash2, Crown, RefreshCw, X, Shield, Heart, Crosshair } from 'lucide-react';

// --- TIPOS Y DATOS INICIALES ---
interface Player {
  id: string;
  name: string;
  class: string;
  role: 'tank' | 'healer' | 'dps';
}

const initialRoster: Player[] = [
  { id: 'p1', name: 'ROOBFeed', class: 'Crusader', role: 'tank' },
  { id: 'p2', name: 'Nahiska', class: 'Ravager', role: 'healer' },
  { id: 'p3', name: 'Dreats', class: 'Staff', role: 'dps' },
  { id: 'p4', name: 'Zerox777', class: 'Shadowdancer', role: 'dps' },
];

export const PartyBuilder = () => {
  const [roster, setRoster] = useState<Player[]>(initialRoster);
  const [parties, setParties] = useState<{ [key: string]: Player[] }>({
    'party-1': [],
    'party-2': [],
  });

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    // Si se mueve dentro de la misma lista
    if (source.droppableId === destination.droppableId) return;

    // Lógica para mover entre listas (Roster <-> Party)
    let sourceList = source.droppableId === 'roster' ? [...roster] : [...parties[source.droppableId]];
    let destList = destination.droppableId === 'roster' ? [...roster] : [...parties[destination.droppableId]];
    
    const [movedItem] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, movedItem);

    if (source.droppableId === 'roster') setRoster(sourceList);
    else setParties({ ...parties, [source.droppableId]: sourceList });

    if (destination.droppableId === 'roster') setRoster(destList);
    else setParties({ ...parties, [destination.droppableId]: destList });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 h-full text-gray-300">
        
        {/* COLUMNA IZQUIERDA: ROSTER DISPONIBLE */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-[#1a1d23] p-4 rounded-xl border border-gray-800 shadow-xl flex-1 flex flex-col">
            <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Roster Disponible</h3>
            <Droppable droppableId="roster">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2 flex-1 overflow-y-auto min-h-[200px]">
                  {roster.map((player, index) => (
                    <DraggablePlayer key={player.id} player={player} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>

        {/* AREA DERECHA: LAS PARTIES (TABLERO) */}
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {Object.keys(parties).map((partyId) => (
              <div key={partyId} className="bg-[#1a1d23] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="p-3 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
                  <h3 className="text-xs font-black text-white uppercase tracking-tighter">{partyId.replace('-', ' ')}</h3>
                  <span className="text-[10px] bg-gray-800 px-2 py-0.5 rounded text-gray-400">
                    {parties[partyId].length} / 6
                  </span>
                </div>
                
                <Droppable droppableId={partyId}>
                  {(provided, snapshot) => (
                    <div 
                      {...provided.droppableProps} 
                      ref={provided.innerRef} 
                      className={`p-2 space-y-1.5 min-h-[150px] transition-colors ${snapshot.isDraggingOver ? 'bg-indigo-500/5' : ''}`}
                    >
                      {parties[partyId].map((player, index) => (
                        <DraggablePlayer key={player.id} player={player} index={index} />
                      ))}
                      {provided.placeholder}
                      {parties[partyId].length === 0 && (
                        <div className="h-24 border-2 border-dashed border-gray-800 rounded-xl flex items-center justify-center text-[10px] text-gray-600 uppercase font-bold">
                          Suelta aquí
                        </div>
                      )}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

// --- COMPONENTE DRAGGABLE (EL JUGADOR) ---
const DraggablePlayer = ({ player, index }: { player: Player; index: number }) => {
  const roleStyles = {
    tank: "border-blue-600/50 bg-blue-900/20 text-blue-200 shadow-[inset_0_0_10px_rgba(37,99,235,0.1)]",
    healer: "border-green-600/50 bg-green-900/20 text-green-200 shadow-[inset_0_0_10px_rgba(22,163,74,0.1)]",
    dps: "border-red-600/50 bg-red-900/20 text-red-200 shadow-[inset_0_0_10px_rgba(220,38,38,0.1)]"
  };

  const RoleIcon = {
    tank: <Shield size={12} />,
    healer: <Heart size={12} />,
    dps: <Crosshair size={12} />
  };

  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
          className={`flex items-center justify-between p-2 rounded-lg border text-[11px] font-bold transition-all
            ${roleStyles[player.role]} 
            ${snapshot.isDragging ? 'z-50 scale-105 shadow-2xl rotate-2 ring-2 ring-indigo-500' : 'hover:brightness-125'}`}
        >
          <div className="flex items-center gap-2 truncate">
            {RoleIcon[player.role]}
            <span className="truncate">{player.name} <span className="text-[9px] opacity-50 font-normal">({player.class})</span></span>
          </div>
          <div className="flex gap-2 opacity-40 shrink-0">
            <Crown size={12} />
            <X size={12} />
          </div>
        </div>
      )}
    </Draggable>
  );
};