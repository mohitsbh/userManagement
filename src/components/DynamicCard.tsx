// src/components/DynamicCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface DynamicCardProps {
  title: string;
  value: number | string;
  backgroundColor: string;
}

const DynamicCard: React.FC<DynamicCardProps> = ({ title, value, backgroundColor }) => {
  return (
    <Card sx={{ backgroundColor, color: '#fff', padding: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h3">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DynamicCard;
