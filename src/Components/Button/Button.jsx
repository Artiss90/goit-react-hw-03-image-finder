import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';
/* eslint react/prop-types: 1 */

const Button = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={style.Button}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
