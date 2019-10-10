import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeBrowserPath,
  viewDocs,
  acceptDocStart,
} from "../../redux/actions";

import Doc from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changeBrowserPath, viewDocs, acceptDoc: acceptDocStart },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doc);
