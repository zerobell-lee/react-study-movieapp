import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster image={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({image}) {
    return <img src={image} />
}

MoviePoster.propTypes = {
    image: PropTypes.string.isRequired
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};


export default Movie;