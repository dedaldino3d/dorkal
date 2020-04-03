import { connect } from "react-redux";
import * as postActions from '../../actions/posts';
import Container from "./container";

const mapStateToProps = (state) => {
  const { feed } = state.feed;

  return {
    feed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeed: () => {
      dispatch(postActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
