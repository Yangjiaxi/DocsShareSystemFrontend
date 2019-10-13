import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleViewingDrawer } from "../../redux/actions";

import FloorComments from "./component";

const mapStateToProps = ({
  content: { contents, viewingFloor },
  component: { isMobile, commentDrawerOpen },
}) => ({
  contents,
  viewingFloor,
  commentDrawerOpen,
  isMobile,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleViewingDrawer }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FloorComments);
