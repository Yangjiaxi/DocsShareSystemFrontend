import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addFloor } from "../../redux/actions";

import ContentFloors from "./component";

const mapStateToProps = ({ content: { contents, isOwned } }) => ({
  contents,
  isOwned,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFloor }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentFloors);
