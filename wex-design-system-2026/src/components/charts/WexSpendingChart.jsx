import React from 'react';
import { Chart } from 'primereact/chart';
import { useRef, useEffect, useState } from 'react';

/**
 * WexSpendingChart - Category Breakdown Doughnut Chart
 * Extends PrimeReact Chart with WEX aesthetics
 */
const WexSpendingChart = ({ 
  data = {
    medical: 1250.00,
    dental: 450.00,
    vision: 180.00,
    prescription: 570.50
  }
}) => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    
    const chartDataConfig = {
      labels: ['Medical', 'Dental', 'Vision', 'Prescription'],
      datasets: [
        {
          data: [
            data.medical,
            data.dental,
            data.vision,
            data.prescription
          ],
          backgroundColor: [
            '#172DA1',  // Main Blue
            '#1C6EFF',  // Accent Blue
            '#C8102E',  // WEX Red
            '#FFBC00'   // Accent Yellow
          ],
          borderWidth: 0,
          hoverOffset: 8
        }
      ]
    };

    setChartData(chartDataConfig);
  }, [data]);

  const options = {
    cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 12,
            weight: '600'
          },
          color: '#172DA1',
          generateLabels: (chart) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                
                return {
                  text: `${label}: $${value.toLocaleString('en-US', { minimumFractionDigits: 2 })} (${percentage}%)`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].backgroundColor[i],
                  lineWidth: 0,
                  hidden: false,
                  index: i
                };
              });
            }
            return [];
          }
        }
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
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: $${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  const totalSpending = Object.values(data).reduce((sum, val) => sum + val, 0);

  return (
    <div className="bg-gradient-to-br from-white to-[#F5F8FF] p-8 rounded-3xl border border-[#E1E8FF]/80 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Header */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-bold text-[#172DA1] mb-2">Spending by Category</h3>
        <p className="text-sm text-[#5D688C]">Year-to-date breakdown</p>
      </div>

      {/* Chart Container */}
      <div className="relative h-64 mb-6">
        <Chart 
          ref={chartRef}
          type="doughnut" 
          data={chartData} 
          options={options}
          className="w-full h-full"
        />
        
        {/* Center Total */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-[#172DA1] tracking-tight">
            ${totalSpending.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-xs font-bold text-[#5D688C] uppercase tracking-wider mt-1">
            Total Spent
          </span>
        </div>
      </div>
    </div>
  );
};

export default WexSpendingChart;


