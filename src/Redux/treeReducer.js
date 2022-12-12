import { CSS_ANIM_5, CSS_ANIM_6, CSS_ANIM_7, CSS_ANIM_8, CSS_ANIM_9, HTML_ANIM_5, HTML_ANIM_6, HTML_ANIM_7, JS_ANIM_10, JS_ANIM_11, JS_ANIM_12, JS_ANIM_13, JS_ANIM_14, JS_ANIM_15, JS_ANIM_5, JS_ANIM_6, JS_ANIM_7, JS_ANIM_8, JS_ANIM_9, TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3, TREE_ANIM_4 } from "./types";



    const initialState = {

        startJSDot: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-400 duration-300",
        startHTMLDot: "check_one absolute top-1/2 left-40 -translate-y-[350%] w-0 h-0 rounded-full bg-yellow-400 duration-300",
        startCSSDot: "absolute top-1/2 left-56 translate-y-[300%] w-0 h-0 rounded-full bg-red-500 duration-300",
        firstMiddleLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        secondDot: "absolute top-1/2 right-0 -translate-y-1/2 h-0 w-0 bg-inherit rounded-full duration-300",
        secondLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        // HTML PART START //
        thirdHTMLDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        thirdHTMLLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fourthHTMLDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        // HTML PART END //
        // CSS PART START // 
        thirdCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        thirdCSSHorizontalLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        thirdCSSDiagonalLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        fourthCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        fourthCSSDiagDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300 -rotate-45",
        fourthCSSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fourthCSSDiagLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fifthCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        // CSS PART END // 
        thirdJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        thirdJSHorizontalLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        thirdJSDiagonalLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        fourthJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        fourthJSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fifthJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        fifthJSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        sixthJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300",
        sixthJSUpperLine: "absolute top-1/2 left-1/2 -translate-y-[770%] -translate-x-[15%] h-2 -rotate-45 bg-inherit w-0 rounded-full duration-700",
        sixthJSLowerLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        seventhJSUpperDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 rotate-45 bg-inherit rounded-full duration-300",
        seventhJSLowerDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 -rotate-45 bg-inherit rounded-full duration-300",
        seventhJSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        eightJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit rounded-full duration-300"


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

            case HTML_ANIM_5: 
                
                return {
                    ...state,
                    thirdHTMLDot: state.thirdHTMLDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            case HTML_ANIM_6:

                return {
                    ...state,
                    thirdHTMLLine: state.thirdHTMLLine.replace('w-0', 'w-[200px]')
                }

            case HTML_ANIM_7:
                
                return {
                    ...state,
                    fourthHTMLDot: state.fourthHTMLDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
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
                    fourthCSSDot: state.fourthCSSDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                    fourthCSSDiagDot: state.fourthCSSDiagDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                }

            case CSS_ANIM_8:

                return {
                    ...state,
                    fourthCSSLine: state.fourthCSSLine.replace('w-0', 'w-[200px]'),
                    fourthCSSDiagLine: state.fourthCSSDiagLine.replace('w-0', 'w-[200px]'),
                }

            case CSS_ANIM_9:

                return {
                    ...state,
                    fifthCSSDot: state.fifthCSSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            case JS_ANIM_5: 

                return {
                    ...state,
                    thirdJSDot: state.thirdJSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            case JS_ANIM_6: 

                return {
                    ...state,
                    thirdJSHorizontalLine: state.thirdJSHorizontalLine.replace('w-0', 'w-[200px]'),
                    thirdJSDiagonalLine: state.thirdJSDiagonalLine.replace('w-0', 'w-[200px]')
                }

            case JS_ANIM_7:

                return {
                    ...state,
                    fourthJSDot: state.fourthJSDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                }

            case JS_ANIM_8:

                return {
                    ...state,
                    fourthJSLine: state.fourthJSLine.replace('w-0', 'w-[200px]'),
                }

            case JS_ANIM_9:

                return {
                    ...state,
                    fifthJSDot: state.fifthJSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            case JS_ANIM_10:

                return {
                    ...state,
                    fifthJSLine: state.fifthJSLine.replace('w-0', 'w-[200px]')
                }

            case JS_ANIM_11:

                return {
                    ...state,
                    sixthJSDot: state.sixthJSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }
                
            case JS_ANIM_12:

                return {
                    ...state,
                    sixthJSLowerLine: state.sixthJSLowerLine.replace('w-0', 'w-[200px]'),
                    sixthJSUpperLine: state.sixthJSUpperLine.replace('w-0', 'w-[200px]'),
                }

            case JS_ANIM_13:

                return {
                    ...state,
                    seventhJSUpperDot: state.seventhJSUpperDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                    seventhJSLowerDot: state.seventhJSLowerDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                }

            case JS_ANIM_14:

                return {
                    ...state,
                    seventhJSLine: state.seventhJSLine.replace('w-0', 'w-[200px]'),
                }

            case JS_ANIM_15:

                return {
                    ...state,
                    eightJSDot: state.eightJSDot.replace('w-0', 'w-10').replace('h-0', 'h-10')
                }

            default:
                return state

        }
    }