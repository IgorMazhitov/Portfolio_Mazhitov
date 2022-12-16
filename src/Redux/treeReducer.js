import { BTN_END, BTN_START, CSS_ANIM_5, CSS_ANIM_6, CSS_ANIM_7, CSS_ANIM_8, CSS_ANIM_9, CSS_CLOSE, HTML_ANIM_5, HTML_ANIM_6, HTML_ANIM_7, HTML_CLOSE, JS_ANIM_10, JS_ANIM_11, JS_ANIM_12, JS_ANIM_13, JS_ANIM_14, JS_ANIM_15, JS_ANIM_5, JS_ANIM_6, JS_ANIM_7, JS_ANIM_8, JS_ANIM_9, JS_CLOSE, TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3, TREE_ANIM_4, TREE_HIDE_GIT, TREE_SHOW_GIT, TREE_START_CLOSE } from "./types";



    const initialState = {
        // button style //
        buttonText: "open",
        buttonStyle: "disabled:opacity-50 uppercase text-2xl duration-300 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-4 px-8 bg-black text-slate-200 font-bold",
        // starting points and lines //
        startJSDot: "absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full w-10 h-10 bg-teal-400 duration-300",
        startHTMLDot: "check_one absolute top-1/2 left-16 -translate-y-[300%] w-0 h-0 bg-yellow-400 duration-300",
        startCSSDot: "absolute top-1/2 left-56 translate-y-[450%] w-0 h-0 bg-black duration-300",
        firstMiddleLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        secondDot: "absolute top-1/2 right-0 -translate-y-1/2 h-0 w-0 bg-inherit duration-300",
        secondLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700 ",
        // HTML PART START //
        thirdHTMLDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        thirdHTMLLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fourthHTMLDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        // HTML PART END //
        // CSS PART START // 
        thirdCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        thirdCSSHorizontalLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        thirdCSSDiagonalLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        fourthCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        fourthCSSDiagDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300 -rotate-45",
        fourthCSSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fourthCSSDiagLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fifthCSSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 bg-inherit duration-300",
        // CSS PART END // 
        thirdJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        thirdJSHorizontalLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        thirdJSDiagonalUpperLine: "absolute top-1/2 left-1/2 -translate-y-[1000%] -translate-x-[15%] h-2 -rotate-45 bg-inherit w-0 rounded-full duration-700",
        thirdJSDiagonalLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        fourthJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        fourthJSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        fifthJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        fifthJSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        sixthJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        sixthJSUpperLine: "absolute top-1/2 left-1/2 -translate-y-[850%] -translate-x-[15%] h-2 -rotate-45 bg-inherit w-0 rounded-full duration-700",
        sixthJSLowerLine: "absolute top-1/2 left-1/2 translate-y-[750%] -translate-x-[15%] h-2 rotate-45 bg-inherit w-0 rounded-full duration-700",
        seventhJSUpperDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 rotate-45 bg-inherit duration-300",
        seventhJSLowerDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 -rotate-45 bg-inherit duration-300",
        seventhJSLine: "absolute top-1/2 left-1/2 -translate-y-1/2 h-2 bg-inherit w-0 rounded-full duration-700",
        eightJSDot: "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0  bg-inherit duration-300",
        // GIT DOT // 
        gitDot: "duration-300 absolute top-1/3 right-96 -translate-x-1/2 -translate-y-[300%] w-0 h-0 bg-black",
        gitStyle: 'overflow-hidden duration-300 absolute top-1/2 -translate-y-1/2 translate-x-full text-xl font-bold bg-yellow-400 text-black -right-4 w-0 h-10 flex justify-center items-center',


    }

    export const treeReducer = (state = initialState, action) => {

        switch (action.type) {

            case BTN_START:

                return {
                    ...state,
                    buttonStyle: state.buttonStyle.replace('top-2/3', 'top-20').replace('-translate-y-full', '-translate-y-1/2'),
                    buttonText: "close"
                }

            case BTN_END: 

                return {
                    ...state,
                    buttonStyle: state.buttonStyle.replace('top-20', 'top-2/3').replace('-translate-y-1/2', '-translate-y-full'),
                    buttonText: "open"
                }

            case TREE_ANIM_1:
                
                return {

                    ...state,
                    startJSDot: state.startJSDot.replace('left-1/2', 'left-20').replace('-translate-x-1/2', '-translate-x'),
                    startHTMLDot: state.startHTMLDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                    startCSSDot: state.startCSSDot.replace('w-0', 'w-10').replace('h-0', 'h-10'),
                    gitDot: state.gitDot.replace('h-0', 'h-10').replace('w-0', 'w-10')

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
                    thirdJSDiagonalUpperLine: state.thirdJSDiagonalUpperLine.replace('w-0', 'w-[230px]'),
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

            case HTML_CLOSE:

                return {
                    ...state,
                    thirdHTMLDot: state.thirdHTMLDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    thirdHTMLLine: state.thirdHTMLLine.replace('w-[200px]', 'w-0'),
                    fourthHTMLDot: state.fourthHTMLDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                }

            case CSS_CLOSE: 

                return {
                    ...state,
                    thirdCSSDot: state.thirdCSSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    thirdCSSHorizontalLine: state.thirdCSSHorizontalLine.replace('w-[200px]', 'w-0'),
                    thirdCSSDiagonalLine: state.thirdCSSDiagonalLine.replace('w-[200px]', 'w-0'),
                    fourthCSSDot: state.fourthCSSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    fourthCSSDiagDot: state.fourthCSSDiagDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    fourthCSSLine: state.fourthCSSLine.replace('w-[200px]', 'w-0'),
                    fourthCSSDiagLine: state.fourthCSSDiagLine.replace('w-[200px]', 'w-0'),
                    fifthCSSDot: state.fifthCSSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),

                }

            case JS_CLOSE:

                return {
                    ...state,
                    thirdJSDot: state.thirdJSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    thirdJSHorizontalLine: state.thirdJSHorizontalLine.replace('w-[200px]', 'w-0'),
                    thirdJSDiagonalLine: state.thirdJSDiagonalLine.replace('w-[200px]', 'w-0'),
                    thirdJSDiagonalUpperLine: state.thirdJSDiagonalUpperLine.replace('w-[230px]', 'w-0'),
                    fourthJSDot: state.fourthJSDot.replace('w-0', 'w-10').replace('h-10', 'h-0'),
                    fourthJSLine: state.fourthJSLine.replace('w-[200px]', 'w-0'),
                    fifthJSDot: state.fifthJSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    fifthJSLine: state.fifthJSLine.replace('w-[200px]', 'w-0'),
                    sixthJSDot: state.sixthJSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    sixthJSLowerLine: state.sixthJSLowerLine.replace('w-[200px]', 'w-0'),
                    sixthJSUpperLine: state.sixthJSUpperLine.replace('w-[200px]', 'w-0'),
                    seventhJSUpperDot: state.seventhJSUpperDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    seventhJSLowerDot: state.seventhJSLowerDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    seventhJSLine: state.seventhJSLine.replace('w-[200px]', 'w-0'),
                    eightJSDot: state.eightJSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),

                }

            case TREE_START_CLOSE:

                return {
                    ...state,
                    startJSDot: state.startJSDot.replace('left-20', 'left-1/2').replace('-translate-x', '-translate-x-1/2'),
                    startHTMLDot: state.startHTMLDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    startCSSDot: state.startCSSDot.replace('w-10', 'w-0').replace('h-10', 'h-0'),
                    firstMiddleLine: state.firstMiddleLine.replace('w-[200px]', 'w-0'),
                    secondDot: state.secondDot.replace('h-10', 'h-0').replace('w-10', 'w-0'),
                    secondLine: state.secondLine.replace('w-[200px]', 'w-0'),
                    gitDot: state.gitDot.replace('h-10', 'h-0').replace('w-10', 'w-0'),
                    gitStyle: state.gitStyle.replace('w-16', 'w-0').replace(' px-4 py-2', '')

                }

            case TREE_SHOW_GIT:

                return {
                    ...state,
                    gitStyle: state.gitStyle.replace('w-0', 'w-16') + ' px-4 py-2'
                }

            case TREE_HIDE_GIT:

                return {
                    ...state,
                    gitStyle: state.gitStyle.replace('w-16', 'w-0').replace(' px-4 py-2', '')
                }

            default:
                return state

        }
    }