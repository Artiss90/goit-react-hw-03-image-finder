import React, { Component } from 'react';
import Button from './Components/Button';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Modal from 'Components/Modal';
import style from './App.module.css';

class App extends Component {
  state = {
    onOpenModal: false,
  };
  render() {
    const { onOpenModal } = this.state;
    return (
      <div className={style.app}>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Button text="click" />
        {onOpenModal && <Modal />}
      </div>
    );
  }
}

export default App;
