import React from 'react';
import { 
  Sparkles, Palette, FileEdit, Home, LayoutDashboard, 
  Layers, ArrowRight, Zap
} from 'lucide-react';
import wexLogo from '../assets/wex_logo_red.svg';

/**
 * DraftsIndex - Main hub for prototype exploration
 * Organizes all drafts into "Concepts" (featured) and "Drafts" (all others)
 */
const DraftsIndex = ({ onViewChange }) => {
  // Featured concepts - larger, more prominent cards
  const concepts = [
    { 
      id: 'draft-v2', 
      label: 'Hero Dashboard', 
      description: 'Immersive card-based home with branded hero section and clear account overview',
      icon: FileEdit,
      gradient: 'from-[#172DA1] to-[#1C6EFF]'
    },
    { 
      id: 'draft-v4-2', 
      label: 'Smart Assistant', 
      description: 'AI-forward experience with intelligent composer and proactive contextual suggestions',
      icon: Sparkles,
      gradient: 'from-[#25146F] to-[#172DA1]'
    },
    { 
      id: 'draft-v5-1', 
      label: 'Adaptive Flow', 
      description: 'Minimalist, morphing interface that evolves based on user intent and conversation',
      icon: Zap,
      gradient: 'from-[#C8102E] to-[#FF032B]'
    },
    { 
      id: 'design-system', 
      label: 'Design System', 
      description: 'Component library and design tokens reference',
      icon: Palette,
      gradient: 'from-[#00C48C] to-[#1C6EFF]'
    },
  ];

  // All other drafts
  const drafts = [
    { id: 'homepage', label: 'Homepage', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'draft', label: 'New Draft', icon: FileEdit },
    { id: 'draft-v2-1', label: 'Draft V2.1', icon: Layers },
    { id: 'draft-v2-2', label: 'Draft V2.2', icon: Layers },
    { id: 'draft-v2-3', label: 'Draft V2.3', icon: Layers },
    { id: 'draft-v3', label: 'Draft V3', icon: FileEdit },
    { id: 'draft-v4', label: 'Draft V4 (AI)', icon: Sparkles },
    { id: 'draft-v4-1', label: 'Draft V4.1', icon: Sparkles },
    { id: 'draft-v5', label: 'V5 AI-Forward', icon: Sparkles },
    { id: 'draft-v5-2', label: 'V5.2 Refined', icon: Layers },
    { id: 'draft-v6', label: 'V6 Segment', icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #172DA1 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Hero Section */}
      <header className="relative pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={wexLogo} alt="WEX" className="h-10" />
          </div>
          
          {/* Title */}
          <h1 
            className="text-5xl md:text-6xl font-bold text-[#172DA1] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Design System 2026
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl text-[#5D688C] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Prototype exploration hub for the WEX Benefits Dashboard redesign
          </p>

          {/* Decorative line */}
          <div className="mt-10 flex justify-center items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8102E]" />
            <div className="w-2 h-2 rounded-full bg-[#C8102E]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8102E]" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Concepts Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#C8102E] rounded-full" />
              <h2 
                className="text-sm font-bold text-[#5D688C] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Concepts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {concepts.map((concept) => {
                const Icon = concept.icon;
                return (
                  <button
                    key={concept.id}
                    onClick={() => onViewChange(concept.id)}
                    className="group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-wex-xl active:scale-[0.98] bg-white border border-[#E1E8FF] shadow-wex-card"
                  >
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${concept.gradient}`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${concept.gradient} mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-xl font-bold text-[#172DA1] mb-2 group-hover:text-[#1C6EFF] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {concept.label}
                    </h3>
                    <p 
                      className="text-sm text-[#5D688C] leading-relaxed mb-4"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {concept.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-[#1C6EFF] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-8px] group-hover:translate-x-0">
                      <span>View prototype</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Drafts Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#172DA1] rounded-full" />
              <h2 
                className="text-sm font-bold text-[#5D688C] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Drafts
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {drafts.map((draft) => {
                const Icon = draft.icon;
                return (
                  <button
                    key={draft.id}
                    onClick={() => onViewChange(draft.id)}
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-[#E1E8FF]/60 hover:border-[#C8DCFF] hover:bg-[#F5F8FF] hover:shadow-wex-sm transition-all duration-200 active:scale-[0.97]"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EDF1FF] group-hover:bg-[#172DA1] transition-colors">
                      <Icon className="w-5 h-5 text-[#172DA1] group-hover:text-white transition-colors" />
                    </div>
                    <span 
                      className="text-xs font-semibold text-[#5D688C] group-hover:text-[#172DA1] text-center transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {draft.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-[#E1E8FF]">
        <div className="max-w-5xl mx-auto text-center">
          <p 
            className="text-sm text-[#7A87B2]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            WEX Inc. · Design System Exploration · 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DraftsIndex;

