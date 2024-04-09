function NavBar({pokeIndex, setPokeIndex, pokemonList}) {

    const setPokemonIndex = (e) => {
        let currentPokemon = e.currentTarget.innerText;
        setPokeIndex(pokemonList.map(pokemon => pokemon.name).indexOf(currentPokemon));
    }

    return(
        <div>
            {pokemonList.map(pokemon => <button onClick={setPokemonIndex} key={pokemon.name}>{pokemon.name}</button>)}
        </div>
    );
}

export default NavBar;