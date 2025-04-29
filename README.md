# Redux Toolkit Learning Project

A comprehensive project built with Vite, React, TypeScript and Redux Toolkit to demonstrate best practices in state management.

## Learning Goals

This project is designed to teach:

- Redux Toolkit's core concepts:
  - `createSlice`
  - `configureStore`
  - `createAsyncThunk`
- TypeScript integration with Redux
- Clean state management patterns
- Scalable folder structure

## Features

### 1. Todo Feature
- Add, toggle, and delete todos
- Filter by All, Active, Completed
- State managed with Redux Toolkit's `createSlice`

### 2. User Feature
- Fetch user list from JSONPlaceholder API
- Handle loading, success, and error states
- Filter users by name
- Async operations managed with `createAsyncThunk`

## Project Structure

```
src/
├── app/
│   └── store.ts             # Configure Redux store
├── features/
│   ├── todos/
│   │   ├── todosSlice.ts    # Todo state and reducers
│   │   ├── todosSelectors.ts # Memoized selectors
│   │   └── types.ts         # TypeScript interfaces
│   └── users/
│       ├── usersSlice.ts    # User state, reducers, and thunks
│       ├── usersSelectors.ts # Memoized selectors
│       └── types.ts         # TypeScript interfaces
├── components/
│   ├── TodoItem.tsx         # Todo list item component
│   ├── UserCard.tsx         # User card component
│   └── Loader.tsx           # Loading spinner component
├── pages/
│   ├── TodosPage.tsx        # Todo list page
│   └── UsersPage.tsx        # User list page
├── hooks/
│   ├── useAppSelector.ts    # TypeScript enhanced selector hook
│   └── useAppDispatch.ts    # TypeScript enhanced dispatch hook
├── App.tsx                  # Main app component with routing
└── main.tsx                 # Entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Key Redux Toolkit Concepts

### createSlice

`createSlice` is a function that accepts an initial state, an object of reducer functions, and a slice name, and automatically generates action creators and action types that correspond to the reducers and state.

Example (from `todosSlice.ts`):
```typescript
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // ...
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      // ...
    },
    // ...
  },
});
```

### createAsyncThunk

`createAsyncThunk` is a function that accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on the promise.

Example (from `usersSlice.ts`):
```typescript
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // ...
    } catch (error) {
      // ...
    }
  }
);
```

### configureStore

`configureStore` sets up a Redux store with good defaults, including combining reducers, adding thunk middleware, and setting up Redux DevTools integration.

Example (from `store.ts`):
```typescript
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer,
  },
});
```

### TypeScript Integration

Key TypeScript patterns shown:
- Typing state with interfaces
- Typing actions with `PayloadAction<T>`
- Typing thunks with return type and error handling
- Custom hooks for type-safe `useDispatch` and `useSelector`

## Learn More

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)