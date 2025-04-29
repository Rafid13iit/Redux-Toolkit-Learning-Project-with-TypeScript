import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchUsers, setNameFilter } from '../features/users/usersSlice';
import { selectFilteredUsers, selectUsersError, selectUsersStatus } from '../features/users/usersSelectors';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';

/**
 * Page component for the Users application
 */
const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const filteredUsers = useAppSelector(selectFilteredUsers);
  const status = useAppSelector(selectUsersStatus);
  const error = useAppSelector(selectUsersError);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  // Fetch users when the component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);
  
  // Handler for searching users
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setNameFilter(searchTerm));
  };
  
  // Render based on the current status
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <Loader message="Loading users..." />;
      case 'failed':
        return <div className="error-message">Error: {error}</div>;
      case 'succeeded':
        return (
          <div className="users-list">
            {filteredUsers.length === 0 ? (
              <p className="empty-message">No users found matching your criteria.</p>
            ) : (
              filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))
            )}
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="users-page">
      <h1>Users</h1>
      <p className="subheading">
        This component demonstrates Redux Toolkit's <code>createAsyncThunk</code> for 
        handling async operations like API calls.
      </p>
      
      {/* Search form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users by name..."
        />
        <button type="submit">Search</button>
      </form>
      
      {/* Refresh button */}
      <button 
        onClick={() => dispatch(fetchUsers())} 
        className="refresh-button"
        disabled={status === 'loading'}
      >
        Refresh Users
      </button>
      
      {/* Users list */}
      {renderContent()}
      
      {/* Add some basic styling */}
      <style>{`
        .users-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .subheading {
          color: #666;
          margin-bottom: 20px;
        }
        
        .search-form {
          display: flex;
          margin-bottom: 20px;
        }
        
        .search-form input {
          flex-grow: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 16px;
        }
        
        .search-form button {
          padding: 10px 15px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          font-size: 16px;
        }
        
        .refresh-button {
          margin-bottom: 20px;
          padding: 8px 15px;
          background-color: #2ecc71;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .refresh-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .error-message {
          color: #e74c3c;
          padding: 15px;
          background-color: #fadbd8;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        
        .empty-message {
          text-align: center;
          color: #777;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default UsersPage;