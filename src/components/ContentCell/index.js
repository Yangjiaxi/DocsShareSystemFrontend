import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getCommentStart,
  toggleViewingDrawer,
  changeFloorStart,
} from "../../redux/actions";

import ContentCell from "./component";

const mapStateToProps = ({
  component: { languageName },
  content: { isOwned },
}) => ({
  languageName,
  isOwned,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openComment: getCommentStart,
      toggleViewingDrawer,
      changeFloor: changeFloorStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentCell);
