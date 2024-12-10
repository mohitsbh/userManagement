import React from 'react';
import AnalyticsDashboard from '../features/analytics/AnalyticsDashboard';
import UserManagement from '../features/users/UserManagement';

const Dashboard: React.FC = () => {
  return (
    <div>
 
      <AnalyticsDashboard />
      <UserManagement />
    </div>
  );
};

export default Dashboard;
