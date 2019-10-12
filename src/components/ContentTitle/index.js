import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {} from "../../redux/actions";

import ContentTitle from "./component";

const mapStateToProps = ({ content: { title } }) => ({
  title,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentTitle);
