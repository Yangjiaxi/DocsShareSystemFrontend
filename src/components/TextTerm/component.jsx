import React, { memo, useEffect } from "react";

const TextTerm = memo(({ namespace, term, languageName, languageDict }) => {
  useEffect(() => {}, [languageName]);
  return <>{languageDict[namespace][term]}</>;
});

export default TextTerm;
