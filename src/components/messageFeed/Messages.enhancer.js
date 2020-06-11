import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { listOfMessages } from "../../redux/actions/messageActions";

const mapStateToProps = (state) => state.listOfMessages

const mapDispatchToProps = {
  logout,
  listOfMessages
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);