import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getTrashDocsBegin } from "../../redux/actions";

import Trash from "./component";

const mapStateToProps = ({ docs: { trash, shouldUpdateTrash } }) => ({
  trashDocs: trash,
  shouldUpdate: shouldUpdateTrash,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      getTrash: getTrashDocsBegin,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trash);
