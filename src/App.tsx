import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import axios from 'axios'

const App = () => {

const [pokemon, setPokemon] = useState<string[]>([]);

  interface Pokemon {
    name: string
  }

  const [currentPage, setCurrentPage] = useState<string>('https://pokeapi.co/api/v2/pokemon/')
  const [nexPage, setNextPage] = useState<string | null>('')
  const [previousPage, setPreviousPage] = useState<string | null>('') 

  useEffect(()=>{
    axios.get(currentPage).then(res => {
      console.log(res.data.results)
      setNextPage(res.data.next)
      setPokemon(res.data.results.map((pokemon: Pokemon) => pokemon.name))
    })
  },[currentPage])

  return (
    <div>
      {/* <a href="https://www.youtube.com/watch?v=o3ZUc7zH8BE">Pokémon Tutorial</a> */}
      <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default App