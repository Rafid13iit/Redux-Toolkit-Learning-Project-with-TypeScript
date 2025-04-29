import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatus, User, UsersState } from './types';

// Define the initial state using the UsersState interface
const initialState: UsersState = {
  items: [],
  status: 'idle',
  error: null,
  nameFilter: '',
};

/**
 * Async thunk for fetching users from an API
 * This is where we handle asynchronous operations like API calls
 */
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      // Make the API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Check if the request was successful
      if (!response.ok) {
        return rejectWithValue('Server error!');
      }
      
      // Parse and return the data
      const data: User[] = await response.json();
      return data;
    } catch (error) {
      // Handle errors
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }
);

/**
 * Create a slice for users
 * This contains the reducer plus auto-generated actions and action creators
 */
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Set the name filter
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.nameFilter = action.payload;
    },
    
    // Clear the users list
    clearUsers: (state) => {
      state.items = [];
    },
  },
  // Handle the async thunk lifecycle actions
  extraReducers: (builder) => {
    builder
      // When we start fetching, set status to loading
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // When the fetch succeeds, update state with the fetched users
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      // When the fetch fails, update state with the error
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error occurred';
      });
  },
});

// Export the action creators
export const { setNameFilter, clearUsers } = usersSlice.actions;

// Export the reducer
export default usersSlice.reducer;