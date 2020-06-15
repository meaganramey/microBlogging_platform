import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  loggedInUser: state.auth.username,
});

const mapDispatchToProps = {
  logout,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
