import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import style from './Loader.module.css';

class LoaderImage extends Component {
  render() {
    return (
      <Loader
        className={style.center}
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    );
  }
}

export default LoaderImage;
