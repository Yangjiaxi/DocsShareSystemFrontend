import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleViewingDrawer } from "../../redux/actions";

import FloorComments from "./component";

const mapStateToProps = ({
  content: { contents, viewingFloor },
  component: { isMobile },
  user: { username },
}) => ({
  contents,
  viewingFloor,
  open: Boolean(viewingFloor),
  isMobile,
  myName: username,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleViewingDrawer }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FloorComments);
