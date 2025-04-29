import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from './types';

/**
 * Basic selector to get all users from state
 */
export const selectUsers = (state: RootState) => state.users.items;

/**
 * Selector to get the loading status
 */
export const selectUsersStatus = (state: RootState) => state.users.status;

/**
 * Selector to get any error messages
 */
export const selectUsersError = (state: RootState) => state.users.error;

/**
 * Selector to get the name filter
 */
export const selectNameFilter = (state: RootState) => state.users.nameFilter;

/**
 * Memoized selector to get filtered users based on the name filter
 * Using createSelector for memoization - will only recompute if users or filter changes
 */
export const selectFilteredUsers = createSelector(
  [selectUsers, selectNameFilter],
  (users: User[], nameFilter: string): User[] => {
    if (!nameFilter) {
      return users;
    }
    
    const lowercasedFilter = nameFilter.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(lowercasedFilter)
    );
  }
);