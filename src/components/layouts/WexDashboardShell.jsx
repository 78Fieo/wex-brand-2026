import React, { useState } from 'react';
import { Menu, Bell, Search, User as UserIcon, ChevronRight } from 'lucide-react';
import { 
  MdHome, MdOutlineHome,
  MdAccountBalanceWallet, MdOutlineAccountBalanceWallet,
  MdReceiptLong, MdOutlineReceiptLong,
  MdDescription, MdOutlineDescription,
  MdAssessment, MdOutlineAssessment
} from 'react-icons/md';
import wexLogoRed from '../../assets/wex_logo_red.svg';

/**
 * WexDashboardShell - Dashboard Layout with Sidebar + Header
 * Reusable shell for dashboard pages
 */
const WexDashboardShell = ({ 
  children, 
  title = 'Dashboard',
  sidebarItems = [],
  activeSidebarItem,
  onSidebarItemClick
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const defaultSidebarItems = [
    { id: 'overview', label: 'Overview', iconFilled: MdHome, iconOutline: MdOutlineHome },
    { id: 'accounts', label: 'Accounts', iconFilled: MdAccountBalanceWallet, iconOutline: MdOutlineAccountBalanceWallet },
    { id: 'transactions', label: 'Transactions', iconFilled: MdReceiptLong, iconOutline: MdOutlineReceiptLong },
    { id: 'claims', label: 'Claims', iconFilled: MdDescription, iconOutline: MdOutlineDescription },
    { id: 'reports', label: 'Reports', iconFilled: MdAssessment, iconOutline: MdOutlineAssessment }
  ];

  const items = sidebarItems.length > 0 ? sidebarItems : defaultSidebarItems;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF]">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white border-r border-[#E1E8FF]/80 shadow-sm transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-[#E1E8FF]/60">
            <div className="flex items-center gap-3">
              <img 
                src={wexLogoRed}
                alt="WEX Logo"
                className="h-6"
              />
              {sidebarOpen && (
                <div>
                  <p className="text-xs text-[#7A87B2] mt-1">Health Benefits</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {items.map((item) => {
                const isActive = activeSidebarItem === item.id;
                // Use passed icon if simple structure, or switch between filled/outline if available
                // Fallback to item.icon if filled/outline not provided (backward compatibility)
                const Icon = isActive 
                  ? (item.iconFilled || item.icon) 
                  : (item.iconOutline || item.icon);

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onSidebarItemClick?.(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#E1E8FF] text-[#172DA1]'
                          : 'text-[#5D688C] hover:bg-[#EDF1FF] hover:text-[#172DA1]'
                      }`}
                    >
                      {Icon && <Icon className="w-6 h-6 shrink-0" />}
                      {sidebarOpen && <span>{item.label}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-[#E1E8FF]/60 shadow-sm">
          <div className="px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-[#EDF1FF] transition-colors"
              >
                <Menu className="w-6 h-6 text-[#172DA1]" />
              </button>
              <h2 className="text-2xl font-bold text-[#172DA1] tracking-tight">{title}</h2>
            </div>

            <div className="flex items-center gap-5">
              {/* Search */}
              <div className="relative group/search">
                <Search className="w-5 h-5 text-[#B1C0EE] absolute left-4 top-2.5 group-focus-within/search:text-[#1C6EFF] transition-colors" />
                <input 
                  className="pl-12 pr-5 py-2.5 bg-[#F5F7FF] rounded-full text-sm border border-transparent focus:border-[#1C6EFF]/30 focus:bg-white focus:ring-2 focus:ring-[#1C6EFF]/20 w-64 transition-all shadow-sm" 
                  placeholder="Search..." 
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-full hover:bg-[#F5F7FF] transition-colors">
                <Bell className="w-6 h-6 text-[#B1C0EE] hover:text-[#172DA1] transition-colors" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#C8102E] rounded-full border-2 border-white"></span>
              </button>

              {/* User Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] p-[2px] shadow-md cursor-pointer hover:shadow-lg transition-all">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <UserIcon className="w-full h-full p-2 text-[#172DA1]" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default WexDashboardShell;


