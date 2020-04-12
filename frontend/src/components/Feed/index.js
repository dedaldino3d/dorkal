import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { getFeed } from '../../actions/posts';
import Container from "./container";

const mapStateToProps = (state) => {
  const { feed, isLoading } = state.feed;

  return {
    feed,
    isLoading,
  };
};

const mapDispatchToProps = {
  getFeed
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
