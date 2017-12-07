import React, { Component } from 'react';

import { dataService } from '../services/dataService';
import CastPreview from './CastPreview';
import '../css/MovieDetails.css';

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState() {
        return {
            movie: {
                image: {
                    original: 'http://via.placeholder.com/700x1000'
                },
                name: '',
                rating: {
                    average: 'N/A'
                },
                externals: {
                    imdb: ''
                },
                _embedded: {
                    seasons: [],
                    cast: []
                },
                summary: '',
                genres: ['']
            }
        }
    }

    collectData = movie => {
        this.setState({ movie });
    }

    componentDidMount() {
        dataService.fetchSinglePost(this.props.match.params.id, this.collectData);
    }

    componentWillReceiveProps(nextProps) {
        dataService.fetchSinglePost(nextProps.match.params.id, this.collectData)
    }

    render() {
        
        const { image, name, externals, _embedded, rating, summary, genres } = this.state.movie;
        const parsedSummary = summary.replace(/<([^>]|["']([^"']|\\["'])*["'])*>/g, "");

        return (
            <main className='main-div'>
                <div className='container movie-info'>
                    <div className="card">
                        <img className="card-img-top" src={image.original} alt="" />
                        <div className="card-block container text-center title-bar">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">IMDB Rating :
                                <span className="badge badge-default badge-pill badge-size">
                                    <a href={`http://www.imdb.com/title/${externals.imdb}/`} target="_blank"> {rating.average}</a>
                                </span>
                            </p>
                        </div>
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="card">
                                <div className="card-header bg-header" role="tab" id="headingOne">
                                    <h5 className="mb-0">
                                        <a className='collapsed block' data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Summary
                                        <span className="badge badge-light badge-pill float-right badge-size genre-format">{genres[0]}</span>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="card card-body">
                                        <p>{parsedSummary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-header" role="tab" id="headingTwo">
                                    <h5 className="mb-0">
                                        <a className="collapsed block" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Cast
                                        <span className="badge badge-default badge-pill float-right badge-size">{_embedded.cast.length}</span>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="card-block">
                                        <ul className='list-group'>
                                            {_embedded.cast.map((actor, id) => <CastPreview {...actor} key={id}/>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
};
