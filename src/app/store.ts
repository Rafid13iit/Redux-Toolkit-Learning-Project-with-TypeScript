import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import usersReducer from '../features/users/usersSlice';

/**
 * Configure the Redux store with our slices
 * This is the root of our state management
 */
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todos: TodosState, users: UsersState}
export type AppDispatch = typeof store.dispatch;