import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchSingleCharacter} from '../services/avatarApi';
import CharacterDetail from '../components/presentational/CharacterDetail';

function AvatarDetailContainer() {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        fetchSingleCharacter(id)
        .then(setCharacter)
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            <CharacterDetail {...character} />
        </>
    )
}

export default AvatarDetailContainer;