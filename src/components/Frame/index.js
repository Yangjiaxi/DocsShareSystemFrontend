import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Frame from "./component";

const mapStateToProps = ({ user: { token }, component: { progressOn } }) => ({
  loggedIn: Boolean(token),
  isLoading: progressOn
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame);
