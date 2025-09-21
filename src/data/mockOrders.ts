export interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
}

const users = [
  { name: 'Natali Craig', avatar: 'N' },
  { name: 'Kate Morrison', avatar: 'K' },
  { name: 'Drew Cano', avatar: 'D' },
  { name: 'Orlando Diggs', avatar: 'O' },
  { name: 'Andi Lane', avatar: 'A' },
];

const projects = [
  'Landing Page',
  'CRM Admin pages',
  'Client Project',
  'Admin Dashboard',
  'App Landing Page',
];

const addresses = [
  'Meadow Lane Oakland',
  'Larry San Francisco',
  'Bagwell Avenue Ocala',
  'Washburn Baton Rouge',
  'Nest Lane Olivette',
];

const toIsoDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const now = Date.now();
const dates: string[] = [
  toIsoDate(new Date(now)), // Just now
  toIsoDate(new Date(now - 60 * 1000)), // A minute ago
  toIsoDate(new Date(now - 60 * 60 * 1000)), // 1 hour ago
  toIsoDate(new Date(now - 24 * 60 * 60 * 1000)), // Yesterday
  '2023-02-02', // Feb 2, 2023
];

const statuses: Order['status'][] = [
  'In Progress',
  'Complete',
  'Pending',
  'Approved',
  'Rejected',
];

// Generate 130 orders for 13 pages (10 per page)
const getRandomStatus = (): Order['status'] => statuses[Math.floor(Math.random() * statuses.length)];

export const mockOrders: Order[] = Array.from({ length: 130 }, (_, index) => ({
  id: `#CM${9801 + index}`,
  user: users[index % users.length],
  project: projects[index % projects.length],
  address: addresses[index % addresses.length],
  date: dates[index % dates.length],
  status: getRandomStatus(),
}));

export const ORDERS_PER_PAGE = 10;
export const TOTAL_PAGES = Math.ceil(mockOrders.length / ORDERS_PER_PAGE);

export const getOrdersPage = (page: number) => {
  const start = (page - 1) * ORDERS_PER_PAGE;
  const end = start + ORDERS_PER_PAGE;
  return mockOrders.slice(start, end);
};

export const hasNextPage = (page: number) => page < TOTAL_PAGES;
export const hasPrevPage = (page: number) => page > 1;