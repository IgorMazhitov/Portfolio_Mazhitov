import {
  JS_ADV_LEFT,
  JS_ADV_RIGHT,
  JS_BASICS_LEFT,
  JS_BASICS_RIGHT,
} from "./types";

const initialState = {
  jsBasics: [
    "ES6 Syntaxis",
    "Data types",
    "Data Structures",
    "Equality Comparison",
    "Loops and Iterations",
    "Functions",
    '"THIS" Word',
  ],
  el: 0,
  jsBasicsLevel: [
    "Middle",
    "Middle",
    "Middle",
    "Middle",
    "Middle",
    "Middle",
    "Middle",
  ],
  jsAdvanced: [
    "Asynchronous JS",
    "Working with APIs",
    "Classes",
    "Javascript Iterators and Generators",
    "Modules",
    "Memory Management",
  ],
  elAdv: 0,
  jsAdvancedLevel: [
    "Junior+",
    "Junior+",
    "Junior+",
    "Junior+",
    "Junior+",
    "Junior+",
  ],
};

export const elReducer = (state = initialState, action) => {
  switch (action.type) {
    case JS_BASICS_RIGHT:
      if (state.el + 1 >= state.jsBasics.length) {
        return {
          ...state,
          el: (state.el = 0),
        };
      } else {
        return {
          ...state,
          el: (state.el += 1),
        };
      }

    case JS_BASICS_LEFT:
      if (state.el - 1 < 0) {
        return {
          ...state,
          el: (state.el = state.jsBasics.length - 1),
        };
      } else {
        return {
          ...state,
          el: state.el - 1,
        };
      }

    case JS_ADV_RIGHT:
      if (state.elAdv + 1 >= state.jsAdvanced.length) {
        return {
          ...state,
          elAdv: (state.elAdv = 0),
        };
      } else {
        return {
          ...state,
          elAdv: (state.elAdv += 1),
        };
      }

    case JS_ADV_LEFT:
      if (state.elAdv - 1 < 0) {
        return {
          ...state,
          elAdv: (state.elAdv = state.jsAdvanced.length - 1),
        };
      } else {
        return {
          ...state,
          elAdv: state.elAdv - 1,
        };
      }

    default:
      return state;
  }
};
