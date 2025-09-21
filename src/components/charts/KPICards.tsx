import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { TrendUpIcon, TrendDownIcon } from '../icons';

const KPICards: React.FC = () => {
  const { isDark } = useTheme();
  const kpis = [
    { label: 'Customers', value: '3,781', change: '+11.01' },
    { label: 'Orders', value: '1,219', change: '-0.03' },
    { label: 'Revenue', value: '$695', change: '+15.03'},
    { label: 'Growth', value: '30.1%', change: '+6.08' },
  ];
  const backgroundColors = ['#E3F5FF', '#F7F9FB', '#F7F9FB', '#E5ECF6'];
  const darkBackgroundColors = ['#E3F5FF', '#1F1F1F', '#1F1F1F', '#E3F5FF'];

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="dark:border-white-10 rounded-lg p-4 flex flex-col justify-center bg-white"
          style={{ backgroundColor: isDark ? darkBackgroundColors[index] : backgroundColors[index] }}
        >
          {(() => {
            const isLightOnDark = isDark && (index === 0 || index === 3);
            return (
              <div className={`text-sm mb-2 text-black font-semibold ${isLightOnDark ? '' : 'dark:text-white'}`}>{kpi.label}</div>
            );
          })()}
          <div className="flex items-center justify-between">
            {(() => {
              const isLightOnDark = isDark && (index === 0 || index === 3);
              return (
                <div className={`text-[24px] font-semibold mb-1 ${isLightOnDark ? 'text-black-100' : 'text-black-100 dark:text-white'}`}>{kpi.value}</div>
              );
            })()}
            {(() => {
              const numeric = parseFloat(kpi.change.replace(/[^0-9.-]/g, ''));
              const isPositive = numeric >= 0;
              return (
                <div className={`inline-flex items-center gap-1 text-sm ${isDark && (index === 0 || index === 3) ? 'text-black-100' : 'text-black-100 dark:text-white'}`}>
                  <span>{kpi.change}</span>
                  {isPositive ? <TrendUpIcon className="" /> : <TrendDownIcon className="" />}
                </div>
              );
            })()}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default KPICards;