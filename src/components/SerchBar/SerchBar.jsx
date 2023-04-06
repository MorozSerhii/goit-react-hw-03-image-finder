import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'index.css';
import 'react-toastify/dist/ReactToastify.css';
export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handelChange = e => {
    this.setState({ searchQuery: e.target.value.trim() });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.info('Please enter something', {
        position: toast.POSITION.TOP_RIGHT,
        icon: false,
      });
      return;
    }
    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery);
    this.onReset();
  };
  onReset = () => {
    this.props.onReset();
    this.setState({ searchQuery: '' });
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            <FiSearch />
          </button>

          <input
            onChange={this.handelChange}
            value={searchQuery}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};
