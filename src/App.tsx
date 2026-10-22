import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import axios from 'axios'

const App = () => {

const [pokemon, setPokemon] = useState<string[]>([]);

  interface Pokemon {
    name: string[]
  }

  const [currentPage, setCurrentPage] = useState<string>('https://pokeapi.co/api/v2/pokemon/')
  const [nextPage, setNextPage] = useState<string | null>('')
  const [previousPage, setPreviousPage] = useState<string | null>('') 
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  const controller = new AbortController();

  setLoading(true);

  axios.get(currentPage, {
    signal: controller.signal
  }).then(res => {
    setNextPage(res.data.next);
    setPreviousPage(res.data.previous);
    setPokemon(
      res.data.results.map((pokemon: Pokemon) => pokemon.name)
    );
  }).catch(error => {
    if (!axios.isCancel(error)) {
      console.error(error);
    }
  }).finally(() => {
    setLoading(false);
  });

  return () => controller.abort();
}, [currentPage]);

const goToNextPage = () => {
  if (nextPage !== null) {
    setCurrentPage(nextPage);
  }
};

const goToPreviousPage = () => {
  if (previousPage !== null) {
    setCurrentPage(previousPage);
  }
};

  if(loading) return 'Loading...'
  return (
    <div>
      {/* <a href="https://www.youtube.com/watch?v=o3ZUc7zH8BE">Pokémon Tutorial</a> */}
      <PokemonList pokemon={pokemon}/>
      <button onClick={goToPreviousPage} disabled={!previousPage}>
        Prev
      </button>
      <button onClick={goToNextPage} disabled={!nextPage}>
        Next
      </button>
    </div>
  )
}

export default App