import React, { memo, useState, useEffect } from "react";

import "moment/min/locales";
import moment from "moment";

import {
  Typography,
  Paper,
  Grid,
  Button,
  Collapse,
  TextField,
  Divider,
  Chip,
  Switch,
  Tooltip,
  Grow,
} from "@material-ui/core";

import { Save } from "@material-ui/icons";

import Markdown from "../Markdown";

import { TextTermMaker, i18nHelper } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("ContentCell");

const ContentCell = memo(
  ({
    content,
    id,
    needFetch,
    time,
    languageName,
    commentsCount,
    openComment,
    toggleViewingDrawer,
    isOwned,
    changeFloor,
  }) => {
    const classes = useStyles();
    const [openEditor, setOpenEditor] = useState(false);
    const [newContent, setNewContent] = useState(content);
    const [renderContent, setRenderContent] = useState(content);
    const [realtime, toggleRealtime] = useState(false);

    moment.locale(languageName);

    useEffect(() => {
      setRenderContent(content);
      setNewContent(content);
    }, [content]);

    const handleOpenComment = () => {
      toggleViewingDrawer(id);
      if (needFetch) openComment(id);
    };

    const toggleEdit = () => {
      setOpenEditor(!openEditor);
    };

    const handleNewContent = () => {
      setRenderContent(newContent);
    };

    const handleChange = ({ target: { value } }) => {
      setNewContent(value);
      if (realtime) handleNewContent();
    };

    const handleRealtimeChange = () => {
      toggleRealtime(!realtime);
    };

    const handlePublishChange = () => {
      changeFloor(newContent, id);
    };

    return (
      <Grow in style={{ transformOrigin: "top center" }}>
        <Paper className={classes.cell}>
          <Grid container spacing={1}>
            <Grid
              container
              item
              xs={12}
              justify="flex-end"
              alignItems="center"
              spacing={2}
            >
              {content !== newContent && (
                <Tooltip title={<TextComp term={i18nHelper.soonSaveHint} />}>
                  <Grid item>
                    <Chip
                      label={<Save />}
                      color="secondary"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Tooltip>
              )}
              <Grid item>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={handleOpenComment}
                >
                  <TextComp term={i18nHelper.commentsCount} />
                  {commentsCount}
                </Button>
              </Grid>
              {isOwned && (
                <>
                  <Grid item>
                    <Button
                      color="primary"
                      size="small"
                      variant="outlined"
                      onClick={toggleEdit}
                    >
                      <TextComp
                        term={
                          openEditor
                            ? i18nHelper.collapseCellButton
                            : i18nHelper.editCellButton
                        }
                      />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button color="secondary" size="small" variant="outlined">
                      <TextComp term={i18nHelper.removeCellButton} />
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              <Markdown source={renderContent} />
            </Grid>
            {time && (
              <Grid item container xs={12}>
                <Typography variant="caption">
                  <TextComp term={i18nHelper.lastModify} />
                  {moment(time).fromNow()}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Collapse in={openEditor}>
                <Divider className={classes.divider} />
                <TextField
                  value={newContent}
                  fullWidth
                  variant="outlined"
                  multiline
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                  }}
                />
                <Grid container justify="flex-end" spacing={2}>
                  <Grid item>
                    <TextComp term={i18nHelper.realtimeSwitch} />
                    <Switch
                      checked={realtime}
                      onChange={handleRealtimeChange}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleNewContent}
                    >
                      <TextComp term={i18nHelper.previewButton} />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handlePublishChange}
                    >
                      <TextComp term={i18nHelper.publishButton} />
                    </Button>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    );
  },
);

export default ContentCell;
