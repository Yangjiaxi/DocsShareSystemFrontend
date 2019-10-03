import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import { changeLanguage } from "../../redux/actions";

import LanguageMenu from "./component";

const mapStateToProps = ({ component: { languageName } }) => ({
  languageName,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeLanguage,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LanguageMenu),
);
