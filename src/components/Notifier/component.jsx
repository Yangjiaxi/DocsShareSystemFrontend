import React, { memo, useEffect, useState } from "react";

import { withSnackbar } from "notistack";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

const Notifier = memo(
  ({ notifications = [], enqueueSnackbar, removeSnackbar, closeSnackbar }) => {
    const [displayed, setDisplayed] = useState([]);

    const storeDisplayed = id => {
      setDisplayed(prevDisplayed => [...prevDisplayed, id]);
    };

    useEffect(() => {
      notifications.forEach(({ key, message, options }) => {
        if (displayed.includes(key)) return;
        enqueueSnackbar(message, {
          ...options,
          action: closeKey => (
            <IconButton
              onClick={() => {
                closeSnackbar(closeKey);
              }}
            >
              <CloseRounded fontSize="small" style={{ color: "white" }} />
            </IconButton>
          ),
          onClose: (event, reason, closeKey) => {
            if (options.onClose) {
              options.onClose(event, reason, closeKey);
            }
            removeSnackbar(closeKey);
          },
        });
        storeDisplayed(key);
        removeSnackbar(key);
      });
    }, [
      notifications,
      displayed,
      enqueueSnackbar,
      removeSnackbar,
      closeSnackbar,
    ]);

    return null;
  },
  ({ notifications: prevSnacks }, { notifications: nextSnacks }) => {
    for (const snack of nextSnacks) {
      if (!prevSnacks.find(({ key }) => snack.key === key)) return false;
    }
    return true;
  },
);

export default withSnackbar(Notifier);
