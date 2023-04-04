import { Component } from 'react';
import 'index.css';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handelChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
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
