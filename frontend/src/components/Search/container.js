import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchPresenter from "./presenter";


class Container extends Component {
  state = {
    isLoading: true
  };

  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
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
  render() {
    const { userList } = this.props;
    return (
      <SearchPresenter {...this.state} userList={userList} />
    );
  }
}

export default Container;
