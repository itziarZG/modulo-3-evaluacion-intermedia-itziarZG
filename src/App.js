import "./App.scss";
import data from "./data.json";
import Pokelist from "./components/PokeList";
import { useState } from "react";

function App() {
  const mydata = data.map((item) => {
    item.isFav = false;
    return item;
  });
  const [pokemons, setFavPoks] = useState(mydata);

  const handleFav = (ev) => {
    const isFavItem = pokemons.findIndex(
      (pok) => parseInt(pok.id) === parseInt(ev.currentTarget.id)
    );
    pokemons[isFavItem].isFav = !pokemons[isFavItem].isFav;
    setFavPoks(pokemons);
    console.log(pokemons);
  };
  console.log("cuando", pokemons);
  // const poksFav = pokemons.filter((item) => item.isFav);

  return (
    <div className="main">
      <h1 className="main__title">Mi lista de Pokemon</h1>
      <Pokelist id="search" data={pokemons} handleClick={handleFav} />
      {/* <Pokelist id="favs" key="favs" data={poksFav} handleClick={handleFav} /> */}
    </div>
  );
}

export default App;
