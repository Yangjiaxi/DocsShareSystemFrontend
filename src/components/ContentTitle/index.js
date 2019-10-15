import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeTitleStart } from "../../redux/actions";

import ContentTitle from "./component";

const mapStateToProps = ({ content: { title, isOwned } }) => ({
  isOwned,
  title,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeTitle: changeTitleStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentTitle);
