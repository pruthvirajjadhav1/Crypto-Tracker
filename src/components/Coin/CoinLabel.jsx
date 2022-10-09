import React from "react";
import PropTypes from 'prop-types';

const CoinElement = ({ text }) => <p className="coin-label">{text}</p>

CoinElement.propTypes = {
  text: PropTypes.string
}

export default CoinElement;