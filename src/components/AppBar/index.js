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
  component: { languageName, themeMode, themeColor, pageName }
}) => ({
  languageName,
  themeMode,
  themeColor,
  pageName
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
