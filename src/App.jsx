import React, { Component } from 'react';
import Button from './Components/Button';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Modal from 'Components/Modal';
import LoaderImage from 'Components/Loader';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import style from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const KEY_API = '19207943-ecb2269b7818ebd0e732e1fe9';
let page = 1;

class App extends Component {
  state = {
    articles: null,
    onOpenModal: false,
    loading: false,
    querySearch: '',
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { querySearch, articles } = this.state;
    const nextQuery = querySearch;
    const prevQuery = prevState.querySearch;
    const nextList = articles;
    const prevList = prevState.articles;

    if (nextQuery !== prevQuery) {
      console.log('следующий запрос');
      page = 1;
      console.log(page);
      this.toggleLoading();
      axios
        .get(
          `https://pixabay.com/api/?q=${querySearch}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => this.setState({ articles: response.data.hits }))
        .catch(error => this.setState({ error }))
        .finally(this.toggleLoading);
    }

    // if (nextQuery === prevQuery && nextList !== prevList) {
    //   console.log('запрос на следущую страницу');
    //   page = 1
    //   console.log(page);
    //   this.toggleLoading()
    //   axios
    //     .get(`https://pixabay.com/api/?q=${querySearch}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
    //     .then(response => this.setState({ articles: response.data.hits })).finally(this.toggleLoading);
    // return page
    // }
  }

  onSearch = query => this.setState({ querySearch: query });

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  toggleModal = () => {
    this.setState(({ onOpenModal }) => ({
      onOpenModal: !onOpenModal,
    }));
  };

  render() {
    const { onOpenModal, articles, loading } = this.state;
    return (
      <div className={style.app}>
        <Searchbar onSubmitForm={this.onSearch}></Searchbar>
        <ImageGallery list={articles}></ImageGallery>
        {loading && <LoaderImage onLoad={loading} />}
        {articles && (
          <Button onClick={this.toggleModal} aria-label="Open modal">
            Open modal
          </Button>
        )}
        {onOpenModal && <Modal />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
