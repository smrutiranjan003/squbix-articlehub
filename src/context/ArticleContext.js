import React, { createContext, useReducer } from 'react';
import { articles } from '../data/articles';

const initialState = {
  articles,
  theme: 'light', // Default theme is light
};

// Reducer to manage state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return { ...state, articles: [action.payload, ...state.articles] };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Create Article Context
export const ArticleContext = createContext();

// Theme Context Provider
export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  return (
    <ArticleContext.Provider value={{ ...state, dispatch, toggleTheme }}>
      {children}
    </ArticleContext.Provider>
  );
};
