import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component {
  render() {
    return (
        <div>
            <MoviePoster />
            <h1>Hello this is a movie</h1>
        </div>
    );
  }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg" />
        )
    }
}

export default Movie;