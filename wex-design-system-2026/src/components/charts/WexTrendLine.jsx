import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

/**
 * WexTrendLine - Historical Spending Line Chart
 * Uses WEX Data Line gradient (#8C0026 → #C8102E → #FFBC00)
 */
const WexTrendLine = ({ 
  data = [
    { month: 'Jan', amount: 320 },
    { month: 'Feb', amount: 450 },
    { month: 'Mar', amount: 380 },
    { month: 'Apr', amount: 520 },
    { month: 'May', amount: 480 },
    { month: 'Jun', amount: 610 }
  ]
}) => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDataConfig = {
      labels: data.map(d => d.month),
      datasets: [
        {
          label: 'Monthly Spending',
          data: data.map(d => d.amount),
          fill: true,
          tension: 0.4,
          borderColor: '#C8102E',
          backgroundColor: 'rgba(200, 16, 46, 0.1)',
          borderWidth: 3,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#FFFFFF',
          pointBorderColor: '#C8102E',
          pointBorderWidth: 2,
          pointHoverBackgroundColor: '#C8102E',
          pointHoverBorderColor: '#FFFFFF',
          pointHoverBorderWidth: 3
        }
      ]
    };

    setChartData(chartDataConfig);
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#172DA1',
        bodyColor: '#5D688C',
        borderColor: '#E1E8FF',
        borderWidth: 1,
        padding: 12,
        borderRadius: 12,
        boxPadding: 6,
        callbacks: {
          label: function(context) {
            return `$${context.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#5D688C',
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 12,
            weight: '600'
          }
        },
        border: {
          color: '#E1E8FF'
        }
      },
      y: {
        grid: {
          color: '#EDF1FF',
          drawBorder: false
        },
        ticks: {
          color: '#5D688C',
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 12,
            weight: '600'
          },
          callback: function(value) {
            return '$' + value.toLocaleString('en-US');
          }
        },
        border: {
          color: '#E1E8FF'
        }
      }
    }
  };

  // Calculate gradient for the line (using SVG gradient)
  const maxAmount = Math.max(...data.map(d => d.amount));
  const minAmount = Math.min(...data.map(d => d.amount));

  return (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Header */}
      <div className="mb-6 relative z-10 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#172DA1] mb-1">Spending Trend</h3>
          <p className="text-sm text-[#5D688C]">Last 6 months</p>
        </div>
        <div className="px-4 py-1.5 bg-[#EDF1FF] rounded-full">
          <span className="text-xs font-bold text-[#172DA1]">YTD</span>
        </div>
      </div>

      {/* Chart with Gradient Line */}
      <div className="relative h-64">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="dataLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8C0026" />
              <stop offset="50%" stopColor="#C8102E" />
              <stop offset="100%" stopColor="#FFBC00" />
            </linearGradient>
          </defs>
        </svg>
        <Chart 
          ref={chartRef}
          type="line" 
          data={chartData} 
          options={options}
          className="w-full h-full"
        />
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-[#E1E8FF] flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider mb-1">Average</p>
          <p className="text-xl font-bold text-[#172DA1]">
            ${(data.reduce((sum, d) => sum + d.amount, 0) / data.length).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider mb-1">Peak</p>
          <p className="text-xl font-bold text-[#172DA1]">
            ${maxAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WexTrendLine;


