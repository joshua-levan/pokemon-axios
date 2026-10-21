

const PokemonList = ({ pokemon }:any) => {
  return (
    <div>
      {pokemon.map((pokemon:any) => (
        <div key={pokemon.name}>
            <p>{pokemon.name}</p>
        </div>

      ))}
    </div>
  );
};

export default PokemonList;