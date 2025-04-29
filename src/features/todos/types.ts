//  TypeScript interfaces and types for the features

/**
 * Represents a single todo item
 */
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  
  /**
   * Represents the state for the todos slice
   */
  export interface TodosState {
    items: Todo[];
    filter: FilterStatus;
  }
  
  /**
   * Filter options for todos
   */
  export type FilterStatus = 'all' | 'active' | 'completed';