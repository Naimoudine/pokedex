import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  
function App() {
  const [pokeIndex, setPokeIndex] = useState(0);

  const handlePrevious = () => {
    setPokeIndex(pokeIndex - 1);
  }

  const handleNext = () => {
    setPokeIndex(pokeIndex + 1);
  }

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokeIndex]}/>
        <div>
          {pokeIndex > 0 ? <button onClick={handlePrevious}>précedent</button> : ""}

          {pokeIndex < pokemonList.length - 1 ? <button onClick={handleNext}>suivant</button> : ""}
        </div>
      </div>
    </>
  )
}

export default App
