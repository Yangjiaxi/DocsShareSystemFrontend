import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getSharedDocsBegin } from "../../redux/actions";

import Shared from "./component";

const mapStateToProps = ({ docs: { shared, shouldUpdateShared } }) => ({
  sharedDocs: shared,
  shouldUpdate: shouldUpdateShared,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      getShared: getSharedDocsBegin,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shared);
