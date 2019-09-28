import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Frame from "./component";

const mapStateToProps = ({ user: { token } }) => ({
  loggedIn: Boolean(token)
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame);
