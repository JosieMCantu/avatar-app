export const fetchCharacters = async () => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');

    const json = await res.json();

    return json.map((item) => ({
        id: item._id,
        name: item.name,
        affiliation: item.affiliation ? item.affiliation : 'No Affiliation',
        image: item.photoUrl ? item.photoUrl : 'No Image',
    }))
}

export const fetchSingleCharacter = async (id) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

    const json = await res.json();
    return {
        id: json._id,
        name: json.name,
        affiliation: json.affiliation ? json.affiliation : 'No Affiliation',
        image: json.photoUrl,
    };
}