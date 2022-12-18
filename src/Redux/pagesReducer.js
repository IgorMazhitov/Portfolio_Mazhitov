import {
  CONTACTS_PAGE_ACTIVE,
  LOADING_PAGE_DIS,
  LOADING_PAGE_HIDE,
  MAIN_PAGE_ACTIVE,
  TREE_PAGE_ACTIVE,
  WORKS_PAGE_ACTIVE,
} from "./types";

const initialState = {
  loading: true,
  loadingStyle: "w-screen h-screen transition-all duration-700 opacity-100 overflow-hidden",
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
        loading: false, 
      };

    case WORKS_PAGE_ACTIVE:
      return {
        main: false,
        works: true,
        contacts: false,
        tree: false,
        loading: false, 
      };

    case CONTACTS_PAGE_ACTIVE:
      return {
        main: false,
        works: false,
        contacts: true,
        tree: false,
        loading: false, 
      };

    case TREE_PAGE_ACTIVE:
      return {
        main: false,
        works: false,
        contacts: false,
        tree: true,
        loading: false, 
      }

    case LOADING_PAGE_DIS:

      return {
        main: true,
        loading: false, 
        works: false,
        contacts: false,
        tree: false,
      }

    case LOADING_PAGE_HIDE: 

      return {

        ...state,
        loadingStyle: state.loadingStyle.replace('opacity-100', 'opacity-0') + ' absolute scale-[10%] -translate-y-full'

      }

    default:
      return state;
  }
};
