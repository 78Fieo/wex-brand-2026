import React from 'react';
import { LayoutGrid } from 'lucide-react';

/**
 * WexViewNavigator - Simple "See All Drafts" button
 * Positioned at the bottom-right, navigates back to the Drafts Index page
 * Hidden when already on the Drafts Index
 */
const WexViewNavigator = ({ activeView, onViewChange }) => {
  // Hide on the drafts index page
  if (activeView === 'drafts-index') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={() => onViewChange('drafts-index')}
        className="flex items-center gap-2.5 px-5 py-3 bg-white/95 backdrop-blur-md rounded-full shadow-wex-lg border border-[#E1E8FF] hover:bg-[#F5F8FF] hover:border-[#C8DCFF] hover:shadow-wex-xl transition-all duration-200 active:scale-[0.97] group"
      >
        <LayoutGrid className="w-5 h-5 text-[#172DA1]" />
        <span 
          className="font-semibold text-[#172DA1] whitespace-nowrap text-sm"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          See All Drafts
        </span>
      </button>
    </div>
  );
};

export default WexViewNavigator;
