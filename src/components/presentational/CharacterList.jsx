import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({characters}) => (<ul aria-label='characters'>
{characters.map((character) => (
    <li key={character.id}><Character 
         name={character.name}
         id={character.id}
         affiliation={character.affiliation}
         image={character.image} />
         </li>
    ))}
</ul>);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            affiliation: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default CharacterList;