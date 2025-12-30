import React, { useState } from 'react';
import { User as UserIcon, ChevronDown, Bell, Search } from 'lucide-react';
import { 
  MdHome, MdOutlineHome,
  MdAccountBalanceWallet, MdOutlineAccountBalanceWallet,
  MdReceiptLong, MdOutlineReceiptLong,
  MdDescription, MdOutlineDescription,
  MdAssessment, MdOutlineAssessment
} from 'react-icons/md';
import wexLogoRed from '../../assets/wex_logo_red.svg';

/**
 * WexDashboardShellTopNav - Dashboard Layout with Top Navigation
 * Horizontal navigation bar instead of sidebar
 */
const WexDashboardShellTopNav = ({ 
  children, 
  title = 'Dashboard',
  navItems = [],
  activeNavItem,
  onNavItemClick,
  userName = 'Elizabeth Davis',
  userEmail = 'elizabeth@wexinc.com'
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const defaultNavItems = [
    { id: 'overview', label: 'Overview', iconFilled: MdHome, iconOutline: MdOutlineHome },
    { id: 'accounts', label: 'Accounts', iconFilled: MdAccountBalanceWallet, iconOutline: MdOutlineAccountBalanceWallet },
    { id: 'transactions', label: 'Transactions', iconFilled: MdReceiptLong, iconOutline: MdOutlineReceiptLong },
    { id: 'claims', label: 'Claims', iconFilled: MdDescription, iconOutline: MdOutlineDescription },
    { id: 'reports', label: 'Reports', iconFilled: MdAssessment, iconOutline: MdOutlineAssessment }
  ];

  const items = navItems.length > 0 ? navItems : defaultNavItems;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E1E8FF]/80 shadow-sm">
        <div className="max-w-[1600px] mx-auto">
          {/* Main Header Row */}
          <div className="px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Left: Logo + Nav */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img 
                  src={wexLogoRed}
                  alt="WEX Logo"
                  className="h-7"
                />
                <div className="hidden sm:block">
                  <p className="text-xs text-[#7A87B2] font-medium">Health Benefits</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-[#E1E8FF]"></div>

              {/* Navigation Items */}
              <nav className="hidden md:flex items-center gap-1">
                {items.map((item) => {
                  const isActive = activeNavItem === item.id;
                  const Icon = isActive 
                    ? (item.iconFilled || item.icon) 
                    : (item.iconOutline || item.icon);

                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavItemClick?.(item.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#E1E8FF] text-[#172DA1]'
                          : 'text-[#5D688C] hover:bg-[#F5F7FF] hover:text-[#172DA1]'
                      }`}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search, Notifications, Profile */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative group/search hidden lg:block">
                <Search className="w-4 h-4 text-[#B1C0EE] absolute left-4 top-2.5 group-focus-within/search:text-[#1C6EFF] transition-colors" />
                <input 
                  className="pl-11 pr-5 py-2 bg-[#F5F7FF] rounded-full text-sm border border-transparent focus:border-[#1C6EFF]/30 focus:bg-white focus:ring-2 focus:ring-[#1C6EFF]/20 w-56 transition-all placeholder-[#7A87B2]" 
                  placeholder="Search..." 
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-full hover:bg-[#F5F7FF] transition-colors">
                <Bell className="w-5 h-5 text-[#7A87B2] hover:text-[#172DA1] transition-colors" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#C8102E] rounded-full border-2 border-white"></span>
              </button>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F5F7FF] transition-colors"
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] p-[2px] shadow-md">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                      <UserIcon className="w-full h-full p-1.5 text-[#172DA1]" />
                    </div>
                  </div>
                  
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-[#172DA1] leading-tight">{userName}</p>
                    <p className="text-xs text-[#7A87B2]">{userEmail}</p>
                  </div>
                  
                  <ChevronDown className={`w-4 h-4 text-[#7A87B2] transition-transform hidden sm:block ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E1E8FF] py-2 z-50">
                    <a href="#" className="block px-4 py-2.5 text-sm text-[#5D688C] hover:bg-[#F5F7FF] hover:text-[#172DA1] transition-colors">Profile Settings</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-[#5D688C] hover:bg-[#F5F7FF] hover:text-[#172DA1] transition-colors">Account Preferences</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-[#5D688C] hover:bg-[#F5F7FF] hover:text-[#172DA1] transition-colors">Help & Support</a>
                    <div className="my-2 border-t border-[#E1E8FF]"></div>
                    <a href="#" className="block px-4 py-2.5 text-sm text-[#C8102E] hover:bg-[#FFF0F2] transition-colors">Sign Out</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Row - shown on smaller screens */}
          <div className="md:hidden px-4 pb-3 overflow-x-auto">
            <nav className="flex items-center gap-1 min-w-max">
              {items.map((item) => {
                const isActive = activeNavItem === item.id;
                const Icon = isActive 
                  ? (item.iconFilled || item.icon) 
                  : (item.iconOutline || item.icon);

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavItemClick?.(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#E1E8FF] text-[#172DA1]'
                        : 'text-[#5D688C] hover:bg-[#F5F7FF]'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto">
        {children}
      </main>
    </div>
  );
};

export default WexDashboardShellTopNav;

