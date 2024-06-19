import React from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Movie Catalogue</h1>
      <AddMovie />
      <MovieList />
    </div>
  );
};

export default App;
