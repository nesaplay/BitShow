import React from 'react';
import PropTypes from 'prop-types';
import { ICO_PLACEHOLDER } from '../constants';
import '../css/CastPreview.css';

const CastPreview = props => {

    const { person, character } = props;
    const personImage = person.image ? person.image.medium : ICO_PLACEHOLDER;
    const characterImage = character.image ? character.image.medium : ICO_PLACEHOLDER;

    return (
        <li className='list-group-item cast-item'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6'>
                    <img src={personImage} alt='' className='image-avatar' />
                    <span className='cast-name'>{person.name}</span>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6'>
                    <span className='divider-dots'>...</span>
                    <div className=' float-right'>
                        <span className='cast-name'>{character.name}</span>
                        <img src={characterImage} alt='' className='image-avatar' />
                    </div>
                </div>
            </div>
        </li>
    );
};

CastPreview.propTypes = {
    person: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
};

export default CastPreview;