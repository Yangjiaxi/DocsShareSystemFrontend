import React, { memo, Fragment } from "react";

import { List, Paper } from "@material-ui/core";

import DocRow from "../DocRow";
import DeleteRow from "../DeleteRow";

import useStyles from "./style";

const DocsTable = memo(({ data, isTrash }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <List>
          {data.map((ele, index) => (
            <Fragment key={index}>
              {(isTrash && <DeleteRow rowData={ele} />) || (
                <DocRow rowData={ele} isTrash={isTrash || false} />
              )}
            </Fragment>
          ))}
        </List>
      </Paper>
    </>
  );
});

export default DocsTable;
