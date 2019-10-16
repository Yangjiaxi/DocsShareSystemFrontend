import { getCommentEpic } from "./getComments";
import { checkoutDocEpic } from "./checkoutDoc";
import { changeTitleEpic } from "./changeTitle";
import { appendFloorEpic } from "./appendFloor";
import { changeFloorEpic } from "./changeFloor";
import { deleteFloorEpic } from "./deleteFloor";
import { moveFloorEpic } from "./moveFloor";
import { addCommentEpic } from "./addComment";
import { voteCommentEpic } from "./voteComment";

export default [
  getCommentEpic,
  checkoutDocEpic,
  changeTitleEpic,
  appendFloorEpic,
  changeFloorEpic,
  deleteFloorEpic,
  moveFloorEpic,
  addCommentEpic,
  voteCommentEpic,
];
