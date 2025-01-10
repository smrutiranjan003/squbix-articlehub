import React, { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';

const SearchBar = () => {
  const { dispatch } = useContext(ArticleContext);

  const handleSearch = (e) => {
    dispatch({ type: 'FILTER_ARTICLES', payload: e.target.value });
  };

  return <input type="text" placeholder="Search..." onChange={handleSearch} />;
};

export default SearchBar;
