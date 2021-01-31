import React from 'react';
import style from './Button.module.css';

const Button = ({ text }) => (
  <button type="button" className={style.Button}>
    {text}
  </button>
);

export default Button;
