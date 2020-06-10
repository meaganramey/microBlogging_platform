import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const mapDispatchToProps = {
  logout,
};

export const enhancer = connect(null, mapDispatchToProps);