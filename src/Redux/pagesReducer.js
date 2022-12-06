import {
  CONTACTS_PAGE_ACTIVE,
  MAIN_PAGE_ACTIVE,
  TREE_PAGE_ACTIVE,
  WORKS_PAGE_ACTIVE,
} from "./types";

const initialState = {
  main: true,
  works: false,
  contacts: false,
  tree: false,
};

export const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_PAGE_ACTIVE:
      return {
        main: true,
        works: false,
        contacts: false,
        tree: false,
      };

    case WORKS_PAGE_ACTIVE:
      return {
        main: false,
        works: true,
        contacts: false,
        tree: false,
      };

    case CONTACTS_PAGE_ACTIVE:
      return {
        main: false,
        works: false,
        contacts: true,
        tree: false,
      };

    case TREE_PAGE_ACTIVE:
      return {
        main: false,
        works: false,
        contacts: false,
        tree: true,
      }

    default:
      return state;
  }
};
