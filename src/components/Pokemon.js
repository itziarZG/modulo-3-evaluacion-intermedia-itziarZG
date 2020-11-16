import React from "react";
import "./Pokemon.scss";
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
  }
  render() {
    const liItems = this.props.data.types.map((type, i) => {
      return (
        <li className="pokemon__type__item" key={i}>
          {type}
        </li>
      );
    });

    return (
      <>
        <img
          className="pokemon__logo"
          src={this.props.data.url}
          alt={`Imagen del pokemon ${this.props.data.name}`}
        ></img>
        <h2 className="pokemon__title">{this.props.data.name}</h2>
        <ul className="pokemon__type">{liItems}</ul>
      </>
    );
  }
}

export default Pokemon;
