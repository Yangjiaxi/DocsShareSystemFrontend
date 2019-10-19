import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeBrowserPath,
  viewDocs,
  acceptDocStart,
  checkoutContentStart,
  exitDocViewing,
  toggleSlider,
  socketEnd,
} from "../../redux/actions";

import Doc from "./component";

const mapStateToProps = ({ content: { id } }) => ({
  isLoading: !id,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      socketEnd,
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
