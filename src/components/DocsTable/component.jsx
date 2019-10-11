import React, { memo, Fragment } from "react";

import { List, Paper } from "@material-ui/core";

import DocRow from "../DocRow";
import DeleteRow from "../DeleteRow";

import useStyles from "./style";

const DocsTable = memo(({ data, isTrash }) => {
  const classes = useStyles();
  const dataFix = data || [];
  const dataLength = dataFix.length;
  return (
    <>
      <Paper className={classes.paper}>
        <List>
          {dataFix.map((ele, index) => (
            <Fragment key={index}>
              {(isTrash && (
                <DeleteRow
                  rowData={ele}
                  disableDivider={dataLength - 1 === index}
                />
              )) || (
                <DocRow
                  rowData={ele}
                  isTrash={isTrash || false}
                  disableDivider={dataLength - 1 === index}
                />
              )}
            </Fragment>
          ))}
        </List>
      </Paper>
    </>
  );
});

export default DocsTable;
