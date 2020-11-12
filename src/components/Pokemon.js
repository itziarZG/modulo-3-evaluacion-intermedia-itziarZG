import React from "react";
import "./Pokemon.scss";
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const liItems = this.props.data.types.map((type, i) => {
      return (
        <li className="pokemon__text__item" key={i}>
          {type}
        </li>
      );
    });
    return (
      <>
        <img className="pokemon__logo" src={this.props.data.url}></img>
        <h2 className="pokemon__title">{this.props.data.name}</h2>
        <ul className="pokemon__text">{liItems}</ul>
      </>
    );
  }
}

export default Pokemon;
