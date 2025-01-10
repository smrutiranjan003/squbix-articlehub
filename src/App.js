import React, { useContext } from 'react';
import { ArticleContext } from './context/ArticleContext';
import Homepage from './pages/Homepage';
import './styles/App.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ArticleContext);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1 className="app-title">ArticleHub</h1>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>
      <Homepage />
    </div>
  );
};

export default App;
