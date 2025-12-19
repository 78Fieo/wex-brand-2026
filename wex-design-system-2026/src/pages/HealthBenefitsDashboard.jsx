import React, { useState } from 'react';
import WexDashboardShell from '../components/layouts/WexDashboardShell';
import WexBalanceGauge from '../components/charts/WexBalanceGauge';
import WexSpendingChart from '../components/charts/WexSpendingChart';
import WexTrendLine from '../components/charts/WexTrendLine';
import WexContributionBar from '../components/charts/WexContributionBar';
import WexKPICard from '../components/cards/WexKPICard';
import WexAccountCard from '../components/cards/WexAccountCard';
import { CreditCard, TrendingUp, DollarSign, FileText } from 'lucide-react';

/**
 * HealthBenefitsDashboard - Reference Implementation
 * Demonstrates all WEX-styled PrimeReact components together
 */
const HealthBenefitsDashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');

  const spendingData = {
    medical: 1250.00,
    dental: 450.00,
    vision: 180.00,
    prescription: 570.50
  };

  const trendData = [
    { month: 'Jan', amount: 320 },
    { month: 'Feb', amount: 450 },
    { month: 'Mar', amount: 380 },
    { month: 'Apr', amount: 520 },
    { month: 'May', amount: 480 },
    { month: 'Jun', amount: 610 }
  ];

  return (
    <WexDashboardShell
      title="Health Benefits Overview"
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
    >
      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <WexKPICard
          title="Total Balance"
          value={24500.23}
          trend="up"
          trendValue={12}
          icon={CreditCard}
          iconColor="#1C6EFF"
          delay={0}
        />
        <WexKPICard
          title="YTD Spending"
          value={2450.50}
          trend="up"
          trendValue={8}
          icon={TrendingUp}
          iconColor="#C8102E"
          delay={100}
        />
        <WexKPICard
          title="Contributions"
          value={3850}
          trend="up"
          trendValue={15}
          icon={DollarSign}
          iconColor="#00C48C"
          delay={200}
        />
        <WexKPICard
          title="Claims Pending"
          value={3}
          trend="down"
          trendValue={25}
          icon={FileText}
          iconColor="#FFBC00"
          delay={300}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-8">
          {/* Balance Gauge */}
          <div className="flex justify-center">
            <WexBalanceGauge
              currentBalance={2450.50}
              annualLimit={3850}
              accountType="HSA"
              size={240}
            />
          </div>

          {/* Trend Line */}
          <WexTrendLine data={trendData} />
        </div>

        {/* Right Column - Spending Chart */}
        <div>
          <WexSpendingChart data={spendingData} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contribution Bar */}
        <WexContributionBar
          currentContribution={2450.50}
          annualLimit={3850}
          showMilestones={true}
        />

        {/* Account Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#172DA1] mb-4">Your Accounts</h3>
          <WexAccountCard
            accountName="Health Savings Account"
            accountNumber="****1234"
            balance={2450.50}
            availableBalance={2450.50}
          />
          <WexAccountCard
            accountName="Flexible Spending Account"
            accountNumber="****5678"
            balance={1200.00}
            availableBalance={1200.00}
          />
        </div>
      </div>
    </WexDashboardShell>
  );
};

export default HealthBenefitsDashboard;















