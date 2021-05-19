import React, {useState, useEffect} from 'react';
import CharacterList from '../components/presentational/CharacterList';
import {fetchCharacters} from '../services/avatarApi.js';

function AvatarContainer() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCharacters()
        .then(setCharacters)
        .finally(() => setLoading(false));
    }, []);

    return (
        <>
            
            {loading === true && <h1>Loading...</h1>}{loading === false && <CharacterList characters={characters} />}
        </>
    )
}

export default AvatarContainer;