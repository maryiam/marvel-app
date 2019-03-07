import React, { Component } from 'react';
import './Page-Input.css';
import { PageInputProps, PageInputState } from './index';

class PageInput extends Component<PageInputProps, PageInputState> {
  constructor(props: PageInputProps) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      displayablePage: this.displayablePageFromIndex(props.page)
    };
  }

  displayablePageFromIndex(pageIndex: number) {
    return (pageIndex + 1).toString();
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ displayablePage: e.target.value });
  }

  componentWillReceiveProps({ page: newPage }: PageInputProps) {
    const { page } = this.props;

    if (page !== newPage) {
      this.setState({
        displayablePage: this.displayablePageFromIndex(newPage)
      });
    }
  }

  handleKeyPress = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      const pageIndex = parseInt(this.state.displayablePage, 10) - 1;
      this.props.applyPageChange(pageIndex);
    }
  };

  render() {
    return (
      <input
        className="page-input"
        type="number"
        value={this.state.displayablePage}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default PageInput;
