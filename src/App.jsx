import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/Navbar';

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

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, [])

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokeIndex]}/>
      </div>
      <NavBar pokeIndex={pokeIndex} setPokeIndex={setPokeIndex} pokemonList={pokemonList} />
    </>
  )
}

export default App
