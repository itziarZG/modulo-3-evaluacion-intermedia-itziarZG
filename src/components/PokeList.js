import React from "react";
import Pokemon from "./Pokemon";
import "./PokeList.scss";

const PokeList = (props) => {
  const dataList = props.data.map((item) => (
    <li key={item.id} className="pokemon">
      <Pokemon data={item} />
    </li>
  ));

  return <ul className="pokemon-list">{dataList}</ul>;
};

export default PokeList;
