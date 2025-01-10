import React, { useContext, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterPills from '../components/FilterPills';
import ArticleList from '../components/ArticleList';
import { ArticleContext } from '../context/ArticleContext';
import './Homepage.css';

const Homepage = () => {
  const { articles, dispatch } = useContext(ArticleContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: '',
    content: '',
  });

  const handleAddArticle = () => {
    dispatch({ type: 'ADD_ARTICLE', payload: newArticle });
    setModalOpen(false);
  };

  return (
    <div className="homepage">
      <SearchBar />
      <FilterPills />
      <button className="add-article-button" onClick={() => setModalOpen(true)}>
        ➕ Add Article
      </button>
      <ArticleList articles={articles} />
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Article</h2>
            <input
              type="text"
              placeholder="Title"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              value={newArticle.category}
              onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
            />
            <textarea
              placeholder="Content"
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
            ></textarea>
            <button onClick={handleAddArticle}>Add</button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
