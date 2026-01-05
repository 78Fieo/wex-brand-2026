import React, { useState } from 'react';
import { 
  ArrowRight, ChevronRight, BarChart3, User, 
  Menu, Search, Check, AlertCircle, Shield, CreditCard, 
  Truck, Users, Layout, Globe, Zap, Bell, ChevronDown,
  Palette, Type, Navigation, Component, LayoutGrid, Layers, Sparkles, Monitor, Mail,
  Fingerprint, TrendingUp, Wallet, Activity, Scan, Upload, Receipt, 
  Camera, Mic, X, Plus, Minus, ChevronUp, DollarSign, PiggyBank, Target, Rocket, Clock
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
  { id: 'brand-dna', label: 'Brand DNA', icon: Fingerprint },
  { id: 'explorations', label: '2026 Explorations', icon: Rocket },
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
            SECTION 08: BRAND DNA - UNIQUE PATTERNS
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="brand-dna" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F8FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C8102E]/5 via-[#1C6EFF]/5 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 08. Brand DNA — Unique Patterns
            </h2>
            <p className="text-[#5D688C] mb-10 max-w-2xl">
              These patterns differentiate WEX dashboards from generic templates. Apply them to make interfaces feel proprietary and polished.
            </p>

            <div className="space-y-16">
              
              {/* ─────────────────────────────────────────────────────────────────
                  PATTERN 1: GLASS STACK DEPTH
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#172DA1] to-[#1C6EFF] flex items-center justify-center text-white shadow-md">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172DA1] text-lg">Glass Stack Depth</h3>
                    <p className="text-sm text-[#5D688C]">Cards with a subtle "stacked" layer behind them create physical depth</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Before: Flat Card */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">❌ Generic (Flat)</span>
                    <div className="bg-white p-8 rounded-2xl border border-[#E1E8FF] shadow-sm">
                      <p className="text-xs text-[#7A87B2] font-bold uppercase mb-2">Account Balance</p>
                      <p className="text-4xl font-bold text-[#172DA1]">$120,544.00</p>
                      <p className="text-sm text-[#5D688C] mt-2">Includes $250.00 from 2025</p>
                    </div>
                  </div>
                  
                  {/* After: Glass Stack */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#00C48C] uppercase tracking-wider">✓ WEX Branded (Glass Stack)</span>
                    <div className="relative group cursor-pointer">
                      {/* The "Under" Layer */}
                      <div className="absolute inset-0 bg-white/60 translate-y-3 scale-[0.97] rounded-[2rem] border border-[#E1E8FF]/50 shadow-lg -z-10 transition-transform duration-300 group-hover:translate-y-4 group-hover:scale-[0.95]"></div>
                      <div className="absolute inset-0 bg-white/40 translate-y-6 scale-[0.94] rounded-[2rem] border border-[#E1E8FF]/30 shadow-md -z-20 transition-transform duration-300 group-hover:translate-y-8 group-hover:scale-[0.92]"></div>
                      
                      {/* Main Card */}
                      <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] border border-[#E1E8FF]/60 shadow-[0_20px_50px_-12px_rgba(23,45,161,0.15)] transition-all duration-300 group-hover:shadow-[0_25px_60px_-12px_rgba(23,45,161,0.2)]">
                        <p className="text-xs text-[#7A87B2] font-bold uppercase mb-2">Account Balance</p>
                        <p className="text-4xl font-bold text-[#172DA1]">$120,544.00</p>
                        <p className="text-sm text-[#5D688C] mt-2">Includes $250.00 from 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  PATTERN 2: DATA LINE GRADIENTS
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8C0026] via-[#C8102E] to-[#FFBC00] flex items-center justify-center text-white shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172DA1] text-lg">Data Line Gradient</h3>
                    <p className="text-sm text-[#5D688C]">Use the brand gradient (Red → Yellow) for charts instead of solid colors</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Before: Solid Line */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">❌ Generic (Solid Blue)</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF] shadow-sm">
                      <div className="h-32 relative">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                          <path 
                            d="M0,35 Q15,28 25,30 T45,20 T65,25 T85,15 T100,22" 
                            fill="none" 
                            stroke="#1C6EFF" 
                            strokeWidth="3" 
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-[#7A87B2] text-center mt-2">Spending Trend (6 months)</p>
                    </div>
                  </div>
                  
                  {/* After: Gradient Line */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#00C48C] uppercase tracking-wider">✓ WEX Branded (Data Gradient)</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF] shadow-sm">
                      <div className="h-32 relative">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="wexDataGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#8C0026" />
                              <stop offset="50%" stopColor="#C8102E" />
                              <stop offset="100%" stopColor="#FFBC00" />
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          <path 
                            d="M0,35 Q15,28 25,30 T45,20 T65,25 T85,15 T100,22" 
                            fill="none" 
                            stroke="url(#wexDataGradient)" 
                            strokeWidth="3" 
                            strokeLinecap="round"
                            filter="url(#glow)"
                          />
                          {/* Endpoint dot */}
                          <circle cx="100" cy="22" r="4" fill="#FFBC00" className="animate-pulse" />
                        </svg>
                      </div>
                      <p className="text-xs text-[#7A87B2] text-center mt-2">Spending Trend (6 months)</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar Example */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">❌ Generic Progress</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF]">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#5D688C]">FSA Used</span>
                        <span className="font-bold text-[#172DA1]">65%</span>
                      </div>
                      <div className="h-3 bg-[#EDF1FF] rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-[#1C6EFF] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#00C48C] uppercase tracking-wider">✓ WEX Branded Progress</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF]">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#5D688C]">FSA Used</span>
                        <span className="font-bold text-[#172DA1]">65%</span>
                      </div>
                      <div className="h-3 bg-[#EDF1FF] rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-gradient-to-r from-[#8C0026] via-[#C8102E] to-[#FFBC00] rounded-full shadow-[0_0_10px_rgba(200,16,46,0.4)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  PATTERN 3: COLORED SHADOWS (GLOWS)
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8102E] to-[#FF032B] flex items-center justify-center text-white shadow-lg shadow-[#C8102E]/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172DA1] text-lg">Colored Shadows (Glows)</h3>
                    <p className="text-sm text-[#5D688C]">Hover states emit brand-colored glows instead of neutral gray shadows</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Generic Shadow */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#C8102E] uppercase tracking-wider">❌ Gray Shadow</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF] hover:shadow-xl transition-all cursor-pointer flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#EDF1FF] flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-[#172DA1]" />
                      </div>
                      <span className="text-sm font-bold text-[#172DA1]">Pay Provider</span>
                    </div>
                  </div>
                  
                  {/* Blue Glow */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#00C48C] uppercase tracking-wider">✓ Blue Glow</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF] hover:shadow-xl hover:shadow-[#1C6EFF]/20 hover:border-[#1C6EFF]/30 transition-all cursor-pointer flex flex-col items-center gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-[#EDF1FF] flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                        <Wallet className="w-6 h-6 text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors" />
                      </div>
                      <span className="text-sm font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">Pay Provider</span>
                    </div>
                  </div>
                  
                  {/* Red Glow */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#00C48C] uppercase tracking-wider">✓ Red Glow</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF] hover:shadow-xl hover:shadow-[#C8102E]/20 hover:border-[#C8102E]/30 transition-all cursor-pointer flex flex-col items-center gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] flex items-center justify-center group-hover:bg-[#C8102E]/15 transition-colors">
                        <AlertCircle className="w-6 h-6 text-[#C8102E]" />
                      </div>
                      <span className="text-sm font-bold text-[#172DA1] group-hover:text-[#C8102E] transition-colors">Action Req.</span>
                    </div>
                  </div>
                  
                  {/* Green Glow */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#00C48C] uppercase tracking-wider">✓ Green Glow</span>
                    <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF] hover:shadow-xl hover:shadow-[#00C48C]/20 hover:border-[#00C48C]/30 transition-all cursor-pointer flex flex-col items-center gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-[#00C48C]/15 transition-colors">
                        <Check className="w-6 h-6 text-[#00C48C]" />
                      </div>
                      <span className="text-sm font-bold text-[#172DA1] group-hover:text-[#00C48C] transition-colors">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  PATTERN 4: AMBIENT BACKGROUND BLOBS
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25146F] to-[#1C6EFF] flex items-center justify-center text-white shadow-md">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172DA1] text-lg">Ambient Background Blobs</h3>
                    <p className="text-sm text-[#5D688C]">Large, blurred gradient orbs add atmosphere instead of flat backgrounds</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Before: Flat Background */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">❌ Flat Background</span>
                    <div className="bg-[#F5F8FF] p-8 rounded-2xl border border-[#E1E8FF] min-h-[200px] flex items-center justify-center">
                      <div className="bg-white p-6 rounded-xl shadow-md border border-[#E1E8FF] text-center">
                        <p className="text-2xl font-bold text-[#172DA1]">$3,250.00</p>
                        <p className="text-sm text-[#5D688C]">HSA Balance</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* After: Ambient Blobs */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#00C48C] uppercase tracking-wider">✓ With Ambient Blobs</span>
                    <div className="bg-[#F5F8FF] p-8 rounded-2xl border border-[#E1E8FF] min-h-[200px] flex items-center justify-center relative overflow-hidden">
                      {/* Ambient Blobs */}
                      <div className="absolute top-[-50%] right-[-20%] w-[300px] h-[300px] bg-[#1C6EFF]/10 rounded-full blur-[80px] pointer-events-none"></div>
                      <div className="absolute bottom-[-30%] left-[-10%] w-[250px] h-[250px] bg-[#C8102E]/8 rounded-full blur-[60px] pointer-events-none"></div>
                      <div className="absolute top-[20%] left-[30%] w-[150px] h-[150px] bg-[#FFBC00]/10 rounded-full blur-[50px] pointer-events-none"></div>
                      
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-center relative z-10">
                        <p className="text-2xl font-bold text-[#172DA1]">$3,250.00</p>
                        <p className="text-sm text-[#5D688C]">HSA Balance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  PATTERN 5: FLOATING NOTIFICATION BREAK
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C48C] to-[#00A77B] flex items-center justify-center text-white shadow-md">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172DA1] text-lg">Floating Notification Break</h3>
                    <p className="text-sm text-[#5D688C]">Important items "float" above the grid, breaking alignment to draw attention</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Before: Inline List */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">❌ Standard List</span>
                    <div className="bg-white rounded-2xl border border-[#E1E8FF] divide-y divide-[#F5F7FF]">
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#FFF0F2] flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-[#C8102E]" />
                          </div>
                          <div>
                            <p className="font-bold text-[#172DA1] text-sm">Missing Receipt</p>
                            <p className="text-xs text-[#5D688C]">Dr. Smith - $150.00</p>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 bg-[#172DA1] text-white text-xs font-bold rounded-lg">Upload</button>
                      </div>
                      <div className="p-4 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#EDF1FF] flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-[#172DA1]" />
                          </div>
                          <div>
                            <p className="font-bold text-[#172DA1] text-sm">Card Activated</p>
                            <p className="text-xs text-[#5D688C]">HSA Card •• 4492</p>
                          </div>
                        </div>
                        <span className="text-xs text-[#00C48C] font-bold">Done</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* After: Floating Break */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#00C48C] uppercase tracking-wider">✓ Floating Priority</span>
                    <div className="relative">
                      {/* Background content (blurred) */}
                      <div className="bg-white rounded-2xl border border-[#E1E8FF] divide-y divide-[#F5F7FF] opacity-60 blur-[1px]">
                        <div className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#EDF1FF]"></div>
                            <div>
                              <div className="h-3 w-24 bg-[#EDF1FF] rounded mb-1"></div>
                              <div className="h-2 w-16 bg-[#F5F7FF] rounded"></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#EDF1FF]"></div>
                            <div>
                              <div className="h-3 w-20 bg-[#EDF1FF] rounded mb-1"></div>
                              <div className="h-2 w-14 bg-[#F5F7FF] rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Card */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(200,16,46,0.15)] border-2 border-[#C8102E]/20 flex items-center justify-between z-10">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF0F2] to-[#FFE0E5] flex items-center justify-center shadow-sm">
                            <AlertCircle className="w-6 h-6 text-[#C8102E]" />
                          </div>
                          <div>
                            <p className="font-bold text-[#172DA1]">Missing Receipt</p>
                            <p className="text-sm text-[#5D688C]">Dr. Smith - $150.00</p>
                          </div>
                        </div>
                        <button className="px-5 py-2.5 bg-gradient-to-r from-[#C8102E] to-[#FF032B] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#C8102E]/20 hover:shadow-xl hover:shadow-[#C8102E]/30 transition-all">
                          Upload Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  QUICK REFERENCE TABLE
                  ───────────────────────────────────────────────────────────────── */}
              <div className="mt-16 p-8 bg-gradient-to-br from-[#172DA1] to-[#25146F] rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1C6EFF]/20 rounded-full blur-[80px] pointer-events-none"></div>
                <h3 className="font-bold text-xl mb-6 relative z-10">Quick Reference: Brand DNA Tokens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <code className="px-2 py-1 bg-white/10 rounded font-mono text-xs">rounded-[2rem]</code>
                      <span className="text-white/80">Card corners (not 8px/12px)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <code className="px-2 py-1 bg-white/10 rounded font-mono text-xs">border-[#E1E8FF]</code>
                      <span className="text-white/80">Border color (not gray-200)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <code className="px-2 py-1 bg-white/10 rounded font-mono text-xs">text-[#172DA1]</code>
                      <span className="text-white/80">Heading color (not black)</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <code className="px-2 py-1 bg-white/10 rounded font-mono text-xs">shadow-[color]/20</code>
                      <span className="text-white/80">Colored glow on hover</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <code className="px-2 py-1 bg-white/10 rounded font-mono text-xs">backdrop-blur-xl</code>
                      <span className="text-white/80">Glass effect on cards</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <code className="px-2 py-1 bg-white/10 rounded font-mono text-xs">blur-[80px]</code>
                      <span className="text-white/80">Ambient background blobs</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 09: 2026 UI EXPLORATIONS
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="explorations" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#0F0A1F] via-[#1A1035] to-[#25146F] p-10 rounded-3xl shadow-2xl border border-[#3D2A8A]/30 relative overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#C8102E]/30 via-[#FF032B]/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-30%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-[#1C6EFF]/20 via-[#172DA1]/15 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-[#FFBC00]/10 rounded-full blur-[60px] pointer-events-none"></div>
            
            <h2 className="text-xl font-semibold uppercase tracking-wider text-white/60 mb-4 flex items-center gap-3 relative z-10">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#FFBC00] to-[#FF032B] rounded-full"></span> 09. 2026 UI Explorations
            </h2>
            <p className="text-white/50 mb-12 max-w-2xl relative z-10">
              Forward-looking interaction patterns. These are experimental concepts to differentiate WEX from standard fintech dashboards.
            </p>

            <div className="space-y-20 relative z-10">
              
              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 1: COMMAND ISLAND
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFBC00] to-[#FF8C00] flex items-center justify-center text-white shadow-lg shadow-[#FFBC00]/30">
                    <Scan className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Command Island</h3>
                    <p className="text-sm text-white/50">A floating, morphing control center inspired by Apple's Dynamic Island</p>
                  </div>
                </div>
                
                {/* Command Island Demo Container */}
                <div className="bg-[#0A0612] rounded-[2rem] p-8 border border-white/5 min-h-[400px] relative overflow-hidden">
                  {/* Simulated screen content behind */}
                  <div className="absolute inset-8 bg-gradient-to-b from-[#F5F8FF] to-[#E6EEFF] rounded-2xl opacity-20 blur-[2px]">
                    <div className="p-6 space-y-4">
                      <div className="h-8 w-48 bg-[#172DA1]/30 rounded-lg"></div>
                      <div className="h-24 w-full bg-white/50 rounded-xl"></div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-white/50 rounded-xl"></div>
                        <div className="h-20 bg-white/50 rounded-xl"></div>
                        <div className="h-20 bg-white/50 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* THE COMMAND ISLAND */}
                  <div className="relative z-10 flex justify-center pt-4">
                    {/* Collapsed State */}
                    <div className="group cursor-pointer">
                      <div className="bg-black rounded-[2rem] px-6 py-3 flex items-center gap-4 shadow-2xl shadow-black/50 border border-white/10 transition-all duration-500 hover:px-8 hover:py-4 hover:rounded-[2.5rem] hover:gap-6">
                        {/* Left: Status indicator */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C48C] to-[#00A77B] flex items-center justify-center animate-pulse">
                            <Upload className="w-5 h-5 text-white" />
                          </div>
                          <div className="hidden group-hover:block transition-all">
                            <p className="text-white text-sm font-bold">Uploading Receipt</p>
                            <p className="text-white/50 text-xs">CVS Pharmacy • $24.50</p>
                          </div>
                        </div>
                        
                        {/* Progress bar (visible on hover) */}
                        <div className="hidden group-hover:block w-32">
                          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[65%] bg-gradient-to-r from-[#00C48C] to-[#FFBC00] rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Right: Quick actions */}
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#1C6EFF] transition-colors">
                            <Camera className="w-4 h-4 text-white/70 group-hover:text-white" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C8102E] transition-colors">
                            <Mic className="w-4 h-4 text-white/70 group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded State Example */}
                  <div className="mt-12 flex justify-center">
                    <div className="bg-black rounded-[2.5rem] p-6 shadow-2xl shadow-black/50 border border-white/10 max-w-md w-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8102E] to-[#FF032B] flex items-center justify-center">
                            <Receipt className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-bold">Receipt Scanned</p>
                            <p className="text-white/50 text-sm">Auto-matched to claim</p>
                          </div>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <X className="w-4 h-4 text-white/70" />
                        </button>
                      </div>
                      
                      <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/50 text-sm">CVS Pharmacy</span>
                          <span className="text-white font-bold">$24.50</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-[#00C48C]/20 text-[#00C48C] text-xs font-bold rounded-full">Eligible</span>
                          <span className="px-2 py-1 bg-[#1C6EFF]/20 text-[#1C6EFF] text-xs font-bold rounded-full">Health FSA</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 py-3 bg-gradient-to-r from-[#00C48C] to-[#00A77B] text-white font-bold rounded-xl shadow-lg shadow-[#00C48C]/30 hover:shadow-xl transition-all">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-center text-white/30 text-xs mt-8">Hover over the collapsed island to see expand animation</p>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 2: BENTO BALANCE (Asymmetric Grid)
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] flex items-center justify-center text-white shadow-lg shadow-[#1C6EFF]/30">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Bento Balance</h3>
                    <p className="text-sm text-white/50">Asymmetric grid where the balance dominates as the visual hero</p>
                  </div>
                </div>
                
                {/* Bento Grid Demo */}
                <div className="bg-gradient-to-br from-[#F5F8FF] to-[#E6EEFF] rounded-[2rem] p-6 border border-white/20">
                  <div className="grid grid-cols-12 gap-4 auto-rows-[80px]">
                    
                    {/* HERO: Main Balance - Takes up 8 cols, 3 rows */}
                    <div className="col-span-8 row-span-3 bg-white rounded-[1.5rem] p-8 shadow-xl border border-[#E1E8FF] relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                      {/* Ambient gradient */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1C6EFF]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></div>
                      
                      <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-[0.2em] mb-3">Total Balance</p>
                      <h2 className="text-6xl md:text-7xl font-bold text-[#172DA1] tracking-tight mb-4">
                        <span className="text-[#7A87B2] text-4xl align-top">$</span>120,544
                      </h2>
                      
                      {/* Mini sparkline */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#00C48C]/10 rounded-full">
                          <ArrowRight className="w-4 h-4 text-[#00C48C] -rotate-45" />
                          <span className="text-sm font-bold text-[#00C48C]">+$2,340 this month</span>
                        </div>
                        <svg className="w-24 h-8" viewBox="0 0 100 30">
                          <path d="M0,25 Q20,20 40,22 T60,15 T80,18 T100,10" fill="none" stroke="url(#bentogradient)" strokeWidth="2.5" strokeLinecap="round"/>
                          <defs>
                            <linearGradient id="bentogradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#172DA1"/>
                              <stop offset="100%" stopColor="#1C6EFF"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Quick Action: Scan */}
                    <div className="col-span-4 row-span-1 bg-gradient-to-br from-[#C8102E] to-[#FF032B] rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:scale-[1.02] transition-transform shadow-lg shadow-[#C8102E]/20">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold">Scan Receipt</span>
                    </div>
                    
                    {/* Quick Action: Reimburse */}
                    <div className="col-span-4 row-span-1 bg-gradient-to-br from-[#172DA1] to-[#1C6EFF] rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:scale-[1.02] transition-transform shadow-lg shadow-[#172DA1]/20">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold">Reimburse</span>
                    </div>
                    
                    {/* Notification Pill */}
                    <div className="col-span-4 row-span-1 bg-white rounded-2xl p-4 flex items-center justify-between border border-[#E1E8FF] cursor-pointer hover:border-[#C8102E]/30 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#FFF0F2] rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-4 h-4 text-[#C8102E]" />
                        </div>
                        <span className="text-sm font-bold text-[#172DA1]">2 Actions</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#7A87B2]" />
                    </div>
                    
                    {/* Account Tiles - Small */}
                    <div className="col-span-3 row-span-2 bg-white rounded-2xl p-4 border border-[#E1E8FF] flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group">
                      <div className="w-8 h-8 bg-[#EDF1FF] rounded-lg flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                        <PiggyBank className="w-4 h-4 text-[#1C6EFF]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#172DA1]">$3,250</p>
                        <p className="text-xs text-[#7A87B2]">HSA</p>
                      </div>
                    </div>
                    
                    <div className="col-span-3 row-span-2 bg-white rounded-2xl p-4 border border-[#E1E8FF] flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group">
                      <div className="w-8 h-8 bg-[#EDF1FF] rounded-lg flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                        <Wallet className="w-4 h-4 text-[#1C6EFF]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#172DA1]">$1,750</p>
                        <p className="text-xs text-[#7A87B2]">FSA</p>
                      </div>
                    </div>
                    
                    <div className="col-span-3 row-span-2 bg-white rounded-2xl p-4 border border-[#E1E8FF] flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group">
                      <div className="w-8 h-8 bg-[#EDF1FF] rounded-lg flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                        <Users className="w-4 h-4 text-[#1C6EFF]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#172DA1]">$440</p>
                        <p className="text-xs text-[#7A87B2]">Dependent</p>
                      </div>
                    </div>
                    
                    <div className="col-span-3 row-span-2 bg-white rounded-2xl p-4 border border-[#E1E8FF] flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group">
                      <div className="w-8 h-8 bg-[#EDF1FF] rounded-lg flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                        <Target className="w-4 h-4 text-[#1C6EFF]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#172DA1]">$250</p>
                        <p className="text-xs text-[#7A87B2]">Lifestyle</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 3: TYPOGRAPHY AS INTERFACE (2026 Trends)
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#E6EEFF] flex items-center justify-center text-[#172DA1] shadow-lg border border-white/50">
                    <Type className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Typography as Interface</h3>
                    <p className="text-sm text-white/50">2026 Trend: "Wide & Loud" + "Expressive Minimalism" using Inter Variable</p>
                  </div>
                </div>
                
                {/* Trend Explanation */}
                <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-[#FFBC00] font-bold uppercase tracking-widest text-xs mb-2">Wide & Loud Mode</p>
                      <p className="text-white/60"><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">tracking-tighter</code> + <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">font-black</code> on large text creates blocky, confident presence</p>
                    </div>
                    <div>
                      <p className="text-[#1C6EFF] font-bold uppercase tracking-widest text-xs mb-2">Expressive Tech Mode</p>
                      <p className="text-white/60"><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">tracking-widest</code> + <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">uppercase</code> on small labels adds technical precision texture</p>
                    </div>
                  </div>
                </div>
                
                {/* Typography UI Demo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Big Action Cards - "Wide & Loud" Style */}
                  <div className="bg-white rounded-[2rem] p-1 overflow-hidden group cursor-pointer relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] to-[#FF032B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 p-8 rounded-[1.75rem] bg-white group-hover:bg-transparent transition-colors duration-300">
                      {/* "Wide & Loud": tracking-tighter makes it feel solid and geometric */}
                      <p className="text-7xl md:text-8xl font-black text-[#172DA1] group-hover:text-white transition-colors duration-300 leading-none tracking-tighter">
                        SCAN
                      </p>
                      <p className="text-lg text-[#5D688C] group-hover:text-white/80 transition-colors duration-300 mt-4 font-medium">
                        Upload a receipt instantly
                      </p>
                      {/* "Expressive Tech": tracking-widest + uppercase for precision */}
                      <div className="mt-6 flex items-center gap-3 text-[#7A87B2] group-hover:text-white/60 transition-colors">
                        <Camera className="w-5 h-5" />
                        <span className="text-xs font-semibold uppercase tracking-widest">Camera Ready</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-[2rem] p-1 overflow-hidden group cursor-pointer relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#172DA1] to-[#1C6EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 p-8 rounded-[1.75rem] bg-white group-hover:bg-transparent transition-colors duration-300">
                      {/* "Wide & Loud": tracking-tighter */}
                      <p className="text-7xl md:text-8xl font-black text-[#172DA1] group-hover:text-white transition-colors duration-300 leading-none tracking-tighter">
                        PAY
                      </p>
                      <p className="text-lg text-[#5D688C] group-hover:text-white/80 transition-colors duration-300 mt-4 font-medium">
                        Send money to providers
                      </p>
                      {/* "Expressive Tech": tracking-widest + uppercase */}
                      <div className="mt-6 flex items-center gap-3 text-[#7A87B2] group-hover:text-white/60 transition-colors">
                        <CreditCard className="w-5 h-5" />
                        <span className="text-xs font-semibold uppercase tracking-widest">3 Saved Providers</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Smaller type actions - maintaining the dual-mode approach */}
                  <div className="md:col-span-2 grid grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer hover:bg-white/20 transition-all group">
                      <p className="text-3xl font-black text-white/90 group-hover:text-[#FFBC00] transition-colors tracking-tighter">CARDS</p>
                      <p className="text-[10px] text-white/40 mt-2 uppercase tracking-widest font-medium">Manage your cards</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer hover:bg-white/20 transition-all group">
                      <p className="text-3xl font-black text-white/90 group-hover:text-[#00C48C] transition-colors tracking-tighter">INVEST</p>
                      <p className="text-[10px] text-white/40 mt-2 uppercase tracking-widest font-medium">Grow your HSA</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer hover:bg-white/20 transition-all group">
                      <p className="text-3xl font-black text-white/90 group-hover:text-[#1C6EFF] transition-colors tracking-tighter">CLAIMS</p>
                      <p className="text-[10px] text-white/40 mt-2 uppercase tracking-widest font-medium">Track submissions</p>
                    </div>
                  </div>
                </div>

                {/* Variable Type Stacking Demo */}
                <div className="mt-8 bg-gradient-to-br from-white to-[#F5F8FF] rounded-[2rem] p-8 border border-[#E1E8FF]">
                  <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-6">Variable Type Stacking — Mix Both Modes</p>
                  
                  <div className="space-y-8">
                    {/* Example 1: Balance Display */}
                    <div className="flex items-end gap-4">
                      <div>
                        <p className="text-[10px] font-semibold text-[#7A87B2] uppercase tracking-[0.25em] mb-1">Total Balance</p>
                        <p className="text-6xl font-black text-[#172DA1] tracking-tighter leading-none">
                          <span className="text-3xl text-[#7A87B2] font-bold tracking-normal align-top">$</span>120,544
                        </p>
                      </div>
                      <div className="pb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C48C] bg-[#00C48C]/10 px-3 py-1.5 rounded-full">+$2,340 This Month</span>
                      </div>
                    </div>
                    
                    {/* Example 2: Account Row */}
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { label: 'HSA', value: '3,250', trend: '+6%' },
                        { label: 'FSA', value: '1,750', trend: '−12%' },
                        { label: 'HRA', value: '440', trend: '+2%' },
                        { label: 'LIFE', value: '250', trend: '—' },
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-4 bg-[#F5F8FF] rounded-xl border border-[#E1E8FF]">
                          <p className="text-[10px] font-bold text-[#7A87B2] uppercase tracking-[0.2em] mb-2">{item.label}</p>
                          <p className="text-2xl font-black text-[#172DA1] tracking-tighter">${item.value}</p>
                          <p className={`text-[10px] font-semibold uppercase tracking-widest mt-1 ${item.trend.includes('+') ? 'text-[#00C48C]' : item.trend.includes('−') ? 'text-[#C8102E]' : 'text-[#7A87B2]'}`}>{item.trend}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Example 3: Hero Headline */}
                    <div className="bg-gradient-to-r from-[#172DA1] to-[#1C6EFF] rounded-2xl p-8 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-3">Introducing</p>
                      <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-4">
                        Benefits That<br/>Work For You
                      </h2>
                      <p className="text-white/70 font-medium max-w-md">
                        Your complete healthcare wallet, simplified.
                      </p>
                      <button className="mt-6 px-6 py-3 bg-white text-[#172DA1] rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                  
                  {/* Code Reference */}
                  <div className="mt-8 p-4 bg-[#172DA1]/5 rounded-xl border border-[#172DA1]/10">
                    <p className="text-xs font-bold text-[#172DA1] uppercase tracking-widest mb-3">Quick Reference</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <p className="text-[#5D688C]"><span className="font-mono text-xs bg-[#EDF1FF] px-2 py-1 rounded">tracking-tighter</span> Headlines, Numbers</p>
                        <p className="text-[#5D688C]"><span className="font-mono text-xs bg-[#EDF1FF] px-2 py-1 rounded">font-black</span> Max impact text</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[#5D688C]"><span className="font-mono text-xs bg-[#EDF1FF] px-2 py-1 rounded">tracking-widest</span> Labels, Captions</p>
                        <p className="text-[#5D688C]"><span className="font-mono text-xs bg-[#EDF1FF] px-2 py-1 rounded">uppercase text-[10px]</span> Metadata</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 4: INTERACTIVE DATA (Scrubbable)
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C48C] to-[#00A77B] flex items-center justify-center text-white shadow-lg shadow-[#00C48C]/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Interactive Data (Scrubbable)</h3>
                    <p className="text-sm text-white/50">Touch and drag to explore — "What if" scenarios in real-time</p>
                  </div>
                </div>
                
                {/* Interactive Contribution Slider */}
                <div className="bg-white rounded-[2rem] p-8 border border-[#E1E8FF]">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="text-sm font-bold text-[#7A87B2] uppercase tracking-wider mb-2">HSA Contribution Planner</p>
                      <p className="text-[#5D688C]">Drag to see projected year-end balance</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-[#172DA1]">$4,150</p>
                      <p className="text-sm text-[#00C48C] font-medium">Projected Dec 2026</p>
                    </div>
                  </div>
                  
                  {/* The "Scrubber" */}
                  <div className="relative mb-8">
                    <div className="h-16 bg-gradient-to-r from-[#EDF1FF] via-[#D2DDFF] to-[#E6EEFF] rounded-2xl relative overflow-hidden">
                      {/* Progress fill */}
                      <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#172DA1] to-[#1C6EFF] rounded-2xl flex items-center justify-end pr-2">
                        {/* Drag handle */}
                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-[#1C6EFF] hover:scale-110 transition-transform">
                          <div className="flex flex-col gap-0.5">
                            <div className="w-4 h-0.5 bg-[#1C6EFF] rounded-full"></div>
                            <div className="w-4 h-0.5 bg-[#1C6EFF] rounded-full"></div>
                            <div className="w-4 h-0.5 bg-[#1C6EFF] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Scale markers */}
                    <div className="flex justify-between mt-3 px-2 text-xs text-[#7A87B2] font-medium">
                      <span>$0/mo</span>
                      <span>$100</span>
                      <span>$200</span>
                      <span>$300</span>
                      <span className="text-[#1C6EFF] font-bold">$400/mo</span>
                    </div>
                  </div>
                  
                  {/* Resulting projection cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#F5F8FF] rounded-xl p-4 text-center border border-[#E1E8FF]">
                      <p className="text-2xl font-bold text-[#172DA1]">$4,150</p>
                      <p className="text-xs text-[#7A87B2] font-medium">Year-End Balance</p>
                    </div>
                    <div className="bg-[#F5F8FF] rounded-xl p-4 text-center border border-[#E1E8FF]">
                      <p className="text-2xl font-bold text-[#00C48C]">$720</p>
                      <p className="text-xs text-[#7A87B2] font-medium">Tax Savings</p>
                    </div>
                    <div className="bg-[#F5F8FF] rounded-xl p-4 text-center border border-[#E1E8FF]">
                      <p className="text-2xl font-bold text-[#172DA1]">82%</p>
                      <p className="text-xs text-[#7A87B2] font-medium">Max Contribution</p>
                    </div>
                  </div>
                  
                  {/* Quick adjust buttons */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#EDF1FF] rounded-full text-sm font-bold text-[#172DA1] hover:bg-[#D2DDFF] transition-colors">
                      <Minus className="w-4 h-4" /> $50
                    </button>
                    <span className="text-lg font-bold text-[#172DA1]">$300/month</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#EDF1FF] rounded-full text-sm font-bold text-[#172DA1] hover:bg-[#D2DDFF] transition-colors">
                      <Plus className="w-4 h-4" /> $50
                    </button>
                  </div>
                </div>
                
                {/* Scrubbable Timeline */}
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10">
                  <p className="text-sm font-bold text-white/50 uppercase tracking-wider mb-6">Spending Timeline — Drag to scrub</p>
                  
                  <div className="relative h-32">
                    {/* Timeline visualization */}
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="timelineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#8C0026"/>
                          <stop offset="50%" stopColor="#C8102E"/>
                          <stop offset="100%" stopColor="#FFBC00"/>
                        </linearGradient>
                        <linearGradient id="timelineFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFBC00" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#FFBC00" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      {/* Area fill */}
                      <path d="M0,80 Q50,70 100,60 T200,40 T300,55 T400,30 L400,100 L0,100 Z" fill="url(#timelineFill)"/>
                      {/* Line */}
                      <path d="M0,80 Q50,70 100,60 T200,40 T300,55 T400,30" fill="none" stroke="url(#timelineGrad)" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    
                    {/* Scrubber indicator - positioned as HTML element to avoid stretching */}
                    <div className="absolute top-[45%] right-[30%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-[#FFBC00] animate-pulse shadow-lg shadow-[#FFBC00]/50"></div>
                        <div className="absolute inset-0 -m-1.5 w-7 h-7 rounded-full border-2 border-[#FFBC00]/50 animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Data point popup */}
                    <div className="absolute top-0 right-[30%] transform -translate-x-1/2 bg-black rounded-xl px-4 py-2 shadow-xl">
                      <p className="text-white font-bold">$847.50</p>
                      <p className="text-white/50 text-xs">October 2025</p>
                    </div>
                  </div>
                  
                  {/* Month labels */}
                  <div className="flex justify-between mt-4 text-xs text-white/40 font-medium">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span className="text-[#FFBC00]">Oct</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 5: DENSE DATA TILES (Dashboard-Optimized)
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#172DA1] to-[#122385] flex items-center justify-center text-white shadow-lg shadow-[#172DA1]/30">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Dense Data Tiles</h3>
                    <p className="text-sm text-white/50">Compact, information-rich cards optimized for post-login dashboards</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#F5F8FF] to-[#E6EEFF] rounded-[2rem] p-6 border border-white/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    
                    {/* Stat Tile - Compact */}
                    <div className="bg-white rounded-xl p-4 border border-[#E1E8FF] hover:shadow-md hover:border-[#1C6EFF]/30 transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EDF1FF] flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                          <CreditCard className="w-4 h-4 text-[#1C6EFF]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C48C]">+12%</span>
                      </div>
                      <p className="text-2xl font-black text-[#172DA1] tracking-tighter">$3,250</p>
                      <p className="text-[10px] font-bold text-[#7A87B2] uppercase tracking-wide mt-1">HSA Balance</p>
                    </div>

                    {/* Stat Tile - With Progress */}
                    <div className="bg-white rounded-xl p-4 border border-[#E1E8FF] hover:shadow-md hover:border-[#1C6EFF]/30 transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EDF1FF] flex items-center justify-center group-hover:bg-[#1C6EFF]/10 transition-colors">
                          <Wallet className="w-4 h-4 text-[#1C6EFF]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8102E]">65%</span>
                      </div>
                      <p className="text-2xl font-black text-[#172DA1] tracking-tighter">$1,750</p>
                      <p className="text-[10px] font-bold text-[#7A87B2] uppercase tracking-wide mt-1">FSA Used</p>
                      <div className="mt-2 h-1 bg-[#EDF1FF] rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-gradient-to-r from-[#172DA1] to-[#1C6EFF] rounded-full"></div>
                      </div>
                    </div>

                    {/* Stat Tile - Alert State */}
                    <div className="bg-white rounded-xl p-4 border-2 border-[#C8102E]/20 hover:shadow-md hover:shadow-[#C8102E]/10 transition-all cursor-pointer group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C8102E]/10 to-transparent rounded-full blur-xl pointer-events-none"></div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FFF0F2] flex items-center justify-center">
                          <AlertCircle className="w-4 h-4 text-[#C8102E]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8102E] bg-[#FFF0F2] px-2 py-0.5 rounded-full">Action</span>
                      </div>
                      <p className="text-2xl font-black text-[#172DA1] tracking-tighter">2</p>
                      <p className="text-[10px] font-bold text-[#7A87B2] uppercase tracking-wide mt-1">Pending Claims</p>
                    </div>

                    {/* Stat Tile - Success State */}
                    <div className="bg-white rounded-xl p-4 border border-[#00C48C]/30 hover:shadow-md hover:shadow-[#00C48C]/10 transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#E6FFF9] flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#00C48C]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C48C]">Active</span>
                      </div>
                      <p className="text-2xl font-black text-[#172DA1] tracking-tighter">4</p>
                      <p className="text-[10px] font-bold text-[#7A87B2] uppercase tracking-wide mt-1">Linked Cards</p>
                    </div>

                  </div>

                  {/* List Tile Row */}
                  <div className="mt-4 bg-white rounded-xl border border-[#E1E8FF] divide-y divide-[#F5F7FF]">
                    {[
                      { icon: Receipt, title: 'CVS Pharmacy', meta: 'Health FSA • Auto-Verified', amount: '-$24.50', status: 'success' },
                      { icon: AlertCircle, title: 'Dr. Smith', meta: 'HSA • Missing Receipt', amount: '-$150.00', status: 'alert' },
                      { icon: TrendingUp, title: 'Vanguard 500', meta: 'Investment • Buy Order', amount: '+$200.00', status: 'invest' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 flex items-center justify-between hover:bg-[#F9FAFF] transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            item.status === 'success' ? 'bg-[#EDF1FF] text-[#172DA1]' :
                            item.status === 'alert' ? 'bg-[#FFF0F2] text-[#C8102E]' :
                            'bg-[#E6FFF9] text-[#00C48C]'
                          }`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-[#172DA1] text-sm group-hover:text-[#1C6EFF] transition-colors">{item.title}</p>
                            <p className="text-[10px] text-[#7A87B2] uppercase tracking-wide font-medium">{item.meta}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-black tracking-tighter ${item.amount.startsWith('+') ? 'text-[#00C48C]' : 'text-[#172DA1]'}`}>{item.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 6: STATUS & BADGE SYSTEM
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFBC00] to-[#E5A800] flex items-center justify-center text-white shadow-lg shadow-[#FFBC00]/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Status & Badge System</h3>
                    <p className="text-sm text-white/50">Consistent visual language for states, tags, and indicators</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Status Pills */}
                  <div className="bg-white rounded-[1.5rem] p-6 border border-[#E1E8FF]">
                    <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-4">Status Pills</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1.5 bg-[#00C48C]/10 text-[#00C48C] text-xs font-bold rounded-full border border-[#00C48C]/20">Success</span>
                      <span className="px-3 py-1.5 bg-[#C8102E]/10 text-[#C8102E] text-xs font-bold rounded-full border border-[#C8102E]/20">Error</span>
                      <span className="px-3 py-1.5 bg-[#FFBC00]/10 text-[#997200] text-xs font-bold rounded-full border border-[#FFBC00]/30">Warning</span>
                      <span className="px-3 py-1.5 bg-[#1C6EFF]/10 text-[#1C6EFF] text-xs font-bold rounded-full border border-[#1C6EFF]/20">Info</span>
                      <span className="px-3 py-1.5 bg-[#EDF1FF] text-[#5D688C] text-xs font-bold rounded-full border border-[#E1E8FF]">Neutral</span>
                    </div>
                    
                    <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-4 mt-6">With Icons</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1.5 bg-[#00C48C]/10 text-[#00C48C] text-xs font-bold rounded-full border border-[#00C48C]/20 flex items-center gap-1.5">
                        <Check className="w-3 h-3" /> Verified
                      </span>
                      <span className="px-3 py-1.5 bg-[#C8102E]/10 text-[#C8102E] text-xs font-bold rounded-full border border-[#C8102E]/20 flex items-center gap-1.5">
                        <AlertCircle className="w-3 h-3" /> Action Required
                      </span>
                      <span className="px-3 py-1.5 bg-[#1C6EFF]/10 text-[#1C6EFF] text-xs font-bold rounded-full border border-[#1C6EFF]/20 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> Processing
                      </span>
                    </div>
                  </div>

                  {/* Dot Indicators */}
                  <div className="bg-white rounded-[1.5rem] p-6 border border-[#E1E8FF]">
                    <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-4">Dot Indicators</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00C48C] shadow-sm shadow-[#00C48C]/50"></div>
                        <span className="text-sm text-[#172DA1] font-medium">Active / Online</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E] shadow-sm shadow-[#C8102E]/50"></div>
                        <span className="text-sm text-[#172DA1] font-medium">Error / Offline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBC00] shadow-sm shadow-[#FFBC00]/50"></div>
                        <span className="text-sm text-[#172DA1] font-medium">Warning / Pending</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1C6EFF] animate-pulse shadow-sm shadow-[#1C6EFF]/50"></div>
                        <span className="text-sm text-[#172DA1] font-medium">Processing (Pulsing)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#B1C0EE]"></div>
                        <span className="text-sm text-[#172DA1] font-medium">Inactive / Disabled</span>
                      </div>
                    </div>
                    
                    <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-4 mt-6">Notification Badges</p>
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <Bell className="w-6 h-6 text-[#172DA1]" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C8102E] rounded-full text-[10px] font-bold text-white flex items-center justify-center">3</span>
                      </div>
                      <div className="relative">
                        <Bell className="w-6 h-6 text-[#172DA1]" />
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#C8102E] rounded-full border-2 border-white"></span>
                      </div>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#EDF1FF] flex items-center justify-center">
                          <User className="w-5 h-5 text-[#172DA1]" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00C48C] rounded-full border-2 border-white"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 7: TOAST & NOTIFICATION PATTERNS
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C48C] to-[#00A77B] flex items-center justify-center text-white shadow-lg shadow-[#00C48C]/30">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Toast & Notification Patterns</h3>
                    <p className="text-sm text-white/50">Feedback patterns for actions, alerts, and system messages</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Success Toast */}
                  <div className="bg-white rounded-2xl p-4 border border-[#00C48C]/30 shadow-lg shadow-[#00C48C]/10 flex items-center justify-between max-w-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00C48C] flex items-center justify-center text-white shadow-md">
                        <Check className="w-5 h-5" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-bold text-[#172DA1]">Receipt uploaded successfully</p>
                        <p className="text-sm text-[#5D688C]">CVS Pharmacy • $24.50 matched to claim</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-[#F5F7FF] rounded-lg transition-colors">
                      <X className="w-4 h-4 text-[#7A87B2]" />
                    </button>
                  </div>

                  {/* Error Toast */}
                  <div className="bg-white rounded-2xl p-4 border border-[#C8102E]/30 shadow-lg shadow-[#C8102E]/10 flex items-center justify-between max-w-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C8102E] flex items-center justify-center text-white shadow-md">
                        <X className="w-5 h-5" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-bold text-[#172DA1]">Transaction failed</p>
                        <p className="text-sm text-[#5D688C]">Card declined. Please try another payment method.</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#C8102E] text-white text-xs font-bold rounded-lg hover:bg-[#A00D25] transition-colors">
                      Retry
                    </button>
                  </div>

                  {/* Info Toast - Floating Island Style */}
                  <div className="bg-black rounded-[1.5rem] p-4 shadow-2xl flex items-center gap-4 max-w-md border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] flex items-center justify-center text-white animate-pulse">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-sm">Syncing accounts...</p>
                      <div className="mt-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-gradient-to-r from-[#1C6EFF] to-[#FFBC00] rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-white/50 text-xs font-medium">45%</span>
                  </div>

                  {/* Warning Banner - Full Width */}
                  <div className="bg-gradient-to-r from-[#FFBC00]/10 to-[#FFE100]/10 rounded-2xl p-4 border border-[#FFBC00]/30 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FFBC00] flex items-center justify-center text-white shadow-md">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[#172DA1]">FSA deadline approaching</p>
                        <p className="text-sm text-[#5D688C]">You have <span className="font-bold text-[#997200]">$250.00</span> remaining to use by <span className="font-bold">March 31, 2026</span></p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#FFBC00] text-white text-xs font-bold rounded-lg hover:bg-[#E5A800] transition-colors shadow-md">
                      Plan Spending
                    </button>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 8: LOADING & SKELETON STATES
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B1C0EE] to-[#7A87B2] flex items-center justify-center text-white shadow-lg">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Loading & Skeleton States</h3>
                    <p className="text-sm text-white/50">Branded loading indicators that maintain visual hierarchy</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Skeleton Card */}
                  <div className="bg-white rounded-[1.5rem] p-6 border border-[#E1E8FF]">
                    <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-4">Skeleton Loader</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#EDF1FF] to-[#F5F8FF] animate-pulse"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-3/4 bg-gradient-to-r from-[#EDF1FF] to-[#F5F8FF] rounded-lg animate-pulse"></div>
                          <div className="h-3 w-1/2 bg-gradient-to-r from-[#EDF1FF] to-[#F5F8FF] rounded-lg animate-pulse"></div>
                        </div>
                      </div>
                      <div className="h-20 w-full bg-gradient-to-r from-[#EDF1FF] to-[#F5F8FF] rounded-xl animate-pulse"></div>
                      <div className="flex gap-3">
                        <div className="h-8 w-24 bg-gradient-to-r from-[#EDF1FF] to-[#F5F8FF] rounded-lg animate-pulse"></div>
                        <div className="h-8 w-24 bg-gradient-to-r from-[#EDF1FF] to-[#F5F8FF] rounded-lg animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Branded Spinners */}
                  <div className="bg-white rounded-[1.5rem] p-6 border border-[#E1E8FF]">
                    <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-widest mb-4">Spinners & Progress</p>
                    <div className="flex items-center justify-around">
                      {/* Simple Spinner */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 border-3 border-[#EDF1FF] border-t-[#1C6EFF] rounded-full animate-spin"></div>
                        <span className="text-[10px] text-[#7A87B2] uppercase tracking-widest">Default</span>
                      </div>
                      
                      {/* Gradient Spinner */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#172DA1] to-[#1C6EFF] animate-spin flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-[10px] text-[#7A87B2] uppercase tracking-widest">Gradient</span>
                      </div>
                      
                      {/* Dots */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-[#172DA1] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                          <div className="w-2 h-2 bg-[#1C6EFF] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                          <div className="w-2 h-2 bg-[#FFBC00] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                        </div>
                        <span className="text-[10px] text-[#7A87B2] uppercase tracking-widest">Dots</span>
                      </div>
                      
                      {/* Progress Ring */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-10 h-10">
                          <svg className="w-full h-full -rotate-90">
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#EDF1FF" strokeWidth="4"/>
                            <circle cx="20" cy="20" r="16" fill="none" stroke="url(#progressGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="35"/>
                            <defs>
                              <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#172DA1"/>
                                <stop offset="100%" stopColor="#1C6EFF"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#172DA1]">65%</span>
                        </div>
                        <span className="text-[10px] text-[#7A87B2] uppercase tracking-widest">Ring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  EXPLORATION 9: EMPTY STATES
                  ───────────────────────────────────────────────────────────────── */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E1E8FF] to-[#D2DDFF] flex items-center justify-center text-[#172DA1] shadow-lg border border-white/50">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Empty States</h3>
                    <p className="text-sm text-white/50">Branded illustrations and messaging for empty or zero-state screens</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* No Transactions */}
                  <div className="bg-white rounded-[1.5rem] p-8 border border-[#E1E8FF] text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-[2rem] bg-gradient-to-br from-[#EDF1FF] to-[#D2DDFF] flex items-center justify-center">
                      <Receipt className="w-10 h-10 text-[#172DA1]/30" />
                    </div>
                    <h4 className="text-xl font-black text-[#172DA1] tracking-tighter mb-2">No transactions yet</h4>
                    <p className="text-sm text-[#5D688C] mb-6 max-w-xs mx-auto">Start using your benefits card to see your spending activity here.</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#172DA1] to-[#1C6EFF] text-white font-bold rounded-xl shadow-lg shadow-[#172DA1]/20 hover:shadow-xl transition-all">
                      Make First Purchase
                    </button>
                  </div>

                  {/* No Claims */}
                  <div className="bg-gradient-to-br from-[#F5F8FF] to-[#E6EEFF] rounded-[1.5rem] p-8 border border-[#E1E8FF] text-center relative overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-[#1C6EFF]/10 rounded-full blur-[40px] pointer-events-none"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-24 h-24 bg-[#C8102E]/10 rounded-full blur-[30px] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#E1E8FF]">
                        <Check className="w-10 h-10 text-[#00C48C]" />
                      </div>
                      <h4 className="text-xl font-black text-[#172DA1] tracking-tighter mb-2">All caught up!</h4>
                      <p className="text-sm text-[#5D688C] mb-6 max-w-xs mx-auto">You have no pending claims or actions required.</p>
                      <button className="px-6 py-3 bg-white text-[#172DA1] font-bold rounded-xl shadow-md border border-[#E1E8FF] hover:shadow-lg hover:border-[#1C6EFF]/30 transition-all">
                        Upload Receipt
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 10: PRODUCT DASHBOARD
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="dashboard" className="mb-24 scroll-mt-40">
          <div className="bg-gradient-to-br from-[#F9FBFF] to-[#F0F4FF] p-10 rounded-3xl shadow-sm border border-[#E1E8FF]/60 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C8102E]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#5D688C] mb-10 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full"></span> 10. Product UI Language
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



