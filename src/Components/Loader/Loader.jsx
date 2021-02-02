import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Loader.module.css';

const LoaderImage = () => {
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
};

export default LoaderImage;
