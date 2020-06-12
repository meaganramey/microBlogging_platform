import { connect } from "react-redux";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  user: state.users.user,
  // photo: state.auth.whatever the photo key is from the auth.js reducer and profile image js actions
});

export const enhancer = connect(mapStateToProps);
