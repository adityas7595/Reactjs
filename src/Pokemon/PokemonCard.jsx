const PokemonCard = ({ pokemonData }) => {
  console.log("pokemonData===============>",pokemonData);
  
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        ></img>
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height: </span> {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span>Weight: </span> {pokemonData.weight}
        </p>
      </div>
    </li>
  );
};

export default PokemonCard;
