import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { openCommentStart } from "../../redux/actions";

import ContentCell from "./component";

const mapStateToProps = ({ component: { languageName } }) => ({
  languageName,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openComment: openCommentStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentCell);
