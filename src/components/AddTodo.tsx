import React, { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useTodoContext } from '../context/TodoContext';
import { Plus } from 'lucide-react';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo({
      title,
      completed: false,
      dueDate: dueDate || null,
      priority,
      category
    });
    setTitle('');
    setDueDate('');
    setPriority('medium');
    setCategory('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        type="date"
        label="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <FormControl fullWidth>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          label="Priority"
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        startIcon={<Plus size={20} />}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTodo;