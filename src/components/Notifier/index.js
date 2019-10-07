import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeSnackbar, closeSnackbar } from "../../redux/actions";

import Notifier from "./component";

const mapStateToProps = ({
  component: { snackbars, languageDict, language },
}) => ({
  notifications: snackbars,
  language,
  languageDict,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeSnackbar,
      closeSnackbar,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifier);
