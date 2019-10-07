import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getUserInfoBegin } from "../../redux/actions";

import MyInfo from "./component";

const mapStateToProps = ({ user: { info } }) => ({
  info,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBrowserPath,
      getUserInfo: getUserInfoBegin,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyInfo);
