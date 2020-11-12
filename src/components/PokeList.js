import React from "react";
import Pokemon from "./Pokemon";
import "./PokiList.scss";

const PokeList = (props) => {
  const dataList = props.data.map((item, i) => (
    <li key={i}>
      <Pokemon data={item} />
    </li>
  ));

  return <ul className="pokemon-list">{dataList}</ul>;
};

export default PokeList;
