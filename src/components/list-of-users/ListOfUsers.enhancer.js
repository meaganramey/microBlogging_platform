import { connect } from "react-redux";
import { listOfUsers } from "../../redux/actions/listOfUsers";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  displayUsers: state.listOfUsers
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  listOfUsers,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
