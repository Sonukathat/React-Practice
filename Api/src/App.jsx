import { useEffect, useState } from "react";

function App() {
  const [jok, setJok] = useState("");

  useEffect(() => {
    const apiData = async () => {
      const api = "https://official-joke-api.appspot.com/random_joke";
      try {
        const res = await fetch(api);
        const data = await res.json();
        setJok(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    apiData();
  }, []);

  return (
    <>
       <h1>{jok.type}</h1>
    </>
  );
}

export default App;
