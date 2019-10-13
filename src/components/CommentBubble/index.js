import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {} from "../../redux/actions";

import CommentBubble from "./component";

const mapStateToProps = ({ component: { languageName } }) => ({
  languageName,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentBubble);
