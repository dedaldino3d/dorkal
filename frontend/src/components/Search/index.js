import { connect } from "react-redux";
import * as userActions  from "../../actions/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user: { userList }} = state.user;

  return {
    userList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { searchTerm } } } = ownProps;
  return {
    searchByTerm: () => {
      dispatch(userActions.searchByTerm(searchTerm));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
