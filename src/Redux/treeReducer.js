import { TREE_TEST, TREE_TEST_2 } from "./types";



    const initialState = {

        textStyle: "text-4xl text-teal-400 font-bold duration-300",

    }

    export const treeReducer = (state = initialState, action) => {

        switch (action.type) {

            case TREE_TEST:
                
                return {

                    ...state,
                    textStyle: state.textStyle = "text-5xl text-teal-600 font-extrabold duration-300"

                }

            case TREE_TEST_2:

                return {

                    ...state,
                    textStyle: state.textStyle = "text-4xl text-teal-400 font-bold duration-300"

                }
        
            default:
                return state

        }
    }