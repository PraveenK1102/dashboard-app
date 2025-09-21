import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ProductsTable: React.FC = () => {
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$5,087.36' },
  ];

  const { isDark } = useTheme();
  return (
    <div
      className="rounded-lg p-6 h-full bg-white dark:bg-black dark:bg-opacity-[0.7]  "
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB' }}
    >
      <h3 className="text-14 font-semibold text-black-100 dark:text-white mb-4">Top Selling Products</h3>
      
      <div className="overflow-hidden">
        <div className="grid grid-cols-4 gap-4 pb-3 border-b border-black-10 dark:border-white-10">
          <div className="text-sm text-black-40 dark:text-white-40">Name</div>
          <div className="text-sm text-black-40 dark:text-white-40">Price</div>
          <div className="text-sm text-black-40 dark:text-white-40">Quantity</div>
          <div className="text-sm text-black-40 dark:text-white-40">Amount</div>
        </div>
        
        <div className="space-y-3 mt-3">
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 py-2 hover:bg-black-5 dark:hover:bg-white-5 rounded transition-colors">
              <div className="text-sm text-black-100 dark:text-white truncate">{product.name}</div>
              <div className="text-sm text-black-100 dark:text-white">{product.price}</div>
              <div className="text-sm text-black-100 dark:text-white">{product.quantity}</div>
              <div className="text-sm text-black-100 dark:text-white">{product.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;