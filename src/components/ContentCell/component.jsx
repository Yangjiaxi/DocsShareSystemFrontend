import React, { memo } from "react";

import "moment/min/locales";
import moment from "moment";

import { Typography, Paper, Grid, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  }) => {
    const classes = useStyles();
    moment.locale(languageName);

    const handleOpenComment = () => {
      toggleViewingDrawer(id);
      if (needFetch) openComment(id);
    };

    return (
      <>
        <Paper className={classes.cell}>
          {/* render result */}
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
              <Grid item>
                <IconButton size="small">
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography>{content}</Typography>
            </Grid>
            <Grid item container xs={12}>
              <Typography variant="caption">
                <TextComp term={i18nHelper.lastModify} />
                {moment(time).fromNow()}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  },
);

export default ContentCell;
