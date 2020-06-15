import { connect } from "react-redux";
import { updateUserInfoAction } from "../../redux/actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  user: state.getUserInfo.user,
  loading: state.updateUserInfo.loading,
  error: state.updateUserInfo.error,
  redirect: state.updateUserInfo.redirect,
})


// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  updateUserInfoAction,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
