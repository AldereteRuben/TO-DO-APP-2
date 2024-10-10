export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string | null;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id'>) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  filterTodos: (filter: string) => Todo[];
  searchTodos: (query: string) => Todo[];
}