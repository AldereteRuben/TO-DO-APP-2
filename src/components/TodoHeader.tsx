import React from 'react';
import { Box, Typography } from '@mui/material';
import { CheckCircle } from 'lucide-react';

const TodoHeader: React.FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#3f51b5', 
      color: 'white', 
      padding: 2, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <CheckCircle size={32} style={{ marginRight: '10px' }} />
      <Typography variant="h4" component="h1">
        TO-DO App
      </Typography>
    </Box>
  );
};

export default TodoHeader;