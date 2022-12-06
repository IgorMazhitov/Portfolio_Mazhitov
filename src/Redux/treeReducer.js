import { TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3 } from "./types";



    const initialState = {

        startJSDot: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-400 duration-300",
        startHTMLDot: "absolute top-1/2 left-20 -translate-y-[350%] w-0 h-0 rounded-full bg-yellow-400 duration-300",
        startCSSDot: "absolute top-1/2 left-20 translate-y-[300%] w-0 h-0 rounded-full bg-red-500 duration-300",
        firstMiddleLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        secondDot: "absolute top-1/2 right-0 -translate-y-1/2 h-0 w-10 bg-yellow-400 rounded-full duration-300"

    }

    export const treeReducer = (state = initialState, action) => {

        switch (action.type) {

            case TREE_ANIM_1:
                
                return {

                    ...state,
                    startJSDot: state.startJSDot.replace('left-1/2', 'left-4').replace('-translate-x-1/2', '-translate-x'),
                    startHTMLDot: state.startHTMLDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                    startCSSDot: state.startCSSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')

                }

            case TREE_ANIM_2:

                return {

                    ...state,
                    firstMiddleLine: state.firstMiddleLine.replace('w-0', 'w-[200px]'),

                }

            case TREE_ANIM_3:

                return {

                    ...state,
                    secondDot: state.secondDot.replace('h-0', 'h-0')

                }
        
            default:
                return state

        }
    }