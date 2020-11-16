import React from "react";
import Pokemon from "./Pokemon";
import "./PokeList.scss";

const PokeList = (props) => {
  const dataList = props.data.map((item, i) => {
    const myclass = item.isFav ? "pokemon fav" : "pokemon";
    console.log("myclass", myclass);
    return (
      <li key={i} id={item.id} className={myclass} onClick={props.handleClick}>
        <Pokemon data={item} />
      </li>
    );
  });

  return <ul className={`pokemon-list ${props.id}`}>{dataList}</ul>;
};

export default PokeList;
