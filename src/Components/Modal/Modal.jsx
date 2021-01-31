import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// * используем портал
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
