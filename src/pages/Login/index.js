import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loginStart } from "../../redux/actions";

import Login from "./component";

const mapStateToProps = ({
  user: { token },
  component: { progressOn, languageName, languageDict, themeColor },
}) => ({
  loggedIn: Boolean(token),
  isLoading: progressOn,
  languageName,
  themeColor,
  titleDict: languageDict.AppBar,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: loginStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
