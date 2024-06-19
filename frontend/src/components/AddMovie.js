import React, { useState } from 'react';
import axios from 'axios';
import './AddMovie.css';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    year: ''
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/movies', movie);
    setMovie({ title: '', director: '', genre: '', year: '' });
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Director" required />
      <input type="text" name="genre" value={movie.genre} onChange={handleChange} placeholder="Genre" required />
      <input type="number" name="year" value={movie.year} onChange={handleChange} placeholder="Year" required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
