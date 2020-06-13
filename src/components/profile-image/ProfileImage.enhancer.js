import { connect } from "react-redux";
import { sendProfileImage } from "../../redux/actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state, ownProps) => ({
  loading: state.addProfileImage.loading,
  error: state.addProfileImage.error,
  photo: state.auth.photo,
  loggedInUser: state.auth.username,
  // photo: state.auth.whatever the photo key is from the auth.js reducer and profile image js actions
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  sendProfileImage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
