import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loginStart } from "../../redux/actions";

import Login from "./component";

const mapStateToProps = ({ user: { token }, component: { progressOn } }) => ({
  loggedIn: Boolean(token),
  isLoading: progressOn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: loginStart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
