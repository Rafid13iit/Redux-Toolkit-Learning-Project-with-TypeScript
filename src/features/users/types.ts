// TypeScript interfaces and types for the feature

/**
 * Represents a single user from the API
 */
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  /**
   * Represents loading state for async operations
   */
  export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';
  
  /**
   * Represents the state for the users slice
   */
  export interface UsersState {
    items: User[];
    status: FetchStatus;
    error: string | null;
    nameFilter: string;
  }