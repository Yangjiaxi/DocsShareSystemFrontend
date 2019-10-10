import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getMyDocsBegin } from "../../redux/actions";

import Recent from "./component";

const mapStateToProps = ({ docs: { my, shouldUpdateMy } }) => ({
  myDocs: my,
  shouldUpdate: shouldUpdateMy,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      getMy: getMyDocsBegin,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recent);
