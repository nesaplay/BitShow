import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/index';

import { IMG_PLACEHOLDER } from '../constants';
import Spinner from '../components/common/Spinner';
import CastPreview from '../components/movie/CastPreview';
import '../css/MovieDetails.css';

class MovieDetails extends Component {

    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            nextProps.fetchSinglePost(nextProps.match.params.id);
        }
    }

    render() {

        const { image, name, externals, _embedded, rating, summary, genres } = this.props.singleMovie.movie;
        const original = image ? image.original : IMG_PLACEHOLDER;
        const parsedSummary = summary.replace(/<([^>]|["']([^"']|\\["'])*["'])*>/g, '');
        const { loaded } = this.props.singleMovie;



        return !loaded ? (
            <Spinner />
          ) : (
            <main className='main-div'>
                <div className='container movie-info'>
                    <div className='card'>
                        <img className='card-img-top' src={original} alt='' />
                        <div className='card-block container text-center title-bar'>
                            <h4 className='card-title'>{name}</h4>
                            <p className='card-text'>IMDB Rating :
                                <span className='badge badge-default badge-pill badge-size'>
                                    <a href={`http://www.imdb.com/title/${externals.imdb}/`} target='_blank'> {rating.average}</a>
                                </span>
                            </p>
                        </div>
                        <div id='accordion' role='tablist' aria-multiselectable='true'>
                            <div className='card'>
                                <div className='card-header bg-header' role='tab' id='headingOne'>
                                    <a className='collapsed block' data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                                        <div className='drop-pad-head'>
                                            <h5 className=''>
                                                Summary
                                                <span className='badge badge-light badge-pill float-right badge-size genre-format'>{genres[0]}</span>
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                                <div id='collapseOne' className='collapse' role='tabpanel' aria-labelledby='headingOne'>
                                    <div className='card card-body'>
                                        <p>{parsedSummary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header bg-header' role='tab' id='headingTwo'>
                                    <a className='collapsed block' data-toggle='collapse' data-parent='#accordion' href='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                                        <div className='drop-pad-head'>
                                            <h5 className=''>
                                                Cast
                                                <span className='badge badge-default badge-pill float-right badge-size'>{_embedded.cast.length}</span>
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                                <div id='collapseTwo' className='collapse' role='tabpanel' aria-labelledby='headingTwo'>
                                    <div className='card-block'>
                                        <ul className='list-group'>
                                            {_embedded.cast.map((actor, id) => <CastPreview {...actor} key={id} />)}
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

function mapStateToProps({ singleMovie }) {
    return { singleMovie };
}

export default connect(mapStateToProps, { fetchSinglePost })(MovieDetails);