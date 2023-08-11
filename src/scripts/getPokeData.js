async function fetchPoke(name) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    return response.json();
}

async function getPokeData(pokeNames) {
    const responsePromises = pokeNames.map(name => {
        return fetchPoke(name);
    });
    const responseArray = await Promise.all(responsePromises);
    return responseArray;
}

export default getPokeData;