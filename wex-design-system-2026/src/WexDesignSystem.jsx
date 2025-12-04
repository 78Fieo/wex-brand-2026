import React, { useState } from 'react';
import { 
  ArrowRight, ChevronRight, BarChart3, User, 
  Menu, Search, Check, AlertCircle, Shield, CreditCard, 
  Truck, Users, Layout, Globe, Zap, Bell, ChevronDown,
  Palette, Type, Navigation, Component, LayoutGrid, Layers, Sparkles, Monitor, Mail
} from 'lucide-react';
import wexLogoRed from './assets/wex_logo_red.svg';

/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * WEX DESIGN SYSTEM 2026 - COLOR TOKEN REFERENCE
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * PRIMARY COLORS
 * ──────────────────────────────────────────────────────────────────────────────
 * WEX Red (Primary)      #C8102E   - Primary actions, brand accent
 * WEX Red Dark           #A00D25   - Hover states, gradients
 * WEX Red Light          #FF032B   - Gradients, highlights
 * 
 * BLUES
 * ──────────────────────────────────────────────────────────────────────────────
 * Main Blue              #172DA1   - Headers, primary text, UI elements
 * Blue Dark              #122385   - Hover states, gradients
 * Accent Blue            #1C6EFF   - Gradients, UI highlights, links
 * Deep Blue              #25146F   - Footer, hero backgrounds
 * Navy Dark              #121A50   - Dark mode base, footer variant
 * 
 * ACCENTS
 * ──────────────────────────────────────────────────────────────────────────────
 * Accent Yellow          #FFBC00   - Sparks, glows, highlights
 * Yellow Dark            #E5A800   - Hover states
 * Success Green          #00C48C   - Success states, confirmations
 * 
 * NEUTRALS
 * ──────────────────────────────────────────────────────────────────────────────
 * Text Secondary         #5D688C   - Body text, descriptions
 * Text Tertiary          #7A87B2   - Placeholder, muted text
 * Border Light           #E1E8FF   - Card borders, dividers
 * Border Medium          #B1C0EE   - Input borders
 * Surface Light          #F5F8FF   - Card backgrounds
 * Surface Lighter        #FDFDFF   - Page backgrounds
 * Surface Glass          #E6EEFF   - Glass effect backgrounds
 * 
 * GRADIENTS
 * ──────────────────────────────────────────────────────────────────────────────
 * Hero Gradient          from-[#2E0055] via-[#172DA1] to-[#C8102E]
 * Data Line Gradient     from-[#8C0026] via-[#C8102E] to-[#FFBC00]
 * Glass Surface          from-[#FFFFFF] to-[#E6EEFF]
 * Dark Mode              from-[#5B0024] to-[#120046]
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const SECTIONS = [
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'navigation', label: 'Navigation', icon: Navigation },
  { id: 'components', label: 'Components', icon: Component },
  { id: 'cards', label: 'Cards', icon: LayoutGrid },
  { id: 'glass', label: 'Glass Stack', icon: Layers },
  { id: 'floating', label: 'Floating UI', icon: Sparkles },
  { id: 'dashboard', label: 'Dashboard', icon: Monitor },
  { id: 'footer', label: 'Footer', icon: Mail },
];

const WexDesignSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSection, setActiveSection] = useState('colors');

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF] font-sans text-[#172DA1]">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          STICKY NAVIGATION HEADER
          ═══════════════════════════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E1E8FF]/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img 
                src={wexLogoRed}
                alt="WEX Logo"
                className="h-6"
              />
              <div>
                <h1 className="text-xl font-bold tracking-tight text-[#172DA1]">WEX <span className="text-[#7A87B2] font-normal">Design System</span></h1>
                <p className="text-xs text-[#5D688C]">2026 Brand Guidelines</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-[#5D688C]">
              <span className="px-3 py-1 bg-[#EDF1FF] rounded-full font-medium">v2.0</span>
              <span>Effortless · Innovative · Human</span>
            </div>
          </div>
          
          {/* Section Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-[#172DA1] text-white shadow-md'
                      : 'text-[#5D688C] hover:bg-[#EDF1FF] hover:text-[#172DA1]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 01: COLOR SYSTEM
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="colors" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F8FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1C6EFF]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 01. Color System
            </h2>
            
            {/* Primary Colors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
              {/* WEX Red */}
              <div className="space-y-4 group">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#A00D25] shadow-md group-hover:shadow-lg group-hover:shadow-[#C8102E]/20 flex items-end p-5 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <span className="bg-white/95 px-3 py-1.5 text-xs font-mono font-medium rounded-md shadow-sm backdrop-blur-sm">#C8102E</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172DA1]">WEX Red</h3>
                  <p className="text-sm text-[#5D688C]">Primary Actions, Brand Accent</p>
                </div>
              </div>

              {/* Main Blue */}
              <div className="space-y-4 group">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#172DA1] to-[#122385] shadow-md group-hover:shadow-lg group-hover:shadow-[#172DA1]/20 flex items-end p-5 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <span className="bg-white/95 px-3 py-1.5 text-xs font-mono font-medium rounded-md shadow-sm backdrop-blur-sm">#172DA1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172DA1]">Main Blue</h3>
                  <p className="text-sm text-[#5D688C]">Headers, Primary Text</p>
                </div>
              </div>

              {/* Accent Blue */}
              <div className="space-y-4 group">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#1C6EFF] to-[#1559D6] shadow-md group-hover:shadow-lg group-hover:shadow-[#1C6EFF]/20 flex items-end p-5 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <span className="bg-white/95 px-3 py-1.5 text-xs font-mono font-medium rounded-md shadow-sm backdrop-blur-sm">#1C6EFF</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172DA1]">Accent Blue</h3>
                  <p className="text-sm text-[#5D688C]">Gradients, UI Highlights</p>
                </div>
              </div>

              {/* Deep Blue */}
              <div className="space-y-4 group">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#25146F] to-[#1E105A] shadow-md group-hover:shadow-lg group-hover:shadow-[#25146F]/20 flex items-end p-5 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <span className="bg-white/95 px-3 py-1.5 text-xs font-mono font-medium rounded-md shadow-sm backdrop-blur-sm">#25146F</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172DA1]">Deep Blue</h3>
                  <p className="text-sm text-[#5D688C]">Footer, Hero BG</p>
                </div>
              </div>

              {/* Accent Yellow */}
              <div className="space-y-4 group">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#FFBC00] to-[#E5A800] shadow-md group-hover:shadow-lg group-hover:shadow-[#FFBC00]/20 flex items-end p-5 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <span className="bg-white/95 px-3 py-1.5 text-xs font-mono font-medium rounded-md shadow-sm backdrop-blur-sm">#FFBC00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172DA1]">Accent Yellow</h3>
                  <p className="text-sm text-[#5D688C]">Sparks, Glows, Highlights</p>
                </div>
              </div>
            </div>

            {/* Extended Palette from P2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-gradient-to-b from-[#FFFFFF] to-[#E6EEFF] border border-[#F0F4FF] shadow-sm"></div>
                <p className="text-xs font-bold text-[#172DA1]">Glass Surface</p>
                <p className="text-[10px] text-[#7A87B2]">Linear: White → #E6EEFF</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-gradient-to-r from-[#8C0026] via-[#C8102E] to-[#FFBC00] shadow-sm"></div>
                <p className="text-xs font-bold text-[#172DA1]">Data Line</p>
                <p className="text-[10px] text-[#7A87B2]">Deep Red → Red → Yellow</p>
              </div>

              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-[#00C48C] shadow-lg shadow-green-100 flex items-center justify-center text-white">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-[#172DA1]">Success Action</p>
                <p className="text-[10px] text-[#7A87B2]">#00C48C (New Accent)</p>
              </div>

              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-gradient-to-r from-[#5B0024] to-[#120046] shadow-inner"></div>
                <p className="text-xs font-bold text-[#172DA1]">Dark Mode Base</p>
                <p className="text-[10px] text-[#7A87B2]">Red/Purple Deep Gradient</p>
              </div>
            </div>

            {/* Brand Gradients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3 group">
                <h3 className="font-bold text-[#172DA1] text-sm uppercase tracking-wider flex items-center gap-2">
                  Hero Gradient <ArrowRight className="w-4 h-4 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="h-24 rounded-2xl shadow-inner w-full bg-gradient-to-r from-[#2E0055] via-[#172DA1] to-[#C8102E] relative overflow-hidden transition-all group-hover:shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1C6EFF] to-transparent opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60"></div>
                </div>
              </div>
              <div className="space-y-3 group">
                <h3 className="font-bold text-[#172DA1] text-sm uppercase tracking-wider flex items-center gap-2">
                  UI Surface Gradient <ArrowRight className="w-4 h-4 text-[#1C6EFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="h-24 rounded-2xl border border-[#E1E8FF]/80 w-full bg-gradient-to-br from-[#FDFDFF] to-[#EDF1FF] shadow-sm transition-all group-hover:shadow-md group-hover:border-[#1C6EFF]/30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 02: TYPOGRAPHY & CONTENT
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="typography" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F8FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFBC00]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 02. Typography & Content
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Headings */}
              <div>
                <div className="mb-10 space-y-8">
                  <div className="group">
                    <span className="text-xs text-[#7A87B2] font-mono font-medium mb-2 block group-hover:text-[#1C6EFF] transition-colors">H1 / Hero</span>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#172DA1] tracking-tight drop-shadow-sm">
                      Simplifying the <br/>business of payment.
                    </h1>
                  </div>
                  <div className="group">
                    <span className="text-xs text-[#7A87B2] font-mono font-medium mb-2 block group-hover:text-[#1C6EFF] transition-colors">H2 / Section</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#172DA1] tracking-tight">
                      Driven by insight. Powered by people.
                    </h2>
                  </div>
                  <div className="group">
                    <span className="text-xs text-[#7A87B2] font-mono font-medium mb-2 block group-hover:text-[#1C6EFF] transition-colors">H3 / Card Title</span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#172DA1]">
                      Corporate Payments
                    </h3>
                  </div>
                </div>
              </div>

              {/* Body & Lists */}
              <div className="space-y-10">
                <div className="group">
                  <span className="text-xs text-[#7A87B2] font-mono font-medium mb-3 block group-hover:text-[#1C6EFF] transition-colors">Body Large</span>
                  <p className="text-[#5D688C] text-lg leading-relaxed max-w-lg">
                    WEX is the global commerce platform that simplifies the business of running a business. We focus on the details so you can focus on the growth.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F9FBFF] p-8 rounded-2xl border border-[#E1E8FF]/80 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                  <span className="text-xs text-[#7A87B2] font-mono font-medium block mb-5 tracking-wider">List Styles</span>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-[#5D688C] group">
                      <div className="w-6 h-6 rounded-full bg-[#C8102E]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C8102E]/20 transition-colors">
                        <Check className="w-3.5 h-3.5 text-[#C8102E]" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed">Seamless integration with your existing ERP systems.</span>
                    </li>
                    <li className="flex items-start gap-4 text-[#5D688C] group">
                      <div className="w-6 h-6 rounded-full bg-[#C8102E]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C8102E]/20 transition-colors">
                        <Check className="w-3.5 h-3.5 text-[#C8102E]" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed">Real-time data visualization for fleet managers.</span>
                    </li>
                    <li className="flex items-start gap-4 text-[#5D688C] group">
                      <div className="w-6 h-6 rounded-full bg-[#C8102E]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C8102E]/20 transition-colors">
                        <Check className="w-3.5 h-3.5 text-[#C8102E]" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed">24/7 customer support from real humans.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 03: NAVIGATION & LAYOUT
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="navigation" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#F9FBFF] to-[#F0F4FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C8102E]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 03. Navigation & Layout
            </h2>
            
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FF] p-10 rounded-2xl border border-[#D2DDFF]/60 space-y-10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-30 pointer-events-none"></div>
              
              {/* Desktop Nav Mockup */}
              <div className="w-full bg-gradient-to-b from-[#FDFDFF] to-[#F5F8FF] rounded-xl shadow-md border border-[#E1E8FF]/80 p-5 flex items-center justify-between backdrop-blur-sm relative z-10">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <img 
                    src={wexLogoRed}
                    alt="WEX Logo"
                    className="h-6 group-hover:opacity-80 transition-opacity"
                  />
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#5D688C]">
                  <span className="text-[#172DA1] cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#C8102E] after:rounded-full">Solutions</span>
                  <span className="hover:text-[#172DA1] cursor-pointer transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C8102E] after:rounded-full hover:after:w-full after:transition-all">Industries</span>
                  <span className="hover:text-[#172DA1] cursor-pointer transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C8102E] after:rounded-full hover:after:w-full after:transition-all">Resources</span>
                  <span className="hover:text-[#172DA1] cursor-pointer transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C8102E] after:rounded-full hover:after:w-full after:transition-all">About</span>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-5">
                  <button className="hidden md:block text-sm font-medium text-[#172DA1] hover:text-[#C8102E] transition-colors">Sign In</button>
                  <button className="bg-gradient-to-r from-[#C8102E] to-[#FF032B] hover:from-[#FF032B] hover:to-[#FF3355] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#C8102E]/30 transition-all flex items-center gap-2 group">
                    Talk to sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Menu className="md:hidden w-7 h-7 text-[#172DA1] cursor-pointer hover:text-[#C8102E] transition-colors" />
                </div>
              </div>

              {/* Spacing & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="bg-white rounded-2xl shadow-md border border-[#E1E8FF]/80 p-8 relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FDFDFF] to-[#F0F4FF] opacity-50 -z-10"></div>
                  <h3 className="text-xs font-bold text-[#7A87B2] uppercase mb-6 tracking-wider">Spacing Logic</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-[#FDFDFF] border border-[#E1E8FF]/40">
                      <div className="w-20 h-6 bg-[#C8102E]/10 rounded-md text-xs flex items-center justify-center text-[#C8102E] font-mono font-medium">py-16</div>
                      <span className="text-sm text-[#5D688C] font-medium">Section Padding (Desktop)</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-[#FDFDFF] border border-[#E1E8FF]/40">
                      <div className="w-16 h-6 bg-[#172DA1]/10 rounded-md text-xs flex items-center justify-center text-[#172DA1] font-mono font-medium">gap-8</div>
                      <span className="text-sm text-[#5D688C] font-medium">Grid Gaps</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-[#FDFDFF] border border-[#E1E8FF]/40">
                      <div className="w-24 h-6 bg-[#FFBC00]/20 rounded-md text-xs flex items-center justify-center text-[#997200] font-mono font-medium">max-w-7xl</div>
                      <span className="text-sm text-[#5D688C] font-medium">Container Width</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#25146F] to-[#1E105A] rounded-2xl shadow-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                  <h3 className="text-xs font-bold text-white/70 uppercase mb-6 tracking-wider relative z-10">Mobile Menu BG</h3>
                  <div className="absolute right-0 bottom-0 opacity-30 translate-x-1/3 translate-y-1/3 transition-transform group-hover:translate-x-1/4 group-hover:translate-y-1/4">
                    <ChevronRight className="w-56 h-56 text-[#1C6EFF]" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25146F] via-transparent to-transparent opacity-50 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 04: UI COMPONENTS
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="components" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#F9FBFF] to-[#F0F4FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1C6EFF]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 04. UI Components
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              {/* Form Elements */}
              <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FF] p-8 rounded-2xl border border-[#E1E8FF]/80 shadow-md hover:shadow-lg transition-all space-y-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <h3 className="text-sm font-bold text-[#7A87B2] uppercase tracking-wider">Form Elements</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#172DA1]">Email Address</label>
                  <div className="relative group/input">
                    <input type="text" placeholder="name@company.com" className="w-full px-5 py-3 rounded-xl border border-[#B1C0EE]/60 bg-[#FDFDFF] focus:outline-none focus:ring-2 focus:ring-[#1C6EFF]/30 focus:border-[#1C6EFF] text-[#172DA1] placeholder-[#7A87B2] shadow-sm transition-all group-hover/input:border-[#1C6EFF]/50" />
                    <User className="absolute right-4 top-3.5 w-5 h-5 text-[#B1C0EE] group-focus-within/input:text-[#1C6EFF] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#172DA1]">Company Size</label>
                  <div className="relative group/select">
                    <select className="w-full px-5 py-3 rounded-xl border border-[#B1C0EE]/60 bg-[#FDFDFF] text-[#172DA1] focus:outline-none focus:ring-2 focus:ring-[#1C6EFF]/30 focus:border-[#1C6EFF] shadow-sm transition-all appearance-none group-hover/select:border-[#1C6EFF]/50">
                      <option>1-50 Employees</option>
                      <option>51-200 Employees</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 w-5 h-5 text-[#B1C0EE] pointer-events-none group-focus-within/select:text-[#1C6EFF] transition-colors" />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 cursor-pointer group/checkbox">
                  <div className="w-6 h-6 rounded-lg border-2 border-[#B1C0EE] flex items-center justify-center text-white bg-gradient-to-br from-[#C8102E] to-[#FF032B] border-transparent transition-all shadow-sm group-hover/checkbox:shadow-md group-hover/checkbox:scale-105">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#5D688C] font-medium group-hover/checkbox:text-[#172DA1] transition-colors">Subscribe to newsletter</span>
                </div>
              </div>

              {/* Tabs & Badges */}
              <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FF] p-8 rounded-2xl border border-[#E1E8FF]/80 shadow-md hover:shadow-lg transition-all space-y-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <h3 className="text-sm font-bold text-[#7A87B2] uppercase tracking-wider">Interactive</h3>

                {/* Tab Switcher */}
                <div className="bg-[#EDF1FF] p-1.5 rounded-xl inline-flex shadow-inner">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white text-[#172DA1] shadow-md' : 'text-[#7A87B2] hover:text-[#5D688C] hover:bg-white/50'}`}
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('details')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'details' ? 'bg-white text-[#172DA1] shadow-md' : 'text-[#7A87B2] hover:text-[#5D688C] hover:bg-white/50'}`}
                  >
                    Details
                  </button>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-[#EDF1FF] text-[#172DA1] text-xs font-bold rounded-full shadow-sm hover:shadow transition-all cursor-default">Neutral</span>
                  <span className="px-4 py-1.5 bg-[#C8102E]/10 text-[#C8102E] text-xs font-bold rounded-full shadow-sm border border-[#C8102E]/20 hover:shadow hover:bg-[#C8102E]/20 transition-all cursor-default">Attention</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full shadow-sm border border-green-200 hover:shadow hover:bg-green-200 transition-all cursor-default">Success</span>
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#FFBC00]/20 to-[#FFE100]/20 text-[#8C6D00] text-xs font-bold rounded-full shadow-sm border border-[#FFBC00]/30 hover:shadow hover:from-[#FFBC00]/30 hover:to-[#FFE100]/30 transition-all cursor-default flex items-center gap-1">
                    <Zap className="w-3 h-3" fill="currentColor" /> New
                  </span>
                </div>
              </div>

              {/* Icons */}
              <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FF] p-8 rounded-2xl border border-[#E1E8FF]/80 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <h3 className="text-sm font-bold text-[#7A87B2] uppercase tracking-wider mb-6">Iconography Style</h3>
                <div className="grid grid-cols-4 gap-6 text-[#172DA1]">
                  <div className="flex flex-col items-center gap-3 group/icon">
                    <div className="p-3 rounded-xl bg-[#EDF1FF] group-hover/icon:bg-[#C8102E]/10 transition-colors shadow-sm">
                      <Truck className="w-7 h-7 group-hover/icon:text-[#C8102E] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#7A87B2] font-medium uppercase tracking-wider">Fleet</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group/icon">
                    <div className="p-3 rounded-xl bg-[#EDF1FF] group-hover/icon:bg-[#C8102E]/10 transition-colors shadow-sm">
                      <CreditCard className="w-7 h-7 group-hover/icon:text-[#C8102E] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#7A87B2] font-medium uppercase tracking-wider">Pay</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group/icon">
                    <div className="p-3 rounded-xl bg-[#EDF1FF] group-hover/icon:bg-[#C8102E]/10 transition-colors shadow-sm">
                      <Shield className="w-7 h-7 group-hover/icon:text-[#C8102E] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#7A87B2] font-medium uppercase tracking-wider">Secure</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group/icon">
                    <div className="p-3 rounded-xl bg-[#EDF1FF] group-hover/icon:bg-[#C8102E]/10 transition-colors shadow-sm">
                      <Globe className="w-7 h-7 group-hover/icon:text-[#C8102E] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#7A87B2] font-medium uppercase tracking-wider">Global</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group/icon">
                    <div className="p-3 rounded-xl bg-[#EDF1FF] group-hover/icon:bg-[#C8102E]/10 transition-colors shadow-sm">
                      <Zap className="w-7 h-7 group-hover/icon:text-[#C8102E] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#7A87B2] font-medium uppercase tracking-wider">Fast</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group/icon">
                    <div className="p-3 rounded-xl bg-[#EDF1FF] group-hover/icon:bg-[#C8102E]/10 transition-colors shadow-sm">
                      <Layout className="w-7 h-7 group-hover/icon:text-[#C8102E] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#7A87B2] font-medium uppercase tracking-wider">Platform</span>
                  </div>
                </div>
                <p className="mt-6 text-xs text-[#5D688C] font-medium leading-relaxed bg-[#EDF1FF]/50 p-3 rounded-lg">
                  Use Lucide icons. Stroke width 1.5px. Primary color #172DA1. Use #C8102E or gradient for accents/hover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 05: CARD PATTERNS
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="cards" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F8FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFBC00]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 05. Card Patterns
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Value Prop Card */}
              <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FF] p-10 rounded-3xl border border-[#E1E8FF]/80 shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#EDF1FF] to-[#D2DDFF] rounded-2xl flex items-center justify-center text-[#172DA1] mb-8 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-md">
                  <BarChart3 className="w-8 h-8 group-hover:text-[#1C6EFF] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#172DA1] mb-4 group-hover:text-[#1C6EFF] transition-colors">Data-driven insights</h3>
                <p className="text-[#5D688C] leading-relaxed mb-8 text-lg">
                  Visualize your spending across all categories with real-time dashboards and actionable reports.
                </p>
                <div className="flex items-center text-[#C8102E] font-bold text-base group/link cursor-pointer">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8102E] after:rounded-full group-hover/link:after:w-full after:transition-all">Learn more</span> <ChevronRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-[#25146F] to-[#1E105A] p-10 rounded-3xl text-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                <div className="absolute top-0 right-0 p-10 opacity-10 transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform">
                  <span className="text-[12rem] font-serif leading-none bg-gradient-to-br from-white to-transparent bg-clip-text text-transparent">"</span>
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-6 text-[#FFBC00]">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FFBC00] to-[#FFE100] shadow-sm shadow-[#FFBC00]/50"></div>)}
                  </div>
                  <p className="text-xl leading-relaxed mb-8 font-medium text-white/95">
                    "WEX transformed how we manage our entire fleet operation. It's simply effortless and has saved us countless hours."
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1C6EFF] to-[#C8102E] p-[2px] shadow-lg">
                      <div className="w-full h-full rounded-full bg-[#25146F] flex items-center justify-center overflow-hidden">
                        <User className="w-8 h-8 text-white/80" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">Jamie Rivera</p>
                      <p className="text-sm opacity-70 font-medium">Ops Director, Logistics Inc.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1E105A] to-transparent opacity-50"></div>
              </div>

              {/* Feature Card with Image */}
              <div className="relative group cursor-pointer h-full min-h-[380px] rounded-3xl shadow-md hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C6EFF] via-[#C8102E] to-[#FFBC00] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -m-[3px] blur-[2px] group-hover:blur-sm"></div>
                <div className="relative h-full bg-white rounded-3xl overflow-hidden border border-[#E1E8FF]/80 group-hover:border-transparent transition-all">
                  <div className="h-56 w-full relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                      alt="Feature" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172DA1]/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-10 right-8 w-16 h-16 bg-gradient-to-br from-[#C8102E] to-[#FF032B] rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-12 group-hover:rotate-0 transition-all">
                      <Shield className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#172DA1] mb-3 group-hover:text-[#C8102E] transition-colors">Human-First Support</h3>
                    <p className="text-base text-[#5D688C] leading-relaxed">
                      Real people answering your calls, 24/7. No robots, just solutions when you need them most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 06: GLASS STACK COMPOSITIONS (from P2)
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="glass" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F8FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 06. Glass Stack Compositions
            </h2>
            
            {/* Glass Stack Demo */}
            <div className="bg-[#E6EEFF] p-8 md:p-12 rounded-[3rem] shadow-inner relative overflow-hidden min-h-[600px] flex items-center justify-center">
              
              {/* Background Dashboard Layer */}
              <div className="absolute top-12 left-12 right-12 bottom-12 bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-8 shadow-xl opacity-90 scale-95 origin-top">
                <div className="flex justify-between items-center mb-12 opacity-50">
                  <h3 className="text-3xl font-bold text-[#172DA1]">Welcome back, Brenda</h3>
                  <div className="px-4 py-1 border border-[#172DA1]/20 rounded-full text-xs">Last 6 months</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 opacity-50 blur-[1px]">
                  <div className="bg-white/50 p-6 rounded-3xl border border-white">
                    <p className="text-sm text-[#7A87B2] font-bold mb-2">Peak usage</p>
                    <p className="text-4xl font-bold text-[#172DA1]">17,000 <span className="text-lg text-[#5D688C]">gal (may)</span></p>
                  </div>
                  <div className="bg-white/50 p-6 rounded-3xl border border-white">
                    <p className="text-sm text-[#7A87B2] font-bold mb-2">Peak usage</p>
                    <p className="text-4xl font-bold text-[#172DA1]">17,000 <span className="text-lg text-[#5D688C]">gal (may)</span></p>
                  </div>
                </div>
                
                {/* Background Chart */}
                <div className="mt-12 h-64 w-full opacity-30">
                  <svg viewBox="0 0 100 40" className="w-full h-full fill-[#172DA1] stroke-none">
                    <path d="M0,40 L0,30 C10,28 20,35 30,25 C40,15 50,18 60,10 C70,15 80,25 90,28 L100,30 L100,40 Z" />
                  </svg>
                </div>
              </div>

              {/* Foreground Mobile Card */}
              <div className="relative z-10 w-80 bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(23,45,161,0.25)] p-6 border border-white ring-1 ring-[#E1E8FF] transform -translate-x-12 hover:translate-y-[-10px] transition-transform duration-500">
                <div className="w-12 h-12 rounded-full bg-[#EDF4FF] mb-6"></div>
                
                {/* Invested Amount */}
                <div className="mb-8">
                  <p className="text-xs font-bold text-[#5D688C] mb-1">Invested amount</p>
                  <h2 className="text-4xl font-bold text-[#172DA1] mb-2">$350.10</h2>
                  <div className="w-16 h-1 bg-[#EDF4FF] rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-[#172DA1] rounded-full"></div>
                  </div>
                  
                  {/* Chart Line */}
                  <div className="h-24 mt-6 w-full relative">
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#8C0026" />
                          <stop offset="50%" stopColor="#C8102E" />
                          <stop offset="100%" stopColor="#FFBC00" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,35 Q10,25 20,30 T40,15 T60,25 T80,20 T100,28" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Donut Chart */}
                <div className="pt-6 border-t border-[#F5F7FF]">
                  <p className="text-xs font-bold text-[#5D688C] mb-4">Portfolio Breakdown</p>
                  <div className="flex items-center justify-center relative w-40 h-40 mx-auto">
                    <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                      <path className="text-[#F0F4FF]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path className="text-[#121A50]" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path className="text-[#1C6EFF]" strokeDasharray="20, 100" strokeDashoffset="-40" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-[#172DA1]">6</span>
                      <span className="text-[10px] text-[#5D688C]">Funds</span>
                    </div>
                  </div>
                  {/* Legend */}
                  <div className="mt-6 space-y-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-2 items-center">
                        <div className={`w-2 h-2 rounded-full ${i===1 ? 'bg-[#121A50]' : i===2 ? 'bg-[#172DA1]' : 'bg-[#1C6EFF]'}`}></div>
                        <div className="h-2 w-full bg-[#F0F4FF] rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 07: FLOATING UI ELEMENTS (from P2)
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="floating" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F8FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 07. Floating "Pulse" UI
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              
              {/* Floating Row Concept */}
              <div className="relative group">
                <div className="bg-[#F5F8FF] p-8 rounded-[2rem] pt-16 pb-32 border border-white shadow-sm">
                  <h3 className="text-[#172DA1] font-bold text-lg mb-2 text-center">Payments Dashboard</h3>
                  <div className="w-32 h-2 bg-[#E1E8FF] rounded-full mx-auto"></div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E1E8FF] flex items-center justify-between transition-transform group-hover:scale-105">
                  <div className="flex-1 px-4 border-r border-[#F5F7FF]">
                    <p className="text-[10px] font-bold text-[#172DA1] uppercase">Activity</p>
                    <p className="text-sm text-[#5D688C]">2/3/25</p>
                  </div>
                  <div className="flex-[2] px-4 border-r border-[#F5F7FF]">
                    <p className="text-[10px] font-bold text-[#172DA1] uppercase">Card Name</p>
                    <p className="text-sm font-medium text-[#172DA1]">Rose Smith</p>
                  </div>
                  <div className="flex-1 px-4 text-right">
                    <p className="text-[10px] font-bold text-[#172DA1] uppercase">Amount</p>
                    <p className="text-sm font-medium text-[#172DA1]">$130.00</p>
                  </div>
                  <div className="ml-4 w-10 h-10 rounded-full bg-[#00C48C] flex items-center justify-center text-white shadow-lg shadow-green-200">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Notification Card */}
              <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F0F4FF] p-8 rounded-[2rem] border border-[#E1E8FF] shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-bold text-[#172DA1] text-lg">Payment Received</h3>
                  <div className="w-12 h-1 bg-[#172DA1] rounded-full opacity-20"></div>
                </div>

                <div className="text-center py-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#EDF4FF] to-transparent opacity-50 rounded-xl -z-10"></div>
                  <h2 className="text-5xl font-bold text-[#172DA1] tracking-tight mb-2">$22.50</h2>
                  <span className="text-xs font-bold text-[#172DA1] uppercase tracking-wider bg-[#E1E8FF] px-3 py-1 rounded-full">Medical</span>
                </div>

                <div className="flex justify-center mt-8">
                  <div className="w-12 h-12 rounded-full bg-[#00C48C] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(0,196,140,0.4)] transform group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6" strokeWidth={4} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#E6EEFF] to-transparent -z-10 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 08: PRODUCT DASHBOARD
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="dashboard" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#F9FBFF] to-[#F0F4FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C8102E]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 08. Product UI Language
            </h2>

            <div className="w-full bg-gradient-to-br from-[#EDF1FF] to-[#D2DDFF] p-10 rounded-[2.5rem] border border-[#D2DDFF]/60 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFFFFF]/20 to-transparent pointer-events-none"></div>
              <div className="bg-white rounded-2xl shadow-2xl border border-[#E1E8FF]/80 overflow-hidden max-w-5xl mx-auto relative z-10">
                
                {/* Browser Header */}
                <div className="bg-white border-b border-[#E1E8FF] px-8 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <h3 className="font-bold text-[#172DA1] text-xl tracking-tight">Overview</h3>
                    <div className="flex bg-[#F5F7FF] rounded-xl p-1.5 shadow-inner">
                      <button className="px-5 py-2 bg-white shadow-sm rounded-lg text-xs font-bold text-[#172DA1] transition-all">Spending</button>
                      <button className="px-5 py-2 text-xs font-medium text-[#7A87B2] hover:text-[#172DA1] hover:bg-white/50 rounded-lg transition-all">Drivers</button>
                      <button className="px-5 py-2 text-xs font-medium text-[#7A87B2] hover:text-[#172DA1] hover:bg-white/50 rounded-lg transition-all">Reports</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="relative group/search">
                      <Search className="w-5 h-5 text-[#B1C0EE] absolute left-4 top-2.5 group-focus-within/search:text-[#1C6EFF] transition-colors" />
                      <input className="pl-12 pr-5 py-2.5 bg-[#F5F7FF] rounded-full text-sm border border-transparent focus:border-[#1C6EFF]/30 focus:bg-white focus:ring-2 focus:ring-[#1C6EFF]/20 w-64 transition-all shadow-sm" placeholder="Search transactions..." />
                    </div>
                    <button className="relative p-2 rounded-full hover:bg-[#F5F7FF] transition-colors">
                      <Bell className="w-6 h-6 text-[#B1C0EE] hover:text-[#172DA1] transition-colors" />
                      <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#C8102E] rounded-full border-2 border-white"></span>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] p-[2px] shadow-md cursor-pointer hover:shadow-lg transition-all">
                      <div className="w-full h-full rounded-full bg-white overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=68" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-[#FDFDFF]">
                  {/* Stats */}
                  <div className="col-span-2 space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl border border-[#E1E8FF]/80 bg-white shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider">Total Balance</p>
                          <div className="p-2 rounded-full bg-[#EDF1FF] group-hover:bg-[#1C6EFF]/10 transition-colors">
                            <CreditCard className="w-4 h-4 text-[#1C6EFF]" />
                          </div>
                        </div>
                        <p className="text-4xl font-bold text-[#172DA1] tracking-tight">$24,500.23</p>
                        <div className="mt-3 flex items-center text-sm text-green-600 font-bold bg-green-50 py-1 px-2 rounded-full inline-flex">
                          <ArrowRight className="w-4 h-4 -rotate-45 mr-1" strokeWidth={2.5} /> +12% this month
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl border border-[#E1E8FF]/80 bg-white shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider">Active Cards</p>
                          <div className="p-2 rounded-full bg-[#EDF1FF] group-hover:bg-[#1C6EFF]/10 transition-colors">
                            <Users className="w-4 h-4 text-[#1C6EFF]" />
                          </div>
                        </div>
                        <p className="text-4xl font-bold text-[#172DA1] tracking-tight">142</p>
                        <div className="mt-3 flex items-center text-sm text-[#5D688C] bg-[#F5F7FF] py-1 px-2 rounded-full inline-flex">
                          <AlertCircle className="w-4 h-4 mr-1 text-[#FFBC00]" /> 2 cards pending
                        </div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="p-8 rounded-2xl border border-[#E1E8FF]/80 bg-white shadow-sm h-64 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#172DA1] text-white shadow-sm">
                            <BarChart3 className="w-5 h-5" />
                          </div>
                          <span className="text-lg font-bold text-[#172DA1]">Transaction Volume</span>
                        </div>
                        <span className="px-3 py-1 bg-[#EDF1FF] rounded-full text-xs text-[#5D688C] font-medium shadow-sm">Last 30 Days</span>
                      </div>
                      
                      <div className="flex items-end justify-between gap-3 h-full relative z-10">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 65].map((h, i) => (
                          <div key={i} className="w-full bg-[#EDF1FF] rounded-t-md relative group/bar overflow-hidden">
                            <div 
                              style={{height: `${h}%`}} 
                              className="absolute bottom-0 w-full bg-gradient-to-t from-[#172DA1] to-[#1C6EFF] rounded-t-md opacity-80 group-hover/bar:opacity-100 transition-all group-hover/bar:shadow-[0_0_10px_rgba(28,110,255,0.3)]"
                            ></div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl border border-[#E1E8FF]/80 bg-white shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-sm font-bold text-[#172DA1] uppercase tracking-wider">Recent Activity</h4>
                        <button className="text-xs text-[#1C6EFF] font-bold hover:underline">View All</button>
                      </div>
                      <div className="space-y-4">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="flex items-center justify-between pb-4 border-b border-[#F5F7FF] last:border-0 last:pb-0 group/item cursor-pointer">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-[#EDF1FF] flex items-center justify-center text-[#1C6EFF] group-hover/item:bg-[#1C6EFF] group-hover/item:text-white transition-all shadow-sm">
                                {i % 2 === 0 ? <Truck className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-[#172DA1] group-hover/item:text-[#1C6EFF] transition-colors">{i % 2 === 0 ? 'Fuel Station' : 'EV Charging'}</p>
                                <p className="text-xs text-[#7A87B2] font-medium">Today, 10:4{i} AM</p>
                              </div>
                            </div>
                            <span className="text-sm font-bold text-[#172DA1]">-${(45 + i * 12).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2E0055] to-[#172DA1] text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                      <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <Shield className="w-24 h-24" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 relative z-10">Need help?</h4>
                      <p className="text-sm opacity-90 mb-6 leading-relaxed relative z-10 font-medium">Our human support team is available 24/7 to assist you.</p>
                      <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all border border-white/20 hover:border-white/40 shadow-sm relative z-10 flex items-center justify-center gap-2 group/btn">
                        Contact Support <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 09: FOOTER
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="footer" className="scroll-mt-40">
          <footer className="bg-gradient-to-br from-[#25146F] to-[#1E105A] rounded-t-[3rem] p-16 text-white relative overflow-hidden shadow-[0_-10px_40px_rgba(37,20,111,0.3)]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#C8102E] to-[#FF032B] rounded-lg rotate-45 shadow-lg group-hover:shadow-[#C8102E]/50 transition-all"></div>
                  <span className="font-bold text-2xl tracking-tight group-hover:text-[#FFBC00] transition-colors">wex</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-medium">
                  Simplifying the business of running a business.<br/><br/>
                  © 2024 WEX Inc.<br/>All rights reserved.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-lg relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-[#C8102E] after:rounded-full">Solutions</h4>
                <ul className="space-y-4 text-sm text-white/70 font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" /> Fleet Cards</li>
                  <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" /> Corporate Payments</li>
                  <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" /> Health Benefits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-lg relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-[#C8102E] after:rounded-full">Company</h4>
                <ul className="space-y-4 text-sm text-white/70 font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" /> About Us</li>
                  <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" /> Careers</li>
                  <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" /> Investors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-lg relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-[#C8102E] after:rounded-full">Connect</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#C8102E] hover:to-[#FF032B] transition-all cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#C8102E]/30 group">
                    <span className="text-sm font-bold group-hover:scale-110 transition-transform">in</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#C8102E] hover:to-[#FF032B] transition-all cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#C8102E]/30 group">
                    <span className="text-sm font-bold group-hover:scale-110 transition-transform">X</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#1C6EFF]/30 to-transparent rounded-full blur-[100px] mix-blend-overlay"></div>
              <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-[#C8102E]/20 to-transparent rounded-full blur-[100px] mix-blend-overlay"></div>
            </div>
          </footer>
        </section>

      </div>
    </div>
  );
};

export default WexDesignSystem;



