import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeBrowserPath,
  viewDocs,
  acceptDocStart,
  checkoutContentStart,
  exitDocViewing,
  toggleSlider,
} from "../../redux/actions";

import Doc from "./component";

const mapStateToProps = ({ content: { id } }) => ({
  isLoading: !id,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      viewDocs,
      acceptDoc: acceptDocStart,
      checkoutContent: checkoutContentStart,
      cleanUp: exitDocViewing,
      toggleSlider,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doc);
