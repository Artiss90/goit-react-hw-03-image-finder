import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

/* eslint react/prop-types: 1 */

export default class ImageGallery extends Component {
  static propTypes = {
    list: PropTypes.array,
  };
  // state = {
  //   list: []
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { list } = this.props
  //   const nextList = this.props.list;
  //   const prevList = prevProps.list;

  //   if (nextList !== prevList) {
  //     console.log(list);
  //     console.log(prevList);
  //     console.log(prevState);
  //   }
  // }

  render() {
    const { list } = this.props;
    return (
      <ul className="ImageGallery">
        {/* <!-- Набор <li> с изображениями --> */}
        {list &&
          list.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li key={id} className="ImageGalleryItem">
              <ImageGalleryItem image={webformatURL} name={tags} />
            </li>
          ))}
      </ul>
    );
  }
}
