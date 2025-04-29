// Redux state, reducers, and actions

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterStatus, Todo, TodosState } from './types';

// Define the initial state using the TodosState interface
const initialState: TodosState = {
  items: [],
  filter: 'all',
};

/**
 * Create a slice for todos
 * This contains the reducer plus auto-generated actions and action creators
 */
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo to the state
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(), // Not ideal for production, consider using uuid
        text: action.payload,
        completed: false,
      };
      state.items.push(newTodo);
    },
    
    // Toggle a todo's completed status
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    
    // Remove a todo from the state
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    // Set the filter status
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.filter = action.payload;
    },
  },
});

// Export the action creators
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;

// Export the reducer
export default todosSlice.reducer;