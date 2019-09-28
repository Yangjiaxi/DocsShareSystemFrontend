import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HomePage from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
