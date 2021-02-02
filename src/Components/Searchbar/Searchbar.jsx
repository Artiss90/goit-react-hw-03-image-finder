import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

/* eslint react/prop-types: 1 */

export default class Searchbar extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  };

  state = {
    query: '',
  };

  notify = () =>
    toast.info('поле не должно быть пустым', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    // console.log(e.target.elements.search.value);
    query.trim() ? this.props.onSubmitForm(query) : this.notify();

    this.resetState();
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  resetState = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
