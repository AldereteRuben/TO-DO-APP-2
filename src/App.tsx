import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoFilters from './components/TodoFilters';

function App() {
  return (
    <TodoProvider>
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        paddingTop: 4,
        paddingBottom: 4
      }}>
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <TodoHeader />
            <Box sx={{ p: 3 }}>
              <AddTodo />
              <TodoFilters />
              <TodoList />
              <TodoFooter />
            </Box>
          </Paper>
        </Container>
      </Box>
    </TodoProvider>
  );
}

export default App;