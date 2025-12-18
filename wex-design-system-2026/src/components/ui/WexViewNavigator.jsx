import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Home, LayoutDashboard, FileEdit, 
  Sparkles, Palette, Layers
} from 'lucide-react';

/**
 * WexViewNavigator - Expand/Collapse Navigation for View Switching
 * Positioned at the top of the page with expand/collapse functionality
 */
const WexViewNavigator = ({ views, activeView, onViewChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map view ids to icons
  const getIcon = (viewId) => {
    switch (viewId) {
      case 'homepage': return Home;
      case 'dashboard': return LayoutDashboard;
      case 'draft': return FileEdit;
      case 'draft-v2': return FileEdit;
      case 'draft-v3': return FileEdit;
      case 'draft-v4': return Sparkles;
      case 'draft-v4-1': return Sparkles;
      case 'draft-v4-2': return Sparkles;
      case 'draft-v5': return Sparkles;
      case 'draft-v5-1': return Sparkles;
      case 'design-system': return Palette;
      default: return Layers;
    }
  };

  const activeViewData = views.find(v => v.id === activeView);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#E1E8FF] overflow-hidden transition-all duration-300">
        {/* Expanded State - Shows all views (opens upward) */}
        <div 
          className={`overflow-y-auto transition-all duration-300 ${
            isExpanded ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-b border-[#E1E8FF]/60 py-2 px-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 min-w-[320px]">
              {views.map((view) => {
                const Icon = getIcon(view.id);
                const isActive = activeView === view.id;
                
                return (
                  <button
                    key={view.id}
                    onClick={() => {
                      onViewChange(view.id);
                      setIsExpanded(false);
                    }}
                    className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl text-[10px] font-bold transition-all ${
                      isActive
                        ? 'bg-[#172DA1] text-white shadow-md'
                        : 'text-[#5D688C] hover:bg-[#EDF1FF] hover:text-[#172DA1]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="whitespace-nowrap uppercase tracking-tighter">{view.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Collapsed State - Shows active view + expand button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 px-4 py-3 w-full hover:bg-[#F5F7FF] transition-colors"
        >
          {activeViewData && (
            <>
              {React.createElement(getIcon(activeViewData.id), { 
                className: "w-5 h-5 text-[#172DA1]" 
              })}
              <span className="font-semibold text-[#172DA1] whitespace-nowrap">{activeViewData.label}</span>
            </>
          )}
          <div className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#E1E8FF]">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-[#172DA1]" />
            ) : (
              <ChevronUp className="w-4 h-4 text-[#172DA1]" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default WexViewNavigator;
