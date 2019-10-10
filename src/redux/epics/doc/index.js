import { getRecentEpic } from "./getRecent";
import { getSharedEpic } from "./getShared";
import { getTrashEpic } from "./getTrash";
import { deleteDocEpic } from "./deleteDoc";
import { restoreDocEpic } from "./restoreDoc";
import { destroyDocEpic } from "./destroyDoc";

export default [
  getRecentEpic,
  getSharedEpic,
  getTrashEpic,
  deleteDocEpic,
  restoreDocEpic,
  destroyDocEpic,
];
