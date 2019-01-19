import React, { Component } from 'react';
import './Movie.css';



class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster image={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.image} />
        )
    }
}

export default Movie;