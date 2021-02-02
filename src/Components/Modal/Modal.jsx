import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

/* eslint react/prop-types: 1 */

// * используем портал
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    image: PropTypes.objectOf(PropTypes.string),
    toggleModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseKeyEvent);
  }

  onCloseKeyEvent = e => {
    const { toggleModal } = this.props;
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  onCloseOverlay = e => {
    const { toggleModal } = this.props;
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  render() {
    const { src, name } = this.props.image;
    return createPortal(
      <div className="Overlay" onClick={this.onCloseOverlay}>
        <div className="Modal">
          <img src={src} alt={name} />
        </div>
      </div>,
      modalRoot,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseKeyEvent);
  }
}
