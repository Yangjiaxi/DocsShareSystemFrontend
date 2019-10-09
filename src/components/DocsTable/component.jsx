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
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("DocsTable");

const DocsTable = memo(({ data, languageName }) => {
  const classes = useStyles();

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  moment.locale(languageName);

  const handleClickMenu = id => ({ currentTarget }) => {
    setSelectedDoc(id);
    setAnchorEl(currentTarget);
  };

  const deletedMarker = isDeleted => {
    if (isDeleted) {
      return (
        <Chip
          className={classes.chips}
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
        className={classes.chips}
        component="span"
        color="primary"
        size="small"
        label={
          <TextComp term={isOwn ? i18nHelper.ownedDoc : i18nHelper.sharedDoc} />
        }
      />
    );
  };

  const handleClickDoc = id => () => {
    console.log(`Click at Doc ${id}`);
  };

  const handleClickButton = id => () => {
    console.log(`Click at Button ${id}`);
  };

  const rowMaker = (row, index) => {
    const { title, createTime, lastUse, deleted, owned, id } = row;
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

    const timeWords = (
      <>
        <Typography component="span" display="block">
          {createWord}
        </Typography>
        <Typography component="span" display="block">
          {lastUseWord}
        </Typography>
      </>
    );

    const titleWords = (
      <>
        <Typography display="inline" className={classes.title} component="span">
          {title}
        </Typography>
        {deletedMarker(deleted)}
        {ownMarker(owned)}
      </>
    );

    return (
      <Fragment key={index}>
        <ListItem button onClick={handleClickDoc(id)} disabled={deleted}>
          <ListItemText primary={titleWords} secondary={timeWords} />
          <ListItemSecondaryAction onClick={handleClickMenu(id)}>
            <IconButton onClick={handleClickButton(id)} disabled={deleted}>
              <MenuIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </Fragment>
    );
  };

  return (
    <>
      <Paper className={classes.paper}>
        <List>{data.map((ele, index) => rowMaker(ele, index))}</List>
      </Paper>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => console.log(selectedDoc)}>
          <TextComp term={i18nHelper.shareButton} />
        </MenuItem>
        <MenuItem onClick={() => console.log(selectedDoc)}>
          <TextComp term={i18nHelper.deleteButton} />
        </MenuItem>
      </Menu>
    </>
  );
});

export default DocsTable;
