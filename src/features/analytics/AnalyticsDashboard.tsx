import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { userRegistrationTrend, usersByRegion } from '../../data/mockData';

const AnalyticsDashboard: React.FC = () => {
  // Mock data for total, active, and deleted users
  const totalUsers = 500;
  const activeUsers = 350;
  const deletedUsers = 50;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Analytics Dashboard</h2>

      {/* Cards for Total, Active, and Deleted Users */}
      <Grid container spacing={2} style={{ marginBottom: '30px' }}>
        <Grid item xs={12} sm={4}>
          <Card style={styles.card}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h4" style={styles.cardValue}>
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={styles.card}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Active Users
              </Typography>
              <Typography variant="h4" style={styles.cardValue}>
                {activeUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={styles.card}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Deleted Users
              </Typography>
              <Typography variant="h4" style={styles.cardValue}>
                {deletedUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Line Chart: User Registration Trend */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>User Registration Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userRegistrationTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#4caf50" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: Users by Region */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Users by Region</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={usersByRegion}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#2196f3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f6f8',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  chartTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#555',
    marginBottom: '15px',
    textAlign: 'center',
  },
  card: {
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cardValue: {
    fontWeight: 'bold',
    color: '#4caf50',
  },
};

export default AnalyticsDashboard;
