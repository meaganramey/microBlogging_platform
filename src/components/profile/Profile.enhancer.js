import { connect } from "react-redux";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state, ownProps) => ({
  loggedInUser: state.users.user,
});

export const enhancer = connect(mapStateToProps);
