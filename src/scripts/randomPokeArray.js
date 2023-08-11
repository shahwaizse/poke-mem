//const pokemon = ['pikachu', 'tyranitar', 'zapdos', 'venasaur'];
function randomPokeArray(pokeArray) {
    let newPokeArray = [];
    pokeArray.forEach(element => {
        newPokeArray.push(element);
    });
    let occupiedIndexes = [];
    let pokeArraySize = pokeArray.length;
    pokeArray.forEach(element => {
        let selectedIndex = null;
        while(true) {
            let occupied = false;
            let randomIndex = Math.floor(Math.random() * pokeArraySize);
            occupiedIndexes.forEach(element => {
                if(element == randomIndex) {
                    occupied = true;
                }
            });
            if(occupied == false) {
                occupiedIndexes.push(randomIndex);
                selectedIndex = randomIndex;
                break;
            }
        }
        newPokeArray[selectedIndex] = element;
    });
    return {
        oldPokeArray: pokeArray,
        newPokeArray: newPokeArray
    }
}
//console.log(randomPokeArray(pokemon));
export default randomPokeArray;