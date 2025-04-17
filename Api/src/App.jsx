import { useEffect, useState } from "react";

function App() {
  const [pokemon,setPokemon] = useState(null);

  useEffect(() => {
    const apiData = async () => {
      const api = "https://pokeapi.co/api/v2/pokemon/pikachu";
      try {
        const res = await fetch(api);
        const data = await res.json();
        setPokemon(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    apiData();
  }, []);


  return (
    <>
      <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
    </>
  );
}

export default App;
