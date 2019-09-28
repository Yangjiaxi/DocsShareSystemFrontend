import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import {
  logout,
  changeLanguage,
  changeThemeMode,
  changeThemeColor
} from "../../redux/actions";

import AppBar from "./component";

const mapStateToProps = ({
  component: { languageName, themeMode, themeColor }
}) => ({
  languageName,
  themeMode,
  themeColor
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      changeLanguage,
      changeThemeMode,
      changeThemeColor
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppBar)
);
