import React from "react";
import "./Pokemon.scss";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
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
        <img
          className="pokemon__logo"
          src={this.props.data.url}
          alt="logo del Pokemon"
        ></img>
        <h2 className="pokemon__title">{this.props.data.name}</h2>
        <ul className="pokemon__text">{liItems}</ul>
      </>
    );
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    types: PropTypes.array,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Pokemon;
