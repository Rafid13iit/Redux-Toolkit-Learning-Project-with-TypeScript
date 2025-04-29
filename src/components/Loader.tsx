import React from 'react';

/**
 * Props for the Loader component
 */
interface LoaderProps {
  message?: string;
}

/**
 * A simple loading spinner component
 */
const Loader: React.FC<LoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>{message}</p>
      
      {/* Add some basic styling */}
      <style>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 2s linear infinite;
          margin-bottom: 10px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;