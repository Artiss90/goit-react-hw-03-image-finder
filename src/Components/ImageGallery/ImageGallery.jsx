import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

/* eslint react/prop-types: 1 */

export default class ImageGallery extends Component {
  static propTypes = {
    list: PropTypes.array,
    onClick: PropTypes.func,
  };

  handleShowLargeImage = (imageUrl, name) => {
    this.props.onClick({ src: imageUrl, name: name });
  };

  render() {
    const { list } = this.props;
    return (
      <ul className="ImageGallery">
        {list &&
          list.map(({ id, webformatURL, largeImageURL, tags }, index) => (
            // ! в атрибут key поставил индекс вместо id, поскольку id на бекенде дублируются, массив статический - проблем не будет
            <li
              key={index}
              className="ImageGalleryItem"
              onClick={() => this.handleShowLargeImage(largeImageURL, tags)}
            >
              <ImageGalleryItem image={webformatURL} name={tags} />
            </li>
          ))}
      </ul>
    );
  }
}
