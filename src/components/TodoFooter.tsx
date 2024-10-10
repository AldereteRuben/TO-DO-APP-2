import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTodoContext } from '../context/TodoContext';

const TodoFooter: React.FC = () => {
  const { todos, clearCompleted } = useTodoContext();
  const activeTodos = todos.filter(todo => !todo.completed).length;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
      <Typography variant="body2">
        {activeTodos} {activeTodos === 1 ? 'item' : 'items'} left
      </Typography>
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={clearCompleted}
        disabled={todos.length === activeTodos}
      >
        Clear Completed
      </Button>
    </Box>
  );
};

export default TodoFooter;