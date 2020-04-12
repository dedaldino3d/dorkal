import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchPresenter from "./presenter";


class Container extends Component {
  state = {
    isLoading: true,
    term: ""
  };

  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
    goToSearch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    const { searchByTerm } = this.props;
    if (prevProps.match.params !== this.props.match.params) {
      searchByTerm();
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.userList) {
      this.setState({
        isLoading: false
      });
    }
  };

  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };

  _handleSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };

  render() {
    const { userList } = this.props;
    const { term } = this.state;
    return (
      <SearchPresenter 
      {...this.state} 
      userList={userList} 
      handleSubmit={this._handleSubmit}
      onInputChange={this._onInputChange}
      value={term}
      />
    );
  }
}

export default Container;
