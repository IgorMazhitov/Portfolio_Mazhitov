import { CSS_ANIM_5, CSS_ANIM_6, CSS_ANIM_7, CSS_ANIM_8, TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3, TREE_ANIM_4 } from "./types";



    const initialState = {

        startJSDot: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-400 duration-300",
        startHTMLDot: "absolute top-1/2 left-40 -translate-y-[350%] w-0 h-0 rounded-full bg-yellow-400 duration-300",
        startCSSDot: "absolute top-1/2 left-40 translate-y-[300%] w-0 h-0 rounded-full bg-red-500 duration-300",
        firstMiddleLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        secondDot: "absolute top-1/2 right-0 -translate-y-1/2 h-0 w-0 bg-inherit rounded-full duration-300",
        secondLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        thirdCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        thirdCSSHorizontalLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        thirdCSSDiagonalLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        fourthCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        fourthCSSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",

    }

    export const treeReducer = (state = initialState, action) => {

        switch (action.type) {

            case TREE_ANIM_1:
                
                return {

                    ...state,
                    startJSDot: state.startJSDot.replace('left-1/2', 'left-20').replace('-translate-x-1/2', '-translate-x'),
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
                    secondDot: state.secondDot.replace('h-0', 'h-10').replace('w-0', 'w-10')

                }

            case TREE_ANIM_4:

                return {
    
                    ...state,
                    secondLine: state.secondLine.replace('w-0', 'w-[200px]')
    
                }

            case CSS_ANIM_5:

                return {
                    ...state,
                    thirdCSSDot: state.thirdCSSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            case CSS_ANIM_6:

                return {
                    ...state,
                    thirdCSSHorizontalLine: state.thirdCSSHorizontalLine.replace('w-0', 'w-[200px]'),
                    thirdCSSDiagonalLine: state.thirdCSSDiagonalLine.replace('w-0', 'w-[200px]')
                }

            case CSS_ANIM_7:

                return {
                    ...state,
                    fourthCSSDot: state.fourthCSSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            case CSS_ANIM_8:

                return {
                    ...state,
                    fourthCSSLine: state.fourthCSSLine.replace('w-0', 'w-[200px]').replace('-translate-y-1/2', '-translate-y-full') + ' rotate-0'
                }
        
            default:
                return state

        }
    }