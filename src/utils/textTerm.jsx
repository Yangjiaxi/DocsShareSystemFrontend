import React from "react";

import TextTerm from "../components/TextTerm";
import { store } from "../App";

const TextTermMaker = namespace => (
  props => (<TextTerm namespace={namespace} {...props} />),
);

export default TextTermMaker;
