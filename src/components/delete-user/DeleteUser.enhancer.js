import { connect } from "react-redux";
import { deleteUser } from "../../redux/actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = state => ({
    isAuthenticated: state.deleteUser.isAuthenticated,
    username: state.deleteUser.username,
    error: state.deleteUser.error
})

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  deleteUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);