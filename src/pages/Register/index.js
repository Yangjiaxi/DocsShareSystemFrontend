import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { registerStart, enqueueSnackbar } from "../../redux/actions";

import Login from "./component";

const mapStateToProps = ({
  user: { token },
  component: { progressOn, languageName },
}) => ({
  loggedIn: Boolean(token),
  isLoading: progressOn,
  languageName,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      enqueueSnackbar,
      register: registerStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
