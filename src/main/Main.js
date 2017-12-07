import React, { Component } from 'react';

import { dataService } from '../services/dataService';
import MoviePreview from '../movie/MoviePreview';
import '../css/Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState() {
        return {
            movies: []
        }
    }

    collectData = movies => {
        this.setState({ movies });
    }

    // Render methods

    displayMovies() {
        return (
            this.state.movies.map(movie =>
                <MoviePreview {...movie} key={movie.id} />
            )
        )
    }

    // Lifecycle Methods
    componentDidMount() {
        dataService.fetchAllMovies(this.collectData);
    }

    render() {
        return (
            <main className='container'>
                <h3 className='text-center main-format'>
                    <span className='featured-title'>Featured shows</span>
                </h3>
                <div className='row'>
                    {this.displayMovies()}
                </div>
            </main>
        );
    }
}