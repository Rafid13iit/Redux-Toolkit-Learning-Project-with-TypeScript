import React, { useState } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addTodo, setFilter } from '../features/todos/todosSlice';
import { selectActiveTodosCount, selectCompletedTodosCount, selectFilter, selectFilteredTodos } from '../features/todos/todosSelectors';
import TodoItem from '../components/TodoItem';
import { FilterStatus } from '../features/todos/types';

/**
 * Page component for the Todo application
 */


// type Props = {
//   title: string;
// };

// const TodosPage = ({ title }: Props) => {
//   return <h1>{title}</h1>;
// };


const TodosPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const filteredTodos = useAppSelector(selectFilteredTodos);
  const currentFilter = useAppSelector(selectFilter);
  const activeTodosCount = useAppSelector(selectActiveTodosCount);
  const completedTodosCount = useAppSelector(selectCompletedTodosCount);
  
  const [newTodoText, setNewTodoText] = useState('');
  
  // Handler for adding a new todo
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText('');
    }
  };
  
  // Handler for changing the filter
  const handleFilterChange = (filter: FilterStatus) => {
    dispatch(setFilter(filter));
  };
  
  return (
    <div className="todos-page">
      <h1>Todo List</h1>
      
      {/* Form for adding new todos */}
      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Todo</button>
      </form>
      
      {/* Filter controls */}
      <div className="filters">
        <button
          className={currentFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All ({activeTodosCount + completedTodosCount})
        </button>
        <button
          className={currentFilter === 'active' ? 'active' : ''}
          onClick={() => handleFilterChange('active')}
        >
          Active ({activeTodosCount})
        </button>
        <button
          className={currentFilter === 'completed' ? 'active' : ''}
          onClick={() => handleFilterChange('completed')}
        >
          Completed ({completedTodosCount})
        </button>
      </div>
      
      {/* Todo list */}
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-message">No todos to display.</p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
      
      {/* Add some basic styling */}
      <style>{`
        .todos-page {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .add-todo-form {
          display: flex;
          margin-bottom: 20px;
        }
        
        .add-todo-form input {
          flex-grow: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 16px;
        }
        
        .add-todo-form button {
          padding: 10px 15px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          font-size: 16px;
        }
        
        .filters {
          display: flex;
          margin-bottom: 20px;
        }
        
        .filters button {
          margin-right: 10px;
          padding: 8px 12px;
          background-color: #f1f1f1;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .filters button.active {
          background-color: #3498db;
          color: white;
        }
        
        .empty-message {
          text-align: center;
          color: #777;
          font-style: italic;
        }
      `}
        </style>
    </div>
    );
}
export default TodosPage;