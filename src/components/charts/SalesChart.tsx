import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const SalesChart: React.FC = () => {
  const data = [
    { name: 'Direct', value: 300.56, color: '#1C1C1C', percentage: '47.1%' },
    { name: 'Affiliate', value: 135.18, color: '#BFE8C6', percentage: '21.2%' },
    { name: 'Sponsored', value: 154.02, color: '#9FA8FF', percentage: '24.1%' },
    { name: 'E-mail', value: 48.96, color: '#BCE8FF', percentage: '7.7%' },
  ];


  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length && payload[0].payload) {
      let actualPayload  = payload[0].payload;
      const value = actualPayload.percentage as string;
      return (
        <div style={{
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: 8,
          padding: '4px 8px',
          fontSize: 14
        }}>
          {value}
        </div>
      );
    }
    return null;
  };

  const { isDark } = useTheme();
  return (
    <div
      className="dark:border-white-10 rounded-lg p-6 h-full bg-white dark:bg-black dark:bg-opacity-[0.7]  "
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB' }}
    >
      <h3 className="text-14 font-semibold text-black-100 dark:text-white mb-4">Total Sales</h3>
      
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx={90}
              cy={90}
              innerRadius={56}
              outerRadius={78}
              paddingAngle={4}
              cornerRadius={10}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke={isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB'}
            >
              {data.map((_, index) => {
                const light = ['#1C1C1C', '#BFE8C6', '#9FA8FF', '#BCE8FF'];
                const dark = ['#9FA8FF', '#BFE8C6', '#B9B3ED', '#BCE8FF'];
                const fill = (isDark ? dark : light)[index % 4];
                return <Cell key={`cell-${index}`} fill={fill} />;
              })}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          </PieChart>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full">
          {data.map((item, index) => {
            const light = ['#1C1C1C', '#BFE8C6', '#9FA8FF', '#BCE8FF'];
            const dark = ['#9FA8FF', '#BFE8C6', '#B9B3ED', '#BCE8FF'];
            const dot = (isDark ? dark : light)[index % 4];
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: dot }}></div>
                  <span className="text-14 text-black-100 dark:text-white">{item.name}</span>
                </div>
                <span className="text-14 text-black-100 dark:text-white text-left">${item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;