import React from 'react';
import PropTypes from 'prop-types';

function Character({name, affiliation, image, id}) {
    return (
        <>
            <img src={image} alt={name} />
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Affiliation: {affiliation}</p>
        </>
    )
}

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Character;

