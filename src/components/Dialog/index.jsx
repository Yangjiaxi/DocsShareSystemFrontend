import React, { memo } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { i18nHelper, TextTermMaker } from "../../i18n";

const TextComp = TextTermMaker("Dialog");

const CustomDialog = memo(
  ({
    open,
    onCancel,
    onConfirm,
    content,
    title = i18nHelper.attentionText,
    confirm = i18nHelper.confirmButton,
    cancel = i18nHelper.cancelButton,
  }) => (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>
        <TextComp term={title} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary" autoFocus>
          <TextComp term={cancel} />
        </Button>
        <Button onClick={onConfirm} color="primary">
          <TextComp term={confirm} />
        </Button>
      </DialogActions>
    </Dialog>
  ),
);

export default CustomDialog;
