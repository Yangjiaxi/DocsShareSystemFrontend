import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import { logout, toggleSlider } from "../../redux/actions";

import AppBar from "./component";

const mapStateToProps = ({
  component: { themeColor, pageName, isMobile, isViewingDocs, languageDict },
}) => ({
  themeColor,
  pageName,
  isMobile,
  isViewingDocs,
  titleDict: languageDict.AppBar,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
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
