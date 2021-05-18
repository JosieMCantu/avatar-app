import { json } from "msw/lib/types/context"

export const fecthCharacter = async () => {
    const res = await ('https://last-airbender-api.herokuapp.com/api/v1/characters')
    const json = await res.json;
    return {
        name,
        affiliation,
        image: json.image,
};
}