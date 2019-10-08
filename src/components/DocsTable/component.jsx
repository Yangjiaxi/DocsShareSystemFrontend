import React, { memo, Fragment, useState } from "react";

import "moment/min/locales";
import moment from "moment";

import {
  List,
  Paper,
  ListItem,
  Divider,
  ListItemText,
  Chip,
  Collapse,
  Button,
  Grid,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("DocsTable");

const DocsTable = memo(({ data, languageName, isMobile }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);

  moment.locale(languageName);

  const deletedMarker = isDeleted => {
    if (isDeleted) {
      return (
        <Chip
          size="small"
          color="secondary"
          component="span"
          label={<TextComp term={i18nHelper.deletedDoc} />}
        />
      );
    }
  };

  const ownMarker = isOwn => {
    return (
      <Chip
        component="span"
        color="primary"
        size="small"
        label={
          <TextComp term={isOwn ? i18nHelper.ownedDoc : i18nHelper.sharedDoc} />
        }
      />
    );
  };

  const handleClick = idx => () => {
    if (open !== idx) setOpen(idx);
    else setOpen(null);
  };

  const rowMaker = (row, index) => {
    const { title, createTime, lastUse, deleted, owned } = row;
    const lastUseWord = (
      <>
        <TextComp term={i18nHelper.lastUse} />
        {moment(lastUse).fromNow()}
      </>
    );

    const createWord = (
      <>
        <TextComp term={i18nHelper.createTime} />
        {moment(createTime).format("YYYY-mm-DD")}
      </>
    );

    const markers = (
      <>
        {deletedMarker(deleted)}
        {ownMarker(owned)}
      </>
    );

    const timeWords = (
      <>
        <Typography>{createWord}</Typography>
        <Typography>{lastUseWord}</Typography>
      </>
    );

    const titleWords = (
      <>
        <Typography display="inline" className={classes.title}>
          {title}
        </Typography>
        {deletedMarker(deleted)}
        {ownMarker(owned)}
      </>
    );

    return (
      <Fragment key={index}>
        <ListItem button onClick={handleClick(index)} disabled={deleted}>
          <ListItemText primary={titleWords} secondary={timeWords} />
          {/* <ListItemText primary={createWord} secondary={markers} /> */}
          <ListItemSecondaryAction>
            <IconButton onClick={handleClick(index)}>
              <MenuIcon />
            </IconButton>
          </ListItemSecondaryAction>
          {/* <ListItemText>
            <Grid
              className={classes.buttons}
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Button variant="contained" color="secondary">
                DELETE
              </Button>
              <Button variant="contained" color="primary">
                SHARE
              </Button>
            </Grid>
          </ListItemText> */}
        </ListItem>
        <Collapse in={index === open} unmountOnExit>
          {/* <Grid
            className={classes.buttons}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Button variant="contained" color="secondary">
              DELETE
            </Button>
            <Button variant="contained" color="primary">
              SHARE
            </Button>
            <Button variant="contained" color="primary">
              OPEN
            </Button>
          </Grid> */}
        </Collapse>
        <Divider variant="middle" />
      </Fragment>
    );
  };

  return (
    <Paper className={classes.paper}>
      <List>{data.map((ele, index) => rowMaker(ele, index))}</List>
    </Paper>
  );
});

export default DocsTable;
