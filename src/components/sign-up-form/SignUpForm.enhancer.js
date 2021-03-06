import { connect } from "react-redux";
import { signUp } from "../../redux/actions/users";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
  redirect: state.users.redirect,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  signUp,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
