import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import type { Order } from '../data/mockOrders';
import { mockOrders, ORDERS_PER_PAGE } from '../data/mockOrders';
import OrderLoading from '../components/OrderLoading';
import { wait } from '../utils/wait';
import { 
  SearchIcon, 
  CalendarIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  DotsIcon, 
  TrashIcon,
  CloseIcon
} from '../components/icons';
import PlusSvg from '../assets/icons/plus.svg';
import FilterSvg from '../assets/icons/filter.svg';
import SortingSvg from '../assets/icons/sorting.svg';
import Contact1 from '../assets/icons/contacts/1.png';
import Contact2 from '../assets/icons/contacts/2.png';
import Contact3 from '../assets/icons/contacts/3.png';
import Contact4 from '../assets/icons/contacts/4.png';
import Contact5 from '../assets/icons/contacts/5.png';

const shuffleArray = <T,>(arr: T[]): T[] => {
  const copy = arr.slice();
  for (let index = copy.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
};

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}

const Orders: React.FC = () => {
  const { isDark } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [allOrders, setAllOrders] = useState<Order[]>(() => shuffleArray(mockOrders));
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterDate, setFilterDate] = useState<string>('');
  const [filterUser, setFilterUser] = useState<string>('');
  const [filterSearch, setFilterSearch] = useState<string>('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc' | null>(null);
  const headerCheckboxRef = useRef<HTMLInputElement>(null);

  const debouncedFilterUser = useDebouncedValue(filterUser, 300);
  const debouncedFilterSearch = useDebouncedValue(filterSearch, 300);

  const filteredSorted = useMemo(() => {
    const normalizedQuery = (debouncedFilterSearch || searchQuery).trim().toLowerCase();
    let filteredOrders = allOrders.filter(order => {
      if (filterStatus && order.status !== filterStatus) return false;
      if (filterDate && order.date !== filterDate) return false;
      if (debouncedFilterUser && !order.user.name.toLowerCase().includes(debouncedFilterUser.toLowerCase())) return false;
      if (normalizedQuery) {
        const idDigits = order.id.replace(/[^\d]/g, '');
        const dateDigits = order.date.replace(/[^\d]/g, '');
        const fields = [
          order.id,
          idDigits,
          order.user.name,
          order.project,
          order.address,
          order.date,
          dateDigits,
          order.status,
        ];
        const matches = fields.some(value => value.toLowerCase().includes(normalizedQuery));
        if (!matches) return false;
      }
      return true;
    });
    if (sortDir) {
      filteredOrders.sort((a, b) => {
        const nameA = a.user.name.toLowerCase();
        const nameB = b.user.name.toLowerCase();
        return sortDir === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      });
    }
    return filteredOrders;
  }, [allOrders, filterStatus, filterDate, debouncedFilterUser, debouncedFilterSearch, searchQuery, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / ORDERS_PER_PAGE));
  const pagedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ORDERS_PER_PAGE;
    return filteredSorted.slice(startIndex, startIndex + ORDERS_PER_PAGE);
  }, [filteredSorted, currentPage]);

  const hasPrevPage = (page: number) => page > 1;
  const hasNextPage = (page: number) => page < totalPages;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleSortDir = () => {
    setSortDir(previousSortDir => (previousSortDir === null ? 'asc' : previousSortDir === 'asc' ? 'desc' : null));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'In Progress': return 'text-purple-600';
      case 'Complete': return 'text-green-600';
      case 'Pending': return 'text-blue-600';
      case 'Approved': return 'text-yellow-600';
      case 'Rejected': return 'text-gray-500';
      default: return 'text-gray-600';
    }
  };

  const getAvatarUrl = (name: string) => {
    const avatarMap: Record<string, string> = {
      'Natali Craig': Contact1,
      'Kate Morrison': Contact5,
      'Drew Cano': Contact3,
      'Orlando Diggs': Contact2,
      'Andi Lane': Contact4,
    };
    return avatarMap[name] || Contact1;
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const showPages = Math.min(5, totalPages);
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
      pages.push(pageNumber);
    }

    return (
      <div className="flex items-center gap-1">
        {hasPrevPage(currentPage) ?(
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-2 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
          >
            <ArrowLeftIcon className="text-black-100 dark:text-white" />
          </button>
        ): <span className='w-8 h-8'></span>}
        
        {pages.map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-9 h-8 px-3 py-2 rounded-lg text-sm transition-colors ${
              page === currentPage
                ? 'text-black bg-black-5 dark:bg-white-10 dark:text-white'
                : 'hover:bg-black-5 dark:hover:bg-white-5 text-black-100 dark:text-white'
            }`}
          >
            {page}
          </button>
        ))}
        
        {hasNextPage(currentPage) ? (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-2 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
          >
            <ArrowRightIcon className="text-black-100 dark:text-white" />
          </button>
        ): <span className='w-8 h-8'></span>}
      </div>
    );
  };

  const toggleAll = (checked: boolean) => {
    if (checked) {
      const pageIds = pagedOrders.map(order => order.id);
      const next = new Set(selectedIds);
      pageIds.forEach(id => next.add(id));
      setSelectedIds(next);
    } else {
      const pageIds = new Set(pagedOrders.map(order => order.id));
      const next = new Set(Array.from(selectedIds).filter(id => !pageIds.has(id)));
      setSelectedIds(next);
    }
  };

  const toggleOne = (id: string, checked: boolean) => {
    const next = new Set(selectedIds);
    if (checked) next.add(id); else next.delete(id);
    setSelectedIds(next);
  };

  const deleteSelected = () => {
    if (selectedIds.size === 0) return;
    const remaining = allOrders.filter(order => !selectedIds.has(order.id));
    setAllOrders(remaining);
    setSelectedIds(new Set());
    const newTotalPages = Math.max(1, Math.ceil(remaining.length / ORDERS_PER_PAGE));
    if (currentPage > newTotalPages) setCurrentPage(newTotalPages);
  };
  useEffect(() => {
    (async () => {
      await wait(500);
      setIsLoading(false);
    })();
    return () => {
      setIsLoading(true);
    };
  }, []);

  // Reset to page 1 when filters/sort/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus, filterDate, filterUser, filterSearch, searchQuery, sortDir]);

  useEffect(() => {
    if (!headerCheckboxRef.current) return;
    const allSelected = pagedOrders.length > 0 && pagedOrders.every(order => selectedIds.has(order.id));
    const noneSelected = pagedOrders.every(order => !selectedIds.has(order.id));
    headerCheckboxRef.current.indeterminate = !allSelected && !noneSelected;
  }, [selectedIds, pagedOrders]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-14 font-bold text-black-100 dark:text-white">Orders List</h1>
      <div className={`flex items-center justify-between p-1 ps-3 rounded-lg ${isDark ? 'bg-white-5' : 'bg-[#F7F9FB]'}`}>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors">
            <img src={PlusSvg} alt="Add" className="w-4 h-4 dark:invert" />
          </button>
          <button 
            onClick={() => setShowFilter(!showFilter)}
            className="p-2 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
          >
            <img src={FilterSvg} alt="Filter" className="w-4 h-4 dark:invert" />
          </button>
          <button 
            onClick={toggleSortDir}
            aria-pressed={sortDir !== null}
            className="p-2 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
          >
            <img src={SortingSvg} alt="Sort" className={`w-4 h-4 dark:invert transition-transform ${sortDir === 'desc' ? 'rotate-180' : ''}`} />
          </button>
          {selectedIds.size > 0 && (
              <button
              onClick={deleteSelected}
              className="p-2 rounded-lg hover:bg-black-5 dark:hover:bg-white-5 transition-colors"
            >
                <TrashIcon className="text-black-100 dark:text-white" />
            </button>
          )}
        </div>
        
        <div className="input-shell w-40">
          <SearchIcon className="icon-muted" />
          <input
            type="search"
            placeholder="Search"
            className="flex-1 input-text w-20"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="btn-icon"
            >
              <CloseIcon className="icon-muted" />
            </button>
          )}
        </div>
      </div>

      {showFilter && (
        <div className="p-2 bg-black-5 dark:bg-white-5 rounded-lg">
          <h3 className="text-sm font-medium text-black-100 dark:text-white mb-3">Filters</h3>
          <div className="grid grid-cols-4 gap-2">
            <select 
              value={filterStatus}
              onChange={(event) => setFilterStatus(event.target.value)}
              className="px-3 py-2 bg-white text-black dark:text-white   dark:bg-white-10 border border-black-10 dark:border-white-10 rounded-lg text-sm"
            >
              <option value="">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <input 
              type="date" 
              value={filterDate}
              onChange={(event) => setFilterDate(event.target.value)}
              className="px-3 py-2 bg-white text-black dark:text-white dark:bg-white-10 border border-black-10 dark:border-white-10 rounded-lg text-sm" 
            />
            <input 
              type="text" 
              value={filterUser}
              onChange={(event) => setFilterUser(event.target.value)}
              placeholder="User" 
              className="px-3 py-2 bg-white text-black dark:text-white dark:bg-white-10 border border-black-10 dark:border-white-10 rounded-lg text-sm" 
            />
          </div>
        </div>
      )}

      <div className="rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          {isLoading ? (
            <OrderLoading/>
          ) : (
          <table className="min-w-full table-auto">
            <thead className="border-b border-black-10 dark:border-white-10">
              <tr className="text-left cursor-pointer">
                <th className="w-10 p-3">
                  <input
                    ref={headerCheckboxRef}
                    type="checkbox"
                    aria-label="Select all on page"
                    className="checkbox-accent"
                    checked={pagedOrders.length > 0 && pagedOrders.every(order => selectedIds.has(order.id))}
                    onChange={(event) => toggleAll(event.target.checked)}
                  />
                </th>
                <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Order ID</th>
                <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">User</th>
                <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Project</th>
                <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Address</th>
                <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Date</th>
                <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Status</th>
                <th className="w-10 p-3"></th>
              </tr>
            </thead>
            <tbody>
              {pagedOrders.map((order) => (
                <tr key={order.id} className="group h-10 border-b border-black-5 dark:border-white-10 hover:bg-[#F7F9FB] dark:hover:bg-white-5 transition-colors align-middle cursor-pointer">
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      aria-label={`Select ${order.id}`}
                      className={`checkbox-accent cursor-pointer ${selectedIds.has(order.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                      checked={selectedIds.has(order.id)}
                      onChange={(event) => toggleOne(order.id, event.target.checked)}
                    />
                  </td>
                  <td className="px-3 py-2 text-xs text-black-100 dark:text-white">{order.id}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <img src={getAvatarUrl(order.user.name)} alt={order.user.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-xs text-black-100 dark:text-white">{order.user.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-xs text-black-100 dark:text-white">{order.project}</td>
                  <td className="px-3 py-2 text-xs text-black-100 dark:text-white">{order.address}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="text-black-40 dark:text-white-40" />
                      <span className="text-xs text-black-100 dark:text-white">{order.date}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-xs">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button className="btn-icon">
                      <DotsIcon className="icon-muted" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        {isLoading ? (
          <div className="w-40 h-8 rounded-lg bg-black-5 dark:bg-white-5 animate-pulse" />
        ) : (
          renderPagination()
        )}
      </div>
    </div>
  );
};

export default Orders;