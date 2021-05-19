export const fetchCharacters = async () => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    const json = await res.json();

    return json.map((item) => ({
        id: item._id,
        name: item.name,
        affiliation: item.affiliation,
        image: item.photoUrl,
    }))
}

//get sinlge