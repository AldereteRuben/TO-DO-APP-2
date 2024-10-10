import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useTodoContext } from '../context/TodoContext';

const TodoFilters: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { filterTodos, searchTodos } = useTodoContext();

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    filterTodos(newFilter);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    searchTodos(e.target.value);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </Button>
      </Box>
    </Box>
  );
};

export default TodoFilters;