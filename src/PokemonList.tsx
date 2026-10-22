

const PokemonList = ({ pokemon }:any) => {
  return (
    <div>
      {pokemon.map((pokemon:any) => (
        <div key={pokemon}>
            <p>{pokemon}</p>
        </div>

      ))}
    </div>
  );
};

export default PokemonList;