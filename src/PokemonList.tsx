interface PokemonListProps {
  pokemon: string[];
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  return (
    <div>
      {pokemon.map((pokemon) => (
        <p key={pokemon}>{pokemon}</p>
      ))}
    </div>
  );
};

export default PokemonList;