import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import axios from 'axios'

const App = () => {
useEffect(()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
    setPokemon(res.data.results)
  })
},[])


const [pokemon, setPokemon] = useState<string[]>([]);

  return (
    <div>
      {/* <a href="https://www.youtube.com/watch?v=o3ZUc7zH8BE">Pokémon Tutorial</a> */}
      <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default App