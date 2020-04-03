import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends PureComponent {

  state = {
    isLoading: true
  }
  
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.feed !== nextProps.feed){
      return true
    }
    return false
  }

  componentDidMount() {
    const { getFeed } = this.props;
    if (!this.props.feed) {
      getFeed();
    } else{
      this.setState({
        isLoading: false
      })
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        isLoading: false
      });
    }
  };

  render() {
    const { feed, error } = this.props;
    return <Feed feed={feed} {...this.state} error={error} />;
  }
}

export default Container;
