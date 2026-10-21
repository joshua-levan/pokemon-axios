interface PokemonListProps {
  pokemon: string[];
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  return (
    <div>
      {pokemon.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default PokemonList;