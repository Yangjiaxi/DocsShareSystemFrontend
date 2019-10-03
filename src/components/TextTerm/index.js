import { connect } from "react-redux";

import TextTerm from "./component";

const mapStateToProps = ({ component: { languageName, languageDict } }) => ({
  languageName,
  languageDict,
});

export default connect(mapStateToProps)(TextTerm);
