import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint react/prop-types: 1 */

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const { image, name } = this.props;
    return <img src={image} alt={name} className="ImageGalleryItem-image" />;
  }
}
