import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getRecentDocsBegin } from "../../redux/actions";

import Recent from "./component";

const mapStateToProps = ({ docs: { recent } }) => ({
  recentDocs: recent,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      getRecent: getRecentDocsBegin,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recent);
