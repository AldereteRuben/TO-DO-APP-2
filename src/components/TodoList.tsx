import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Box, Chip, Typography } from '@mui/material';
import { Trash2, Edit2 } from 'lucide-react';
import { useTodoContext } from '../context/TodoContext';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo, updateTodo } = useTodoContext();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  return (
    <List>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ListItem 
              dense 
              button 
              onClick={() => toggleTodo(todo.id)}
              sx={{ 
                bgcolor: 'background.paper', 
                mb: 1, 
                borderRadius: 1,
                '&:hover': { bgcolor: 'action.hover' }
              }}
            >
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText 
                primary={todo.title} 
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary">
                      {todo.category}
                    </Typography>
                    {todo.dueDate && ` — Due: ${new Date(todo.dueDate).toLocaleDateString()}`}
                  </React.Fragment>
                }
                sx={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'text.secondary' : 'text.primary'
                }}
              />
              <Chip 
                label={todo.priority} 
                color={getPriorityColor(todo.priority)} 
                size="small" 
                sx={{ mr: 1 }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => {/* Implement edit functionality */}}>
                  <Edit2 />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                  <Trash2 />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </List>
  );
};

export default TodoList;