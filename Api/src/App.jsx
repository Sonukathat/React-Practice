import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    const apiData = async () => {
      const api = "https://pokeapi.co/api/v2/pokemon/pikachu";
      try {
        const res = await fetch(api);
        const data = await res.json();
        setPokemon(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    apiData();
  }, []);

  return (
    <>
      <h1>{pokemon.order}</h1>
    </>
  );
}

export default App;
