// src/components/UserActivityGraph.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserActivityGraph: React.FC = () => {
  const { activeUsers, deletedUsers, totalUsers } = useSelector(
    (state: RootState) => state.analytics
  );

  // Data for the Bar Chart
  const data = {
    labels: ['Active', 'Deleted', 'Total'],
    datasets: [
      {
        label: 'Users',
        data: [activeUsers, deletedUsers, totalUsers],
        backgroundColor: '#4caf50', // Active users color
        borderColor: '#388e3c',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        User Activity Graph
      </Typography>
      <Bar data={data} />
    </Box>
  );
};

export default UserActivityGraph;
