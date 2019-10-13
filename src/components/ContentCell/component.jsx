import React, { memo, useState } from "react";

import "moment/min/locales";
import moment from "moment";

import Markdown from "react-markdown";

import {
  Typography,
  Paper,
  Grid,
  Button,
  Collapse,
  TextField,
  Divider,
} from "@material-ui/core";

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
  }) => {
    const classes = useStyles();
    const [openEditor, setOpenEditor] = useState(false);
    const [newContent, setNewContent] = useState(content);

    moment.locale(languageName);

    const handleOpenComment = () => {
      toggleViewingDrawer(id);
      if (needFetch) openComment(id);
    };

    const toggleEdit = () => {
      setOpenEditor(!openEditor);
    };

    const handleChange = ({ target: { value } }) => {
      setNewContent(value);
    };

    return (
      <>
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
              <Markdown source={newContent} className={classes.markdown} />
            </Grid>
            <Grid item container xs={12}>
              <Typography variant="caption">
                <TextComp term={i18nHelper.lastModify} />
                {moment(time).fromNow()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Collapse in={openEditor}>
                <Divider className={classes.divider} />
                <TextField
                  value={newContent}
                  fullWidth
                  variant="outlined"
                  multiline
                  onChange={handleChange}
                />
                <Grid container justify="flex-end" spacing={2}>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      <TextComp term={i18nHelper.previewButton} />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      <TextComp term={i18nHelper.publishButton} />
                    </Button>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  },
);

export default ContentCell;
