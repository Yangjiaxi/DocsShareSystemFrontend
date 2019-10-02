import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import {
  logout,
  changeLanguage,
  changeThemeMode,
  changeThemeColor,
  toggleSlider,
} from "../../redux/actions";

import AppBar from "./component";

const mapStateToProps = ({
  component: {
    languageName,
    themeMode,
    themeColor,
    pageName,
    isMobile,
    isViewingDocs,
  },
}) => ({
  languageName,
  themeMode,
  themeColor,
  pageName,
  isMobile,
  isViewingDocs,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      changeLanguage,
      changeThemeMode,
      changeThemeColor,
      toggleSlider,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppBar),
);
