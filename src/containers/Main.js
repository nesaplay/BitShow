import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../actions/index';

import Spinner from '../components/common/Spinner';
import MoviePreview from '../components/movie/MoviePreview';
import '../css/Main.css';

class Main extends Component {
  collectData = movies => {
    this.setState({ movies });
  };

  // Render methods

  displayMovies() {
    return this.props.moviesList.data.map(movie => (
      <MoviePreview {...movie} key={movie.id} />
    ));
  }

  // Lifecycle Methods
  componentDidMount() {
    this.props.fetchAllMovies();
  }

  render() {
    const { loaded } = this.props.moviesList;

    return (
      <main className="container">
        <h3 className="text-center main-format">
          <span className="featured-title">Featured shows</span>
        </h3>
        <div className="row">
          {loaded ? this.displayMovies() : <Spinner />}
        </div>
      </main>
    );
  }
}

function mapStateToProps({ moviesList }) {
  return { moviesList };
}

export default connect(mapStateToProps, { fetchAllMovies })(Main);
