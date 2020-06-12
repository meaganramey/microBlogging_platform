import { connect } from "react-redux";
import { newMessage } from "../../redux/actions/createMessage";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  newMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
