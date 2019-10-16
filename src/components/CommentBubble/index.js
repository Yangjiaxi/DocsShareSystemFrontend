import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { voteCommentStart } from "../../redux/actions";

import CommentBubble from "./component";

const mapStateToProps = ({
  component: { languageName },
  content: { viewingFloor },
}) => ({
  languageName,
  viewingFloor,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      voteComment: voteCommentStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentBubble);
