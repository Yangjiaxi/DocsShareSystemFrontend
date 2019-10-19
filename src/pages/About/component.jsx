import React, { memo, useEffect, Fragment } from "react";

import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

import { i18nHelper, TextTermMaker } from "../../i18n";

const TextComp = TextTermMaker("About");

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      padding: spacing(5),
    },
    value: {
      paddingLeft: spacing(2),
    },
    key: {
      marginTop: spacing(2),
    },
  }),
);

const list = [
  {
    key: <TextComp term={i18nHelper.aboutMe} />,
    value: ["HUST SE 1703"],
  },
  {
    key: <TextComp term={i18nHelper.aboutTech} />,
    value: [
      "React.js",
      "Material-UI",
      "Redux",
      "RxJS",
      "Remark",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    key: <TextComp term={i18nHelper.aboutContact} />,
    value: ["QQ: 1468764755", "E-Mail: 1468764755@qq.com"],
  },
];

const About = memo(({ changeBrowserPath }) => {
  const classes = useStyles();
  useEffect(() => {
    changeBrowserPath(i18nHelper.ABOUT_PAGE);
  }, [changeBrowserPath]);
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" align="center">
        <TextComp term={i18nHelper.aboutTitle} />
      </Typography>
      {list.map(({ key, value }, index) => (
        <Fragment key={index}>
          <Typography variant="h5" className={classes.key}>
            {key}
          </Typography>
          {value.map((ele, idx) => (
            <Typography key={idx} className={classes.value}>
              {ele}
            </Typography>
          ))}
        </Fragment>
      ))}
    </Paper>
  );
});

export default About;
