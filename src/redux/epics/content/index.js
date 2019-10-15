import { getCommentEpic } from "./getComments";
import { checkoutDocEpic } from "./checkoutDoc";
import { changeTitleEpic } from "./changeTitle";
import { appendFloorEpic } from "./appendFloor";
import { changeFloorEpic } from "./changeFloor";

export default [
  getCommentEpic,
  checkoutDocEpic,
  changeTitleEpic,
  appendFloorEpic,
  changeFloorEpic,
];
