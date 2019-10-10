import { getRecentEpic } from "./getRecent";
import { getMyEpic } from "./getMy";
import { getSharedEpic } from "./getShared";
import { getTrashEpic } from "./getTrash";
import { deleteDocEpic } from "./deleteDoc";
import { restoreDocEpic } from "./restoreDoc";
import { destroyDocEpic } from "./destroyDoc";
import { createDocEpic } from "./createDoc";

export default [
  getRecentEpic,
  getSharedEpic,
  getTrashEpic,
  deleteDocEpic,
  restoreDocEpic,
  destroyDocEpic,
  createDocEpic,
  getMyEpic,
];
