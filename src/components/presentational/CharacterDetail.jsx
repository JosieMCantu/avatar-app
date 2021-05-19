import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({id, image, affiliation, name}) {
    
    return (
        <><ul aria-label='character'>
            <li><h1>Detail Page</h1>
            <img src={image} alt={name} />
            <p>{id}</p>
            <p>{name}</p>
            <p>{affiliation}</p></li>
            </ul>
        </>
    )
}

CharacterDetail.propTypes = {
    
}

export default CharacterDetail;

