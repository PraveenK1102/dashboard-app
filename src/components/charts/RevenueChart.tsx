import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ComposedChart, Area, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';

const RevenueChart: React.FC = () => {
  // Values are in absolute dollars to match the 0–30M Y-axis
  // currentActual is drawn as a solid line; currentProjected is dashed and starts mid-series
  const data = [
    { month: 'Jan', currentActual: 15_000_000, currentProjected: undefined, previous: 10_000_000 },
    { month: 'Feb', currentActual: 10_000_000, currentProjected: undefined, previous: 19_000_000 },
    { month: 'Mar', currentActual: 12_000_000, currentProjected: undefined, previous: 16_000_000 },
    { month: 'Apr', currentActual: 18_000_000, currentProjected: 18_000_000, previous: 13_000_000 },
    { month: 'May', currentActual: undefined, currentProjected: 23_000_000, previous: 15_000_000 },
    { month: 'Jun', currentActual: undefined, currentProjected: 22_000_000, previous: 25_000_000 },
  ];  

  const { isDark } = useTheme();
  return (
    <div
      className="dark:border-white-10 rounded-lg p-6 h-full bg-white dark:bg-black dark:bg-opacity-[0.7]  "
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB' }}
    >
      <div className="flex items-center">
        <span className="text-14 text-black dark:text-white font-semibold border-r pr-4">Revenue</span>
        <div className="ml-6 flex items-center gap-7">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: isDark ? '#C6C7f8' : '#1C1C1C' }}></div>
            <span className="text-sm text-black dark:text-white text-xs">Current Week <span className="text-black-100 dark:text-white-100 font-bold ml-1">$58,211</span></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A8C5DA' }}></div>
            <span className="text-sm text-black dark:text-white text-xs">Previous Week <span className="text-black-100 dark:text-white-100 font-bold ml-1">$68,768</span></span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-full">
        <div className="w-full">
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={data}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs text-black-40 dark:text-white-40" />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-xs text-black-40 dark:text-white-40"
                domain={[0, 30000000]}
                ticks={[0, 10000000, 20000000, 30000000]}
                tickFormatter={(v) => (v === 0 ? '0' : `${v / 1000000}M`)}
              />
              <CartesianGrid vertical={false} horizontal={false} />
              <ReferenceLine y={10000000} stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(28,28,28,0.05)"} strokeWidth={1} />
              <ReferenceLine y={20000000} stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(28,28,28,0.05)"} strokeWidth={1} />
              <ReferenceLine y={30000000} stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(28,28,28,0.05)"} strokeWidth={1} />
              <Tooltip cursor={{ stroke: '#e5e7eb' }} />
              <Area type="monotone" dataKey="previous" stroke="#A8C5DA" fill="rgba(168,197,218,0.25)" strokeWidth={2} />
              <Line type="monotone" dataKey="currentActual" stroke={isDark ? "#C6C7f8" : "#1C1C1C"} strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="currentProjected" stroke={isDark ? "#C6C7f8" : "#1C1C1C"} strokeDasharray="6 6" strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;