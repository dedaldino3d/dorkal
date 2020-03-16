import { connect } from "react-redux";
import * as postActions from '../../actions/posts';
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { feed } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(postActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
