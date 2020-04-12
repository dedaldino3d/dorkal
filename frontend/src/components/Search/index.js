import { connect } from "react-redux";
import { push } from 'react-router-redux';

import * as userActions  from "../../actions/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user: { userList }} = state;

  return {
    userList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { searchTerm } } } = ownProps;
  return {
    searchByTerm: () => {
      dispatch(userActions.searchByTerm(searchTerm));
    },
    goToSearch: searchTerm => {
        dispatch(push(`/search/${searchTerm}`));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
