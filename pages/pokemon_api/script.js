const pokemonInput = document.getElementById("pokemonInput");
const submitBtn = document.getElementById("submitBtn");
const pokemonImg = document.getElementById("pokemonImg");
const pokemonInfo = document.getElementById("pokemonInfo");

let pokemon = "";

submitBtn.onclick = (event) => {
    displayPokemon(pokemonInput.value);
};

pokemonInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        displayPokemon(pokemonInput.value);
    }
});

async function displayPokemon(pokemon) {
    try {
        let data = await getPokemonData(pokemon);
        pokemonImg.src = data.sprites.front_default;
        pokemonInfo.textContent = data.name + " #" + data.id;
    } catch (error) {
        console.error(error);
    }
}

async function getPokemonData(pokemon) {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`,
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
