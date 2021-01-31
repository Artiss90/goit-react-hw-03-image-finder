import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img src="" alt="" className="ImageGalleryItem-image" />
      </li>
    );
  }
}
