// Functions to access state efficiently

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { FilterStatus, Todo } from './types';

/**
 * Basic selector to get all todos from state
 */
export const selectTodos = (state: RootState) => state.todos.items;

/**
 * Basic selector to get the current filter status
 */
export const selectFilter = (state: RootState) => state.todos.filter;

/**
 * Memoized selector to get filtered todos based on current filter status
 * Using createSelector for memoization - will only recompute if todos or filter changes
 */
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos: Todo[], filter: FilterStatus): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }
);

/**
 * Selector to get remaining todos count
 */
export const selectActiveTodosCount = createSelector(
  [selectTodos],
  (todos: Todo[]): number => todos.filter(todo => !todo.completed).length
);

/**
 * Selector to get completed todos count
 */
export const selectCompletedTodosCount = createSelector(
  [selectTodos],
  (todos: Todo[]): number => todos.filter(todo => todo.completed).length
);