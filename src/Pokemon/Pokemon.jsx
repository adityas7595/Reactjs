import { useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCard from "./PokemonCard";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=14";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const fetchPokeData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const detailedResponse = await Promise.all(fetchPokeData);
      setPokemon(detailedResponse);
      console.log(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (isloading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <section className="container">
      <header>
        <h1>Lets catch Pokemon</h1>
      </header>
      <div>
        <ul className="cards">
          {pokemon.map((curPokemon) => {
            return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pokemon;
