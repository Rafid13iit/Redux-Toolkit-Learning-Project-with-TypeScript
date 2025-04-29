import React from 'react';
import { User } from '../features/users/types';

/**
 * Props for the UserCard component
 */
interface UserCardProps {
  user: User;
}

/**
 * Component for displaying a user card
 */
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <div className="user-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}</p>
      </div>
      
      {/* Add some basic styling */}
      <style>{`
        .user-card {
          background-color: #f9f9f9;
          border-radius: 5px;
          padding: 15px;
          margin-bottom: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .user-card h3 {
          margin-top: 0;
          color: #2c3e50;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        
        .user-info p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default UserCard;