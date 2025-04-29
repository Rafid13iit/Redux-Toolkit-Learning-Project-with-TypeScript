import React from 'react';
import { Todo } from '../features/todos/types';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { deleteTodo, toggleTodo } from '../features/todos/todosSlice';

/**
 * Props for the TodoItem component
 */
interface TodoItemProps {
  todo: Todo;
}

/**
 * Component for rendering a single todo item
 */
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  
  // Handler for toggling the completed status
  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };
  
  // Handler for deleting the todo
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          marginLeft: '10px',
          marginRight: '10px',
        }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
      
      {/* Add some basic styling */}
      <style>{`
        .todo-item {
          display: flex;
          align-items: center;
          padding: 10px;
          margin-bottom: 5px;
          background-color: #f9f9f9;
          border-radius: 5px;
        }
        
        .todo-item button {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 3px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TodoItem;