import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <ul className="ImageGallery">
        {/* <!-- Набор <li> с изображениями --> */}
        <ImageGalleryItem />
      </ul>
    );
  }
}
