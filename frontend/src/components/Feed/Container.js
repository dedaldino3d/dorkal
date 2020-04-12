import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends PureComponent {

  state ={
    isLoading: true,
  }

  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array.isRequired,
  };

  static getDerivedStateFromProps = (props, state) => {
    if(props.feed){
      return {
        isLoading: false
      }
    }
  }

  componentDidMount() {
    const { getFeed } = this.props;
    if(!this.props.feed){
      getFeed();
    }else{
      this.setState({
      isLoading: true,
    })}
  }

  render() {
    const { feed } = this.props;
    return <Feed feed={feed} {...this.state}/>
  }
}

export default Container;
