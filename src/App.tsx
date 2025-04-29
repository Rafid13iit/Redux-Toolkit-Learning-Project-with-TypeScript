import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import UsersPage from './pages/UsersPage';

/**
 * Main App component
 * Sets up routing and provides navigation
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Redux Toolkit + TypeScript Learning Project</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Todos (createSlice)</Link>
              </li>
              <li>
                <Link to="/users">Users (createAsyncThunk)</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<TodosPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </main>
        
        <footer>
          <p>
            Built with React, Redux Toolkit, and TypeScript to demonstrate best practices
          </p>
        </footer>
        
        {/* Add some basic styling */}
        <style>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
              Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
          }
          
          .app {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          
          header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
          }
          
          header h1 {
            margin-bottom: 15px;
          }
          
          nav ul {
            display: flex;
            list-style: none;
            justify-content: center;
          }
          
          nav li {
            margin: 0 15px;
          }
          
          nav a {
            color: white;
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 4px;
            transition: background-color 0.3s;
          }
          
          nav a:hover {
            background-color: #34495e;
          }
          
          main {
            flex-grow: 1;
            padding: 20px;
          }
          
          footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 15px;
            margin-top: 30px;
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;