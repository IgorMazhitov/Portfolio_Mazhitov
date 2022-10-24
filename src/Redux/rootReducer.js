import { combineReducers } from "redux";
import { elReducer } from "./elReducer";
import { hardSkillsReducer } from "./hardSkillsReducer";
import { softSkillsReducer } from "./softSkillsReducer";


export const rootReducer = combineReducers({
  style: hardSkillsReducer,
  elements: elReducer,
  soft: softSkillsReducer,
});
