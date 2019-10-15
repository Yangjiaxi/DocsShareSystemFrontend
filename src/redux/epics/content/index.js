import { getCommentEpic } from "./getComments";
import { checkoutDocEpic } from "./checkoutDoc";
import { changeTitleEpic } from "./changeTitle";

export default [getCommentEpic, checkoutDocEpic, changeTitleEpic];
