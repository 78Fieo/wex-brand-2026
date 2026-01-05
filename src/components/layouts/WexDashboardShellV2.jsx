import React, { useState } from 'react';
import { User as UserIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  MdHome, MdOutlineHome,
  MdAccountBalanceWallet, MdOutlineAccountBalanceWallet,
  MdReceiptLong, MdOutlineReceiptLong,
  MdDescription, MdOutlineDescription,
  MdAssessment, MdOutlineAssessment
} from 'react-icons/md';
import wexLogoRed from '../../assets/wex_logo_red.svg';

/**
 * WexDashboardShellV2 - Dashboard Layout with Sidebar + Header
 * Profile and expand/collapse moved to sidebar bottom
 */
const WexDashboardShellV2 = ({ 
  children, 
  title = 'Dashboard',
  sidebarItems = [],
  activeSidebarItem,
  onSidebarItemClick,
  userName = 'Elizabeth Davis',
  userEmail = 'elizabeth@wexinc.com'
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

          {/* Bottom Section - Profile & Expand */}
          <div className="border-t border-[#E1E8FF]/60 p-4">
            {/* User Profile */}
            <div className={`flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F7FF] transition-colors cursor-pointer ${
              sidebarOpen ? '' : 'justify-center'
            }`}>
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] p-[2px] shadow-md shrink-0">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <UserIcon className="w-full h-full p-2 text-[#172DA1]" />
                </div>
              </div>
              
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#172DA1] truncate">{userName}</p>
                  <p className="text-xs text-[#7A87B2] truncate">{userEmail}</p>
                </div>
              )}
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-xl text-sm font-medium text-[#5D688C] hover:bg-[#EDF1FF] hover:text-[#172DA1] transition-all ${
                sidebarOpen ? '' : 'justify-center'
              }`}
            >
              {sidebarOpen ? (
                <>
                  <ChevronLeft className="w-5 h-5 shrink-0" />
                  <span>Collapse</span>
                </>
              ) : (
                <ChevronRight className="w-5 h-5 shrink-0" />
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Page Content - No header, content goes edge to edge */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default WexDashboardShellV2;

