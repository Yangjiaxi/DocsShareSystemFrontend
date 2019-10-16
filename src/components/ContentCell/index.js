import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getCommentStart,
  toggleViewingDrawer,
  changeFloorStart,
  deleteFloorStart,
  moveFloorStart,
} from "../../redux/actions";

import ContentCell from "./component";

const mapStateToProps = ({
  component: { languageName },
  content: { isOwned, viewingFloor },
}) => ({
  languageName,
  isOwned,
  viewingFloor,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openComment: getCommentStart,
      toggleViewingDrawer,
      changeFloor: changeFloorStart,
      deleteFloor: deleteFloorStart,
      moveFloor: moveFloorStart,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentCell);
