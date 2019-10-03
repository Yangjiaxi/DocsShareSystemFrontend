import React from "react";
import TextTerm from "../components/TextTerm";

export const TextTermMaker = namespace => props => (
  <TextTerm namespace={namespace} {...props} />
);

export default TextTermMaker;
