import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';

const ProjectionsChart: React.FC = () => {
  const data = [
    { month: 'Jan', projected: 20, actual: 18 },
    { month: 'Feb', projected: 25, actual: 22 },
    { month: 'Mar', projected: 30, actual: 28 },
    { month: 'Apr', projected: 35, actual: 32 },
    { month: 'May', projected: 28, actual: 30 },
    { month: 'Jun', projected: 32, actual: 35 },
  ];

  const { isDark } = useTheme();
  return (
    <div
      className="rounded-lg p-4 h-full flex flex-col bg-white dark:bg-black dark:bg-opacity-[0.7]  "
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB' }}
    >
      <h3 className="text-14 font-semibold text-black-100 dark:text-white mb-2">Projections vs Actuals</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={20} barGap={4}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs text-black-40 dark:text-white-40" />
            <YAxis
              axisLine={false}
              tickLine={false}
              className="text-xs text-black-40 dark:text-white-40"
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(v) => (v === 0 ? '0' : `${v}M`)}
            />
            <CartesianGrid vertical={false} horizontal={false} />
            <ReferenceLine y={10} stroke="rgba(28,28,28,0.05)" strokeWidth={1} />
            <ReferenceLine y={20} stroke="rgba(28,28,28,0.05)" strokeWidth={1} />
            <ReferenceLine y={30} stroke="rgba(28,28,28,0.05)" strokeWidth={1} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="projected" fill="rgba(168,197,218,0.5)" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="actual" fill="#A8C5DA" radius={[4, 4, 0, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: 'rgba(168,197,218,0.5)' }}></div>
          <span className="text-sm text-black-40 dark:text-white-40">Projected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: '#A8C5DA' }}></div>
          <span className="text-sm text-black-40 dark:text-white-40">Actual</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectionsChart;