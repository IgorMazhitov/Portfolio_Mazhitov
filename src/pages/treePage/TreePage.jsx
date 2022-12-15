


    import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { BTN_END, BTN_START, CSS_ANIM_5, CSS_ANIM_6, CSS_ANIM_7, CSS_ANIM_8, CSS_ANIM_9, CSS_CLOSE, HTML_ANIM_5, HTML_ANIM_6, HTML_ANIM_7, HTML_CLOSE, JS_ANIM_10, JS_ANIM_11, JS_ANIM_12, JS_ANIM_13, JS_ANIM_14, JS_ANIM_15, JS_ANIM_5, JS_ANIM_6, JS_ANIM_7, JS_ANIM_8, JS_ANIM_9, JS_CLOSE, TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3, TREE_ANIM_4, TREE_START_CLOSE } from "../../Redux/types";
import HtmlLine from "./HtmlLine";


        const TreePage = (props) => {

            const dispatch = useDispatch()
            const [buttonState, setButtonState] = useState(false)
            const { 
                startJSDot, startHTMLDot, startCSSDot, firstMiddleLine, 
                secondDot, secondLine, thirdCSSDot, thirdCSSHorizontalLine, 
                thirdCSSDiagonalLine, fourthCSSDot, fourthCSSDiagDot, 
                fourthCSSLine, fourthCSSDiagLine, fifthCSSDot, thirdJSDot,
                thirdJSHorizontalLine, thirdJSDiagonalLine, fourthJSDot, 
                fourthJSLine, thirdHTMLDot, thirdHTMLLine, fourthHTMLDot, 
                fifthJSDot, fifthJSLine, sixthJSDot, sixthJSUpperLine, 
                sixthJSLowerLine, seventhJSLowerDot, seventhJSUpperDot, 
                seventhJSLine, eightJSDot, buttonStyle, buttonText
            } = useSelector(state => state.tree)

            const clickHandler = () => {

                const startPoint = document.getElementById('start_point').classList
                const endPoint = document.getElementById('end_point').classList
                
                if (startPoint.contains('w-0')) {

                    // Moving dot to the left and displaying 2 other// 
                    dispatch({type: TREE_ANIM_1})
                    setButtonState(true)
                    
                    // Lines are appearing  //
                    setTimeout(() => {
                        dispatch({type: BTN_START})
                        dispatch({type: TREE_ANIM_2})
                    }, 300)
    
                    // Second Dots are appearing //
                    setTimeout(() => {
                        dispatch({type: TREE_ANIM_3})
                    }, 700)
    
                    setTimeout(() => {
                        dispatch({type: TREE_ANIM_4})
                    }, 1000)
    
                    setTimeout(() => {
                        dispatch({type: CSS_ANIM_5})
                        dispatch({type: JS_ANIM_5})
                        dispatch({type: HTML_ANIM_5})
                    }, 1400)
    
                    setTimeout(() => {
                        dispatch({type: CSS_ANIM_6})
                        dispatch({type: JS_ANIM_6})
                        dispatch({type: HTML_ANIM_6})
    
                    }, 1700)
    
                    setTimeout(() => {
                        dispatch({type: CSS_ANIM_7})
                        dispatch({type: JS_ANIM_7})
                        dispatch({type: HTML_ANIM_7})
                    }, 2100)
    
                    setTimeout(() => {
                        dispatch({type: CSS_ANIM_8})
                        dispatch({type: JS_ANIM_8})
                    }, 2400)
    
                    setTimeout(() => {
                        dispatch({type: CSS_ANIM_9})
                        dispatch({type: JS_ANIM_9})
                    }, 2800)
    
                    setTimeout(() => {
                        dispatch({type: JS_ANIM_10})
                    }, 3100)
    
                    setTimeout(() => {
                        dispatch({type: JS_ANIM_11})
                    }, 3500)
    
                    setTimeout(() => {
                        dispatch({type: JS_ANIM_12})
                    }, 3800)
    
                    setTimeout(() => {
                        dispatch({type: JS_ANIM_13})
                    }, 4100)
    
                    setTimeout(() => {
                        dispatch({type: JS_ANIM_14})
                    }, 4500)
    
                    setTimeout(() => {
                        dispatch({type: JS_ANIM_15})
                        setButtonState(false)
                    }, 4800)

                }

                if (endPoint.contains('w-10')) {

                    setButtonState(true)
                    dispatch({type: HTML_CLOSE})
                    dispatch({type: CSS_CLOSE})
                    dispatch({type: JS_CLOSE})
                    dispatch({type: TREE_START_CLOSE})
                    setTimeout(() => {
                        dispatch({type: BTN_END})
                        setButtonState(false)
                    }, 300)
                }

            }

            return (

                <>

                    <Header />

                    <div className="tree_container w-full absolute bottom-0 h-full overflow-hidden">

                        <div className="absolute w-full h-full -z-10"> <img className="scale-[200%]" src={require("../../assets/anim_bg_dots.svg").default} alt='mySvgImage' /></div>

                        <HtmlLine />

                        <div className={startJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                        <div className={startJSDot}>

                            <div className={firstMiddleLine}>

                                <div className={secondDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                <div className={secondDot}>

                                    <div className={secondLine}>

                                        <div className={thirdJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                        <div className={thirdJSDot}>

                                            <div className={thirdJSDiagonalLine}></div>

                                            <div className={thirdJSHorizontalLine}>

                                                <div className={fourthJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                <div className={fourthJSDot}>

                                                    <div className={fourthJSLine}>

                                                        <div className={fifthJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                        <div className={fifthJSDot}>

                                                            <div className={fifthJSLine}>

                                                                <div className={sixthJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                                <div className={sixthJSDot}>

                                                                    <div className={sixthJSUpperLine}>

                                                                        <div className={seventhJSUpperDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                                        <div className={seventhJSUpperDot}>

                                                                            <div className={seventhJSLine}>

                                                                                <div 
                                                                                className={eightJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>

                                                                            </div>

                                                                        </div>

                                                                    </div>
                                                                    <div className={sixthJSLowerLine}>

                                                                        <div className={seventhJSLowerDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                                        <div className={seventhJSLowerDot}>

                                                                            <div className={seventhJSLine}>

                                                                                <div id="end_point" className={eightJSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>

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

                        <div className={startCSSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                        <div className={startCSSDot}>

                            <div className={firstMiddleLine}>

                                <div className={secondDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                <div className={secondDot}>

                                    <div className={secondLine}>

                                        <div className={thirdCSSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                        <div className={thirdCSSDot}>

                                            <div className={thirdCSSHorizontalLine}>

                                                <div className={fourthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                <div className={fourthCSSDot}>

                                                    <div className={fourthCSSLine}>

                                                        <div className={fifthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className={thirdCSSDiagonalLine}>

                                                <div className={fourthCSSDiagDot + ' hover:scale-125 z-10 cursor-pointer'}></div>
                                                <div className={fourthCSSDiagDot}>

                                                    <div className={fourthCSSDiagLine}>

                                                        <div className={fifthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}></div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <button
                        disabled={buttonState}
                        className={buttonStyle}
                        onClick={() => clickHandler()}>{buttonText}</button>
                    </div>
                
                </>

            )

        }

    export default TreePage