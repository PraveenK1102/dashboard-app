import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  DotIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  DefaultNavIcon,
  EcommerceNavIcon,
  ProjectsNavIcon,
  CoursesNavIcon,
  AccountsNavIcon,
  CorporateNavIcon,
  BlogNavIcon,
  SocialNavIcon,
  UserProfileNavIcon,
} from '../icons';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  href?: string;
  children?: NavItem[];
  isExpanded?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'favorites' | 'recently'>('favorites');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['default', 'user-profile']));

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const dashboardItems: NavItem[] = [
    {
      id: 'default',
      label: 'Default',
      icon: DefaultNavIcon,
      href: '/dashboards/default',
      isExpanded: expandedItems.has('default')
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: ShoppingBagIcon,
      href: '/dashboards/orders',
      isExpanded: expandedItems.has('orders')
    },
    {
      id: 'ecommerce',
      label: 'eCommerce',
      icon: EcommerceNavIcon,
      href: '/dashboards/ecommerce',
      isExpanded: expandedItems.has('ecommerce')
    },
    {
      id: 'dashboard_projects',
      label: 'Projects',
      icon: ProjectsNavIcon,
      href: '/dashboards/projects',
      isExpanded: expandedItems.has('dashboard_projects')
    },
    {
      id: 'courses',
      label: 'Online Courses',
      icon: CoursesNavIcon,
      href: '/dashboards/courses',
      isExpanded: expandedItems.has('courses')
    }
  ];

  const pageItems: NavItem[] = [
    {
      id: 'user-profile',
      label: 'User Profile',
      icon: UserProfileNavIcon,
      href: '/pages/user-profile',
      isExpanded: expandedItems.has('user-profile'),
      children: [
        { id: 'overview', label: 'Overview', icon: DotIcon, href: '/pages/user-profile/overview' },
        { id: 'profile-projects', label: 'Projects', icon: DotIcon, href: '/pages/user-profile/projects' },
        { id: 'campaigns', label: 'Campaigns', icon: DotIcon, href: '/pages/user-profile/campaigns' },
        { id: 'documents', label: 'Documents', icon: DotIcon, href: '/pages/user-profile/documents' },
        { id: 'followers', label: 'Followers', icon: DotIcon, href: '/pages/user-profile/followers' }
      ]
    },
    {
      id: 'account',
      label: 'Account',
      icon: AccountsNavIcon,
      href: '/pages/account',
      isExpanded: expandedItems.has('account')
    },
    {
      id: 'corporate',
      label: 'Corporate',
      icon: CorporateNavIcon,
      href: '/pages/corporate',
      isExpanded: expandedItems.has('corporate')
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: BlogNavIcon,
      href: '/pages/blog',
      isExpanded: expandedItems.has('blog')
    },
    {
      id: 'social',
      label: 'Social',
      icon: SocialNavIcon,
      href: '/pages/social',
      isExpanded: expandedItems.has('social')
    }
  ];

  const renderNavItem = (item: NavItem, isChild = false) => {
    const isActive = location.pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = item.isExpanded;
    const showChevron = !['default', 'overview', 'projects', 'orders'].includes(item.id) && !isChild;

    return (
      <li key={item.id} className={`${isChild ? 'ml-7' : ''}`}>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-black-5 dark:hover:bg-white-5${
          isActive ? ' bg-black-5 dark:bg-white-5' : ''
        }`}>
          <div
            onClick={() => toggleExpanded(item.id)}
            className="flex w-full cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleExpanded(item.id); } }}
          >
            {showChevron && !isChild ? (
              <span
                className="p-0 opacity-100 transition-opacity w-6 flex-shrink-0 flex items-center justify-center"
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <ArrowDownIcon className="text-black-40 dark:text-white-40" />
                ) : (
                  <ArrowRightIcon className="text-black-40 dark:text-white-40" />
                )}
              </span>
            ) : (
              // Reserve space for chevron
              <span className="w-6 flex-shrink-0" />
            )}
            
            <Link
              to={item.href || '#'}
              className="flex items-center gap-1 flex-1 text-14 text-black-100 dark:text-white transition-colors"
            >
              <div className="flex items-center justify-center">
                {!isChild && item.icon ? (
                  <item.icon size={20} className="text-black-100 dark:text-white" />
                ) : null}
              </div>
              <span>{item.label}</span>
            </Link>
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <ul className="mt-1 space-y-1 transition-all duration-200 ease-in-out">
            {item.children!.map(child => renderNavItem(child, true))}
          </ul>
        )}
      </li>
    );
  };

  if (!isOpen) return null;

  return (
    <nav className="flex flex-col w-212 h-full border-r border-black-10 dark:border-white-10 bg-white dark:bg-black dark:bg-opacity-[0.7]   px-4 py-5 gap-4">
      {/* Logo */}
      <header className="flex items-center gap-2 p-1">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
        <span className="text-14 font-medium text-black-100 dark:text-white-100">ByeWind</span>
      </header>

      {/* Favorites/Recently Tabs */}
      <section className="flex flex-col gap-1 pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-2 py-1 text-14 rounded-lg transition-colors ${
              activeTab === 'favorites'
                ? 'text-black-40 dark:text-white-40'
                : 'text-black-20 dark:text-white-20'
            }`}
            role="tab"
            aria-selected={activeTab === 'favorites'}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('recently')}
            className={`px-2 py-1 text-14 rounded-lg transition-colors ${
              activeTab === 'recently'
                ? 'text-black-40 dark:text-white-40'
                : 'text-black-20 dark:text-white-20'
            }`}
            role="tab"
            aria-selected={activeTab === 'recently'}
          >
            Recently
          </button>
        </div>
        
        <ul className="space-y-1">
          <li className="flex items-center gap-1 px-2 py-1">
            <DotIcon className="text-gray-400" />
            <Link to="/overview" className="text-14 text-black-100 dark:text-white flex-1">Overview</Link>
          </li>
          <li className="flex items-center gap-1 px-2 py-1">
            <DotIcon className="text-gray-400" />
            <Link to="/projects" className="text-14 text-black-100 dark:text-white flex-1">Projects</Link>
          </li>
        </ul>
      </section>

      {/* Dashboards Section */}
      <section className="flex flex-col gap-1 pb-3">
        <h2 className="px-3 py-1 text-14 text-black-40 dark:text-white-40">Dashboards</h2>
        <ul className="space-y-1">
          {dashboardItems.map(item => renderNavItem(item))}
        </ul>
      </section>

      {/* Pages Section */}
      <section className="flex flex-col gap-1">
        <h2 className="px-3 py-1 text-14 text-black-40 dark:text-white-40">Pages</h2>
        <ul className="space-y-1">
          {pageItems.map(item => renderNavItem(item))}
        </ul>
      </section>
    </nav>
  );
};

export default Sidebar;