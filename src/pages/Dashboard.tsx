import React, { Suspense, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { wait } from '../utils/wait';

const KPICards = React.lazy(() => import('../components/charts/KPICards'));
const ProjectionsChart = React.lazy(() => import('../components/charts/ProjectionsChart'));
const RevenueChart = React.lazy(() => import('../components/charts/RevenueChart'));
const LocationChart = React.lazy(() => import('../components/charts/LocationChart'));
const ProductsTable = React.lazy(() => import('../components/charts/ProductsTable'));
const SalesChart = React.lazy(() => import('../components/charts/SalesChart'));

const PanelSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`h-full rounded-lg p-6 flex flex-col animate-pulse bg-white dark:bg-black dark:bg-opacity-[0.7] ${className}`}
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB' }}
    >
      <div className="mb-4">
        <div className="h-4 w-32 rounded bg-black-5 dark:bg-white-5" />
      </div>
      <div className="flex-1 grid grid-cols-8 gap-2 h-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-full flex items-end">
            <div
              className="w-full rounded bg-black-10 dark:bg-white-10"
              style={{ height: `${20 + ((i % 4) * 15)}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await wait(500);
      setIsLoading(false);
    })();
    return () => {
      setIsLoading(true);
    };
  }, []);
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-14 font-bold text-black-100 dark:text-white">eCommerce</h1>
      <div className="grid gap-6 h-full">
        <div className="flex gap-7 h-[252px]">
          <div className="flex-[1] h-full">
            <Suspense fallback={<PanelSkeleton />}>
              {isLoading ?  <PanelSkeleton /> : <KPICards />}
            </Suspense>
          </div>
          <div className="flex-[1] h-full">
            <Suspense fallback={<PanelSkeleton />}>
              {isLoading ? <PanelSkeleton /> : <ProjectionsChart />}
            </Suspense>
          </div>
        </div>
        
        <div className="flex gap-7 min-h-[300px]">
          <div className="flex-[3] h-full">
            <Suspense fallback={<PanelSkeleton />}>
              {isLoading ? <PanelSkeleton /> : <RevenueChart />}
            </Suspense>
          </div>
          <div className="flex-[1] h-full">
            <Suspense fallback={<PanelSkeleton />}>
              {isLoading ? <PanelSkeleton /> : <LocationChart />}
            </Suspense>
          </div>
        </div>
        
        <div className="flex gap-7 min-h-[400px]">
          <div className="flex-[3] h-full">
            <Suspense fallback={<PanelSkeleton />}>
              {isLoading ? <PanelSkeleton /> : <ProductsTable />}
            </Suspense>
          </div>
          <div className="flex-[1] h-full">
            <Suspense fallback={<PanelSkeleton />}>
              {isLoading ? <PanelSkeleton /> : <SalesChart />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;