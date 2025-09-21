import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  StarIcon, 
  SearchIcon, 
  SunIcon, 
  MoonIcon, 
  ClockIcon, 
  BellIcon, 
  SidebarIcon,
  CloseIcon
} from '../icons';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleAside: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onToggleAside }) => {
  const { isDark, toggleTheme } = useTheme();
  const [headerSearch, setHeaderSearch] = useState('');
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const group = segments[0] || 'dashboards';
  const trail = segments.slice(1);

  return (
    <header className="flex items-center justify-between px-7 py-5 border-b border-black-10 dark:border-white-10 bg-white dark:bg-black dark:bg-opacity-[0.7]   min-h-[68px]">
      <nav className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="p-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
            aria-label="Toggle sidebar"
          >
            <SidebarIcon className="h-5 w-5 text-black-100 dark:text-white-100" />
          </button>
          <button className="p-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors">
            <StarIcon className="text-black-100 dark:text-white-100" />
          </button>
        </div>
        
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <span className="px-2 py-1 rounded-lg text-14 text-black-40 dark:text-white-40" aria-current={trail.length === 0 ? 'page' : undefined}>
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </span>
            </li>
            {trail.map((seg, index) => {
              const href = `/${[group, ...trail.slice(0, index + 1)].join('/')}`;
              const isLast = index === trail.length - 1;
              const label = seg
                .split('-')
                .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                .join(' ');
              return (
                <React.Fragment key={href}>
                  <li className="text-black-20 dark:text-white-20">/</li>
                  <li>
                    {isLast ? (
                      <span className="px-2 py-1 rounded-lg text-14 text-black-100 dark:text-white-100" aria-current="page">{label}</span>
                    ) : (
                      <Link to={href} className="px-2 py-1 rounded-lg text-14 text-black-100 dark:text-white-100 hover:bg-black-5 dark:hover:bg-white-5 transition-colors">{label}</Link>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </nav>

      <div className="flex items-center gap-5">
        <div className="relative input-shell w-52">
          <SearchIcon className="icon-muted" />
          <input
            type="search"
            placeholder="Search"
            className="flex-1 input-text text-14 pr-6 w-40"
            value={headerSearch}
            onChange={(e) => setHeaderSearch(e.target.value)}
          />
          {headerSearch ? (
            <button
              type="button"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 inline-flex items-center justify-center rounded hover:bg-black-10 dark:hover:bg-white-10"
              aria-label="Clear search"
              onClick={() => setHeaderSearch('')}
            >
              <CloseIcon className="icon-muted" />
            </button>
          ) : (
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-14 text-black-20 dark:text-white-20">⌘/</kbd>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="text-white-100" />
            ) : (
              <MoonIcon className="text-black-100" />
            )}
          </button>
          <button className="p-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors">
            <ClockIcon className="text-black-100 dark:text-white-100" />
          </button>
          <button className="p-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors fill-black-100 dark:fill-white-100">
            <BellIcon className="text-black-100 dark:text-white-100 fill-black-5 dark:fill-white-10" />
          </button>
          <button
            onClick={onToggleAside}
            className="p-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
            aria-label="Toggle aside"
          >
            <SidebarIcon className="h-5 w-5 text-black-100 dark:text-white-100" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;