import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/navbar/Navbar';
import Characters from './characters/Characters';
import Loader from './layout/loader/Loader';
import { getCharacters } from '../services/core/getCharacters';
import { AppState } from './index';
import Pagination from './layout/pagination/Pagination';
import { MAX_ITEM_PER_PAGE } from '../services/constants/const';

class App extends Component<{}, AppState> {
  private readonly maxItemsPerPage: number;

  constructor(props: {}) {
    super(props);
    this.loadPageCharacters = this.loadPageCharacters.bind(this);
    this.handelError = this.handelError.bind(this);
    this.maxItemsPerPage = MAX_ITEM_PER_PAGE;
    this.state = {
      error: null,
      totalCount: null,
      loading: true,
      currentPage: 0,
      characters: []
    };
  }

  handelError(error: string) {
    this.setState({ loading: false, error });
  }

  async fetchCurrentPageCharacters(start: number) {
    this.setState({ loading: true });
    try {
      const { results, total } = await getCharacters({
        start,
        perPage: this.maxItemsPerPage
      });
      this.setState({ characters: results, loading: false });
      if (!this.state.totalCount) {
        this.setState({ totalCount: total });
      }
    } catch (e) {
      this.handelError(e);
    }
  }

  componentDidMount() {
    this.fetchCurrentPageCharacters(this.state.currentPage);
  }

  loadPageCharacters(currentPage: number) {
    this.setState({ currentPage });
    this.fetchCurrentPageCharacters(currentPage);
  }

  render() {
    const { currentPage, totalCount, loading, error, characters } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Loader processing={loading}>
            {error ? (
              <div className="error">{error}</div>
            ) : (
              <Characters characters={characters} />
            )}
          </Loader>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItemsLength={totalCount}
          maxPerPage={this.maxItemsPerPage}
          onPageChange={this.loadPageCharacters}
        />
      </div>
    );
  }
}

export default App;
