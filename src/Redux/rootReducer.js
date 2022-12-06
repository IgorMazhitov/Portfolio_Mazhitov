import { combineReducers } from "redux";
import { elReducer } from "./elReducer";
import { hardSkillsReducer } from "./hardSkillsReducer";
import { pagesReducer } from "./pagesReducer";
import { softSkillsReducer } from "./softSkillsReducer";
import { treeReducer } from "./treeReducer";


export const rootReducer = combineReducers({
  style: hardSkillsReducer,
  elements: elReducer,
  soft: softSkillsReducer,
  pages: pagesReducer,
  tree: treeReducer,
});
