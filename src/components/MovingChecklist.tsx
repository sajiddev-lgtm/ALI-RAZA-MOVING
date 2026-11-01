import React, { useState } from 'react';
import { CheckCircle2, Circle, Printer, RotateCcw, ListChecks } from 'lucide-react';

interface ChecklistItem {
  id: string;
  phase: '8 Weeks Out' | '4 Weeks Out' | '2 Weeks Out' | 'Moving Week' | 'Moving Day';
  task: string;
  category: 'Admin' | 'Packing' | 'Utilities' | 'Logistics';
  completed: boolean;
}

const INITIAL_CHECKLIST: ChecklistItem[] = [
  // 8 Weeks
  { id: 'c1', phase: '8 Weeks Out', task: 'Calculate preliminary moving budget and request binding quote', category: 'Logistics', completed: true },
  { id: 'c2', phase: '8 Weeks Out', task: 'Audit closets, attic, and garage to donate or discard unwanted items', category: 'Packing', completed: true },
  { id: 'c3', phase: '8 Weeks Out', task: 'Request medical, dental, and veterinary records transfers', category: 'Admin', completed: false },
  
  // 4 Weeks
  { id: 'c4', phase: '4 Weeks Out', task: 'Reserve building freight elevator and loading dock times with management', category: 'Logistics', completed: false },
  { id: 'c5', phase: '4 Weeks Out', task: 'File USPS change of address notice online', category: 'Admin', completed: false },
  { id: 'c6', phase: '4 Weeks Out', task: 'Order specialized wardrobe boxes and eco-packing kits', category: 'Packing', completed: false },

  // 2 Weeks
  { id: 'c7', phase: '2 Weeks Out', task: 'Schedule electric, internet, water, and gas disconnection and reconnection', category: 'Utilities', completed: false },
  { id: 'c8', phase: '2 Weeks Out', task: 'Safely dispose of hazardous items (paint, propane tanks, aerosols)', category: 'Logistics', completed: false },
  { id: 'c9', phase: '2 Weeks Out', task: 'Begin packing non-essential rooms (guest rooms, library, fine china)', category: 'Packing', completed: false },

  // Moving Week
  { id: 'c10', phase: 'Moving Week', task: 'Pack a First-Night Box (toiletries, chargers, bedding, medications, kettle)', category: 'Packing', completed: false },
  { id: 'c11', phase: 'Moving Week', task: 'Defrost and clean refrigerator and freezer 24 hours prior to loading', category: 'Logistics', completed: false },
  { id: 'c12', phase: 'Moving Week', task: 'Reconfirm truck parking clearance and building superintendent access', category: 'Admin', completed: false },

  // Moving Day
  { id: 'c13', phase: 'Moving Day', task: 'Take high-resolution photos of empty rooms and utility meter readings', category: 'Admin', completed: false },
  { id: 'c14', phase: 'Moving Day', task: 'Conduct initial walkthrough with Vanguard crew supervisor and review inventory', category: 'Logistics', completed: false },
  { id: 'c15', phase: 'Moving Day', task: 'Verify all water shutoffs and thermostat settings before locking door', category: 'Utilities', completed: false },
];

export const MovingChecklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [activePhase, setActivePhase] = useState<string>('All');
  const [filterMode, setFilterMode] = useState<'all' | 'pending' | 'completed'>('all');

  const phases = ['All', '8 Weeks Out', '4 Weeks Out', '2 Weeks Out', 'Moving Week', 'Moving Day'];

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const resetAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, completed: false })));
  };

  const filteredItems = items.filter((item) => {
    const phaseMatch = activePhase === 'All' || item.phase === activePhase;
    const statusMatch =
      filterMode === 'all' ||
      (filterMode === 'pending' && !item.completed) ||
      (filterMode === 'completed' && item.completed);
    return phaseMatch && statusMatch;
  });

  const completedCount = items.filter((i) => i.completed).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <section id="checklist" className="py-16 bg-neutral-100/60 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Relocation Planning Tool
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive 8-Week Moving Timeline Checklist
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Track critical milestones from early decluttering to moving day walkthroughs. Never misplace a task.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg transition-colors whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Checklist</span>
            </button>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Progress Metric Bar */}
        <div className="bg-white border border-neutral-200 rounded-xl p-4 sm:p-5 mb-8 shadow-xs">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-neutral-800">
              Checklist Readiness Progress: {completedCount} of {items.length} Tasks Complete
            </span>
            <span className="font-mono font-bold text-neutral-900">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
            <div
              className="h-full bg-neutral-900 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
            {phases.map((phase) => (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activePhase === phase
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-white border border-neutral-200 rounded-lg p-1 text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded font-medium ${
                filterMode === 'all' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('pending')}
              className={`px-2.5 py-1 rounded font-medium ${
                filterMode === 'pending' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-2.5 py-1 rounded font-medium ${
                filterMode === 'completed' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-2.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                item.completed
                  ? 'bg-neutral-50/70 border-neutral-200 opacity-60'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="shrink-0 text-neutral-900"
                  aria-label={item.completed ? 'Mark incomplete' : 'Mark complete'}
                >
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                  ) : (
                    <Circle className="w-5 h-5 text-neutral-400" />
                  )}
                </button>
                <div>
                  <span
                    className={`text-sm ${
                      item.completed ? 'line-through text-neutral-500' : 'font-medium text-neutral-900'
                    }`}
                  >
                    {item.task}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                    <span>{item.phase}</span>
                    <span>·</span>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="p-8 text-center text-xs text-neutral-500 bg-white rounded-xl border border-neutral-200">
              No tasks found for the selected filter combination.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
