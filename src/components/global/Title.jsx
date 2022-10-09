import React from "react";
import PropTypes from 'prop-types';

const Title = ({ text, className }) => <h1 className={className}>{text}</h1>

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}

export default Title;