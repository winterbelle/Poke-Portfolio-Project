// console.log("hello world") //test

const starterInfo = document.getElementById("starter-info");
const pokemon = document.getElementById("pokemon");
const choosePokemon = document.getElementById("choose-pokemon");

//allows for content to appear when button is clicked on.
choosePokemon.addEventListener("click", event => {
    event.preventDefault(); //prevents page from refreshing.
    //console.log('Button was clciked.') //testing that eventlistener is working.
    let pokemonName = pokemon.value;
    pokemon.value = '';
    
    let getPokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); //gets data of selected pokemon.
    getPokemonData.then(response => {
        return response.json()
    }).then(pokemonData => {
        fillStarterInfo(pokemonData, pokemonName);
    });
});

const fillStarterInfo = (pokemonData, pokemonName) => {
    starterInfo.innerHTML = '';

    let chosenPokemonName = document.createElement(`h3`);
    chosenPokemonName.className = `starter-name` 
    chosenPokemonName.textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    starterInfo.append(chosenPokemonName)

    let type = pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.slice(1);
    let pokemonType = document.createElement(`li`);
    pokemonType.className = `starter-info-item`;
    pokemonType.innerHTML = `Type: ${type} type Pokemon`;
    starterInfo.append(pokemonType);

    let abilityOne = pokemonData.abilities[0].ability.name;
    abilityOne = abilityOne.charAt(0).toUpperCase() + abilityOne.slice(1);
    let abilityTwo = pokemonData.abilities[1].ability.name;
    abilityTwo = abilityTwo.charAt(0).toUpperCase() + abilityTwo.slice(1);
    let pokemonAbilities = document.createElement(`li`);
    pokemonAbilities.className = `starter-info-item`;
    pokemonAbilities.innerHTML = `Abilities: ${abilityOne} and ${abilityTwo} (hidden ability)`;
    starterInfo.append(pokemonAbilities);

    let weight = pokemonData.weight * .1;
    weight = weight.toFixed(1)
    let pokemonWeight = document.createElement(`li`);
    pokemonWeight.className = `starter-info-item`;
    pokemonWeight.innerHTML = `Weight: ${weight} kg`;
    starterInfo.append(pokemonWeight);

    let height = pokemonData.height * .1;
    height = height.toFixed(1);
    let pokemonHeight = document.createElement(`li`);
    pokemonHeight.className = `starter-info-item`;
    pokemonHeight.innerHTML = `Height: ${height} m`
    starterInfo.append(pokemonHeight);

    let image = pokemonData.sprites.front_default
    let pokeImage = document.createElement(`img`);
    pokeImage.className = `starter-info-img`
    pokeImage.src = image;
    pokeImage.setAttribute("alt", pokemonName);
    starterInfo.prepend(pokeImage);
    
    if (pokemonName === 'pikachu') {
        window.alert('Pikachu can only be chosen by Ash Ketchum. If you are not Ash, please select another Pokemon.');
    }
}

window.onload = () => {
    document.getElementById("back-button").addEventListener("click", () => {
        window.open("index.html", "_self");
    });
}
