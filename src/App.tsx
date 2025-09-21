import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboards/default" replace />} />
            <Route path="/dashboards/default" element={<Dashboard />} />
            <Route path="/dashboards/ecommerce" element={<Dashboard />} />
            <Route path="/dashboards/projects" element={<Dashboard />} />
            <Route path="/dashboards/courses" element={<Dashboard />} />
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/projects" element={<Dashboard />} />
            <Route path="/dashboards/orders" element={<Orders />} />
            <Route path="/pages/user-profile" element={<Dashboard />} />
            <Route path="/pages/user-profile/overview" element={<Dashboard />} />
            <Route path="/pages/user-profile/projects" element={<Dashboard />} />
            <Route path="/pages/user-profile/campaigns" element={<Dashboard />} />
            <Route path="/pages/user-profile/documents" element={<Dashboard />} />
            <Route path="/pages/user-profile/followers" element={<Dashboard />} />
            <Route path="/pages/account" element={<Dashboard />} />
            <Route path="/pages/corporate" element={<Dashboard />} />
            <Route path="/pages/blog" element={<Dashboard />} />
            <Route path="/pages/social" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;