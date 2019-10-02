import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, viewDocs } from "../../redux/actions";

import Doc from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeBrowserPath, viewDocs }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doc);
