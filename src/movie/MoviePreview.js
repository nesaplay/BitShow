import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMG_PLACEHOLDER } from '../constants';

import '../css/MoviePreview.css';

const MoviePreview = props => {

    const { image, name, id } = props;
    const imageSrc = image ? image.medium : IMG_PLACEHOLDER;

    return (
        <article className='col-sm-6 col-md-4 col-lg-3 preview'>
            <Link to={`/${id}`}>
                <div className="card">
                    <div className='container-item'>
                        <img className="card-img-top rounded" src={imageSrc} alt="" />
                        <div className='overlay'>
                            <div className='info'>More Info</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                    </div>
                </div>
            </Link>
        </article>
    );
};

MoviePreview.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};


export default MoviePreview;