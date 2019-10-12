import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {} from "../../redux/actions";

import ContentFloors from "./component";

const mapStateToProps = ({ content: { contents } }) => ({
  contents,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentFloors);
