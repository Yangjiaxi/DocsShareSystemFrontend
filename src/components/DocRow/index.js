import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deleteDocBegin } from "../../redux/actions";

import DocsRow from "./component";

const mapStateToProps = ({ component: { languageName } }) => ({
  languageName,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteDoc: deleteDocBegin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocsRow);
