import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeBrowserPath,
  viewDocs,
  acceptDocStart,
  checkoutContentStart,
  exitDocViewing,
} from "../../redux/actions";

import Doc from "./component";

const mapStateToProps = ({ content: { title } }) => ({
  isLoading: !title,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      viewDocs,
      acceptDoc: acceptDocStart,
      checkoutContent: checkoutContentStart,
      cleanUp: exitDocViewing,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doc);
