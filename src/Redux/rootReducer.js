import { combineReducers } from "redux";
import { elReducer } from "./elReducer";
import { styleReducer } from "./styleReducer";

export const rootReducer = combineReducers({
  style: styleReducer,
  elements: elReducer,
});
