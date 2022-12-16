
    import { useDispatch, useSelector } from "react-redux";


    import React from "react";
    import { JS_ANIM_10, JS_ANIM_11, JS_ANIM_12, JS_ANIM_13, JS_ANIM_14, JS_ANIM_15, JS_ANIM_6, JS_ANIM_7, JS_ANIM_8, JS_ANIM_9, HTML_ANIM_6, HTML_ANIM_7 } from "../../Redux/types";

        const JsLine = (props) => {

            const dispatch = useDispatch()

            const textStyle = 'duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-teal-400 text-center w-fit'

            const { 
                startJSDot, firstMiddleLine, 
                secondDot, secondLine, thirdJSDot, thirdJSDiagonalUpperLine,
                thirdJSHorizontalLine, thirdJSDiagonalLine, fourthJSDot, 
                fourthJSLine,
                fifthJSDot, fifthJSLine, sixthJSDot, sixthJSUpperLine, 
                sixthJSLowerLine, seventhJSLowerDot, seventhJSUpperDot, 
                seventhJSLine, eightJSDot
            } = useSelector(state => state.tree)

            const {
                firstJS, secondJS, thirdJS, fourthJS, fifthJS, sixthJS, seventhUpperJS, eightUpperJS, seventhLowerJS, eightLowerJS,
                setFirstJS, setSecondJS, setThirdJS, setFourthJS, setFifthJS, setSixthJS, setSeventhUpperJS, setEightUpperJS, setSeventhLowerJS, setEightLowerJS
            } = props.value

            const firstJSClick = () => {
                if (firstJS.match('h-0')) {
                    setTimeout(() => {
                        setFirstJS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                }
            }

            const secondJSClick = () => {
                if (secondJS.match('h-0')) {
                    setTimeout(() => {
                        setSecondJS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                }
            }
            
            const thirdJSClick = () => {
                if (thirdJS.match('h-0')) {
                    setTimeout(() => {
                        setThirdJS(prev => prev.replace('h-0', 'h-20'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                }

                dispatch({type: JS_ANIM_6})
                dispatch({type: HTML_ANIM_6})
                setTimeout(() => {
                    dispatch({type: HTML_ANIM_7})
                    dispatch({type: JS_ANIM_7})
                }, 300)

            }

            const fourthJSClick = () => {
                if (fourthJS.match('h-0')) {
                    setTimeout(() => {
                        setFourthJS(prev => prev.replace('h-0', 'h-20'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                }
                dispatch({type: JS_ANIM_8})
                setTimeout(() => {
                    dispatch({type: JS_ANIM_9})
                }, 300)
            }

            const fifthJSClick = () => {
                if (fifthJS.match('h-0')) {
                    setTimeout(() => {
                        setFifthJS(prev => prev.replace('h-0', 'h-20'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                }
                dispatch({type: JS_ANIM_10})
                setTimeout(() => {
                    dispatch({type: JS_ANIM_11})
                }, 300)

            }

            const sixthJSClick = () => {
                if (sixthJS.match('w-0')) {
                    setTimeout(() => {
                        setSixthJS(prev => prev.replace('w-0', 'w-44'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                }
                dispatch({type: JS_ANIM_12})
                setTimeout(() => {
                    dispatch({type: JS_ANIM_13})
                }, 300)
            }

            const seventhUpperJSClick = () => {
                if (seventhUpperJS.match('h-0')) {
                    setTimeout(() => {
                        setSeventhUpperJS(prev => prev.replace('h-0', 'h-32'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                }
                dispatch({type: JS_ANIM_14})
                setTimeout(() => {
                    dispatch({type: JS_ANIM_15})
                }, 300)
            }

            const eightUpperJSClick = () => {
                if (eightUpperJS.match('h-0')) {
                    setTimeout(() => {
                        setEightUpperJS(prev => prev.replace('h-0', 'h-20'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                }
            }

            const seventhLowerJSClick = () => {
                if (seventhLowerJS.match('h-0')) {
                    setTimeout(() => {
                        setSeventhLowerJS(prev => prev.replace('h-0', 'h-32'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                }
                dispatch({type: JS_ANIM_14})
                setTimeout(() => {
                    dispatch({type: JS_ANIM_15})
                }, 300)
            }

            const eightLowerJSClick = () => {
                if (eightLowerJS.match('h-0')) {
                    setTimeout(() => {
                        setEightLowerJS(prev => prev.replace('h-0', 'h-20'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-20', 'h-0'))
                    setSixthJS(prev => prev.replace('w-44', 'w-0'))
                    setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                    setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                    setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                } else {
                    setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
                }
            }

            return (

                <>
                
                    <div 
                    className={startJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                    onClick={() => firstJSClick()}></div>
                    <div className={startJSDot}>

                        <div className={firstJS}>
                            <p className={textStyle}>JavaScript</p>
                            <p className={textStyle}>ES6</p>
                        </div>

                        <div className={firstMiddleLine}>

                            <div 
                            className={secondDot + ' hover:scale-125 z-10 cursor-pointer'}
                            onClick={() => secondJSClick()}></div>

                            <div className={secondDot}>

                                <div className={secondJS}>
                                    <p className={textStyle}>SYNTAX</p>
                                    <p className={textStyle}>DATA TYPES</p>
                                    <p className={textStyle}>FUNCTIONS</p>
                                    <p className={textStyle}>OBJECTS</p>
                                </div>

                                <div className={secondLine}>

                                    <div 
                                    className={thirdJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                    onClick={() => thirdJSClick()}
                                    ></div>

                                    <div className={thirdJSDot}>

                                        <div className={thirdJS}>
                                            <p className={textStyle}>DOM MANIPULATION</p>
                                            <p className={textStyle}>HTML</p>
                                        </div>

                                        <div className={thirdJS.replace('-top-2', '-bottom-2').replace('-translate-y-full', 'translate-y-full')}>
                                            <p className={textStyle}>CSS</p>
                                        </div>

                                        <div className={thirdJSDiagonalUpperLine}></div>

                                        <div className={thirdJSDiagonalLine}></div>

                                        <div className={thirdJSHorizontalLine}>

                                            <div 
                                            className={fourthJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                            onClick={() => fourthJSClick()}></div>

                                            <div className={fourthJSDot}>

                                                <div className={fourthJS}>
                                                    <p className={textStyle}>ASYNC/AWAIT</p>
                                                    <p className={textStyle}>CALLBACKS</p>
                                                    <p className={textStyle}>PROMISES</p>
                                                </div>

                                                <div className={fourthJSLine}>

                                                    <div 
                                                    className={fifthJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                    onClick={() => fifthJSClick()}></div>

                                                    <div className={fifthJSDot}>

                                                        <div className={fifthJS}>
                                                            <p className={textStyle}>API</p>
                                                            <p className={textStyle}>FETCH</p>
                                                            <p className={textStyle}>XMLHTTPRequest</p>
                                                        </div>

                                                        <div className={fifthJSLine}>

                                                            <div 
                                                            className={sixthJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                            onClick={() => sixthJSClick()}></div>

                                                            <div className={sixthJSDot}>

                                                                <div className={sixthJS}>
                                                                    <p className={textStyle}>REACT</p>
                                                                    <p className={textStyle}>REDUX</p>
                                                                </div>

                                                                <div className={sixthJSUpperLine}>

                                                                    <div 
                                                                    className={seventhJSUpperDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                                    onClick={() => seventhUpperJSClick()}></div>

                                                                    <div className={seventhJSUpperDot}>

                                                                        <div className={seventhUpperJS}>
                                                                            <p className={textStyle}>CLI</p>
                                                                            <p className={textStyle}>Life Cycle</p>
                                                                            <p className={textStyle}>Functional/Class Components</p>
                                                                            <p className={textStyle}>Props</p>
                                                                        </div>

                                                                        <div className={seventhJSLine}>

                                                                            <div 
                                                                            className={eightJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                                            onClick={() => eightUpperJSClick()}></div>

                                                                            <div className={eightJSDot}>

                                                                                <div className={eightUpperJS}>
                                                                                    <p className={textStyle}>HOOKS</p>
                                                                                    <p className={textStyle}>REFS</p>
                                                                                    <p className={textStyle}>CONTEXT</p>
                                                                                    <p className={textStyle}>High Order Components</p>
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className={sixthJSLowerLine}>

                                                                    <div 
                                                                    className={seventhJSLowerDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                                    onClick={() => seventhLowerJSClick()}></div>

                                                                    <div className={seventhJSLowerDot}>

                                                                        <div className={seventhLowerJS}>
                                                                                <p className={textStyle}>REACT-ROUTER</p>
                                                                                <p className={textStyle}>SSR/NEXTJS</p>
                                                                                <p className={textStyle}>AXIOS</p>
                                                                                <p className={textStyle}>HOOK FORM</p>
                                                                        </div>

                                                                        <div className={seventhJSLine}>

                                                                            <div 
                                                                            id="end_point" 
                                                                            className={eightJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                                            onClick={() => eightLowerJSClick()}></div>

                                                                            <div id="end_point" className={eightJSDot}>

                                                                                <div className={eightLowerJS}>
                                                                                    <p className={textStyle}>MOBX</p>
                                                                                    <p className={textStyle}>Styled Component</p>
                                                                                    <p className={textStyle}>Material UI</p>
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </>

            )

        }

    export default JsLine