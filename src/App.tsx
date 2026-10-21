import React, { useState } from 'react'
import PokemonList from './PokemonList';

const App = () => {

const [pokemon, setPokemon] = useState<string[]>(['Bulbasaur', "Charmander"]);

  return (
    <div>
      <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default App