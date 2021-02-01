import React, { Component } from 'react';
import Button from './Components/Button';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Modal from 'Components/Modal';
import LoaderImage from 'Components/Loader';
import fetchImages from './services';
// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import style from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    page: 1,
    articles: [],
    onOpenModal: false,
    loading: false,
    querySearch: '',
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    // const { querySearch } = this.state;
    const nextQuery = this.state.querySearch;
    const prevQuery = prevState.querySearch;

    if (nextQuery !== prevQuery) {
      this.getFetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  getFetchImages = () => {
    const { querySearch, page, articles } = this.state;
    // *включаем лоадер
    this.toggleLoading();
    fetchImages(querySearch, page)
      .then(hits =>
        this.setState({ articles: [...articles, ...hits], page: page + 1 }),
      )
      .catch(error => this.setState({ error }))
      .finally(
        // *выключаем лоадер
        this.toggleLoading,
      );
  };

  onSearch = query =>
    this.setState({ querySearch: query, articles: [], page: 1 });

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

  getLoadMore = () => {
    // this.setState(prevState => ({ page: prevState.page + 1 }))

    this.getFetchImages();

    // elem.scrollIntoView(top)
  };

  render() {
    const { onOpenModal, articles, loading } = this.state;
    return (
      <div className={style.app}>
        <Searchbar onSubmitForm={this.onSearch}></Searchbar>
        <ImageGallery list={articles}></ImageGallery>
        {loading && <LoaderImage onLoad={loading} />}
        {articles.length > 0 && (
          <Button onClick={this.getLoadMore} aria-label="Load more">
            Load more
          </Button>
        )}
        {onOpenModal && <Modal />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
