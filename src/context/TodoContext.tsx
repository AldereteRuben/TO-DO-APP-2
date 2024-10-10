import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Todo, TodoContextType } from '../types/todo';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Learn React', completed: false, dueDate: '2023-12-31', priority: 'high', category: 'Learning' },
    { id: '2', title: 'Build a TO-DO app', completed: true, dueDate: null, priority: 'medium', category: 'Project' },
  ]);

  const addTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodo: Todo = {
      ...todo,
      id: Date.now().toString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    ));
  };

  const filterTodos = (filter: string): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const searchTodos = (query: string): Todo[] => {
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(query.toLowerCase()) ||
      todo.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <TodoContext.Provider value={{ 
      todos, 
      addTodo, 
      toggleTodo, 
      deleteTodo, 
      clearCompleted, 
      updateTodo,
      filterTodos,
      searchTodos
    }}>
      {children}
    </TodoContext.Provider>
  );
};