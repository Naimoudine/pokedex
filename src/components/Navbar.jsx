function NavBar({pokeIndex, setPokeIndex, pokemonList}) {
    const handlePrevious = () => {
        setPokeIndex(pokeIndex - 1);
    }
    
    const handleNext = () => {
        setPokeIndex(pokeIndex + 1);
    }

    return(
        <div>
            {pokeIndex > 0 ? <button onClick={handlePrevious}>précedent</button> : ""}
            {pokeIndex < pokemonList.length - 1 ? <button onClick={handleNext}>suivant</button> : ""}
        </div>
    );
}

export default NavBar;