import React from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

const App = () => {
  return (
    <div>
      <h1>Movie Catalogue</h1>
      <AddMovie />
      <MovieList />
    </div>
  );
};

export default App;
