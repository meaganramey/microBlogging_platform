import { connect } from "react-redux";
import { getUserInfoAction } from "../../redux/actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  user: state.getUserInfo.user,
  loading: state.getUserInfo.loading,
  error: state.getUserInfo.error,
})


// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  getUserInfoAction,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
