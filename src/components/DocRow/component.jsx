import React, { memo, useState } from "react";

import "moment/min/locales";
import moment from "moment";

import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

import Dialog from "../Dialog";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("DocsTable");

const DocRow = memo(({ rowData, languageName, deleteDoc }) => {
  const {
    title,
    createTime, // no
    lastUse, // no
    deleted, // no
    owned,
    id,
    // deleteTime,
  } = rowData;
  const classes = useStyles();

  const [anchorDoc, setAnchorDoc] = useState(null);
  const [dialog, setDialog] = useState(false);

  moment.locale(languageName);

  const handleClickShare = () => {
    console.log(`Share ${id}`);
    setAnchorDoc(null);
  };

  const handleClickDelete = () => {
    console.log(`Delete ${id}`);
    setAnchorDoc(null);
    setDialog(true);
  };

  const handleDelete = () => {
    console.log("FINAL DELETE", id);
    setDialog(false);
    deleteDoc(id);
  };

  const deletedMarker = () => {
    if (deleted) {
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

  const ownMarker = () => {
    return (
      <Chip
        className={classes.chips}
        component="span"
        color="primary"
        size="small"
        label={
          <TextComp term={owned ? i18nHelper.ownedDoc : i18nHelper.sharedDoc} />
        }
      />
    );
  };

  const handleClickDoc = () => {
    console.log(`Click at Doc ${id}`);
  };

  const handleClickButton = ({ currentTarget }) => {
    console.log(`Click at Button ${id}`);
    setAnchorDoc(currentTarget);
  };

  const timeWords = () => {
    return (
      <>
        <Typography component="span" display="block">
          <TextComp term={i18nHelper.createTime} />
          {moment(createTime).format("YYYY-MM-DD")}
        </Typography>
        <Typography component="span" display="block">
          <TextComp term={i18nHelper.lastUse} />
          {moment(lastUse).fromNow()}
        </Typography>
      </>
    );
  };

  const titleWords = () => (
    <>
      <Typography display="inline" component="span">
        {title}
      </Typography>
      {deletedMarker()}
      {ownMarker()}
    </>
  );

  return (
    <>
      <ListItem button onClick={handleClickDoc} disabled={deleted}>
        <ListItemText primary={titleWords()} secondary={timeWords()} />
        <ListItemSecondaryAction>
          <IconButton onClick={handleClickButton}>
            <MenuIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <Menu
        anchorEl={anchorDoc}
        open={Boolean(anchorDoc)}
        onClose={() => setAnchorDoc(null)}
      >
        <MenuItem onClick={handleClickShare}>
          <TextComp term={i18nHelper.shareButton} />
        </MenuItem>
        <MenuItem onClick={handleClickDelete}>
          <TextComp term={i18nHelper.deleteButton} />
        </MenuItem>
      </Menu>
      <Dialog
        open={dialog}
        onConfirm={handleDelete}
        onCancel={() => setDialog(false)}
        content={<TextComp term={i18nHelper.deleteHint} />}
      />
    </>
  );
});

export default DocRow;
