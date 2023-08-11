async function pokeSpriteUrl() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();
    const url = data['sprites']['front_default'];
    return url;
}

export default pokeSpriteUrl;