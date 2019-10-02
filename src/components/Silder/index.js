import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";

import { toggleSlider } from "../../redux/actions";

import Slider from "./component";

const mapStateToProps = ({
  component: { drawerOpen, languageName, pageName, isMobile, isViewingDocs },
}) => ({
  open: drawerOpen,
  languageName,
  pageName,
  isMobile,
  isViewingDocs,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSlider,
      pushUrl: push,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider);
