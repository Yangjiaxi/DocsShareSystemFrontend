import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { enqueueSnackbar, changePasswordStart } from "../../redux/actions";

import ChangePassword from "./component";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      enqueueSnackbar,
      changePassword: changePasswordStart,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(ChangePassword);
