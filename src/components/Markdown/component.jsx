import React, { memo } from "react";

import MarkdownRender from "react-markdown";
import TeX from "@matejmazur/react-katex";
import RemarkMathPlugin from "remark-math";

import "katex/dist/katex.min.css";

import { Link } from "@material-ui/core";
import CodeBlock from "../CodeBlock";

import useStyle from "./style";

const Markdown = memo(({ source }) => {
  const classes = useStyle();
  return (
    <MarkdownRender
      source={source}
      className={classes.result}
      escapeHtml={false}
      plugins={[RemarkMathPlugin]}
      renderers={{
        math: ele => {
          return (
            <TeX
              math={ele.value}
              block
              errorColor="#cc0000"
              className={classes.block}
            />
          );
        },
        inlineMath: ele => {
          return <TeX math={ele.value} errorColor="#cc0000" />;
        },
        code: CodeBlock,
        image: ({ alt, src }) => (
          <img alt={alt} src={src} className={classes.image} />
        ),
        link: ({ href, children }) => (
          <Link
            color="primary"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <>{children}</>
          </Link>
        ),
      }}
    />
  );
});

export default Markdown;
