


import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { BTN_END, BTN_START, CSS_ANIM_5, CSS_CLOSE, HTML_ANIM_5, HTML_CLOSE, JS_ANIM_5, JS_CLOSE, TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3, TREE_ANIM_4, TREE_HIDE_GIT, TREE_SHOW_GIT, TREE_START_CLOSE } from "../../Redux/types";
import CssLine from "./CssLine";
import HtmlLine from "./HtmlLine";
import JsLine from "./JsLine";


        const TreePage = (props) => {

            const dispatch = useDispatch()
            const [buttonState, setButtonState] = useState(false)
            const { buttonStyle, buttonText, gitDot, gitStyle, treePageStyle } = useSelector(state => state.tree)

            const [firstCSS, setFirstCSS] = useState('duration-300 absolute -top-2 -translate-y-full text-xl font-bold bg-black text-slate-200 overflow-hidden h-0')
            const [secondCSS, setSecondCSS] = useState('duration-300 absolute -bottom-4 -left-8 -translate-x-[20%] w-60 translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [thirdCSS, setThirdCSS] = useState('z-20 duration-300 absolute -bottom-4 -left-16 -translate-x-[20%] w-60 translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fourthCSS, setFourthCSS] = useState('z-20 duration-300 absolute -bottom-4 w-max translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fifthCSS, setFifthCSS] = useState('z-20 duration-300 absolute -bottom-4 w-max translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fourthLowerCSS, setFourthLowerCSS] = useState('duration-300 absolute -left-4 -translate-x-full w-60 top-1/2 -translate-y-1/2 text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fifthLowerCSS, setFifthLowerCSS] = useState('duration-300 absolute -right-4 top-1/2 translate-x-full w-96 -translate-y-1/2 text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')

            const [firstJS, setFirstJS] = useState('text-xl duration-300 absolute -top-2 -translate-y-full font-bold text-slate-200 overflow-hidden h-0 flex flex-col gap-1')
            const [secondJS, setSecondJS] = useState('duration-300 absolute -top-2 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [thirdJS, setThirdJS] = useState('duration-300 absolute -top-2 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [fourthJS, setFourthJS] = useState('duration-300 absolute -top-2 w-96 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [fifthJS, setFifthJS] = useState('duration-300 absolute -top-2 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [sixthJS, setSixthJS] = useState('duration-300 absolute -right-6 w-0 translate-x-full text-md font-bold text-slate-200 overflow-hidden h-20 flex flex-row justify-start items-start gap-1 z-20')
            const [seventhUpperJS, setSeventhUpperJS] = useState('duration-300 absolute -bottom-8 w-96 translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [eightUpperJS, setEightUpperJS] = useState('duration-300 absolute -bottom-14 -left-8 w-96 translate-y-full -translate-x-1/3 text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [seventhLowerJS, setSeventhLowerJS] = useState('duration-300 absolute -top-8 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [eightLowerJS, setEightLowerJS] = useState('duration-300 absolute -top-14 -left-8 w-96 -translate-y-full -translate-x-1/3 text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')

            const [firstHTML, setFirstHTML] = useState('duration-300 absolute -top-2 -translate-y-full text-xl font-bold bg-black text-slate-200 overflow-hidden h-0')
            const [secondHTML, setSecondHTML] = useState('duration-300 absolute -top-2 -translate-y-full overflow-hidden h-0 flex flex-col justify-start items-start font-bold gap-1')
            const [thirdHTML, setThirdHTML] = useState('duration-300 absolute -top-2 -translate-y-full overflow-hidden h-0 flex flex-row justify-center items-center font-bold gap-1')
            const [fourthHTML, setFourthHTML] = useState('duration-300 absolute -right-2 translate-x-full -translate-y-1/3 overflow-hidden h-[88px] w-0 flex flex-row flex-wrap justify-center items-center font-bold gap-1')

            const value = {
                firstCSS, secondCSS, thirdCSS, fourthCSS, fifthCSS, fourthLowerCSS, fifthLowerCSS,
                setFirstCSS, setSecondCSS, setThirdCSS, setFourthCSS, setFifthCSS, setFourthLowerCSS, setFifthLowerCSS,
                firstJS, secondJS, thirdJS, fourthJS, fifthJS, sixthJS, seventhUpperJS, eightUpperJS, seventhLowerJS, eightLowerJS,
                setFirstJS, setSecondJS, setThirdJS, setFourthJS, setFifthJS, setSixthJS, setSeventhUpperJS, setEightUpperJS, setSeventhLowerJS, setEightLowerJS,
                firstHTML, secondHTML, thirdHTML, fourthHTML,
                setFirstHTML, setSecondHTML, setThirdHTML, setFourthHTML
            }

            const clickHandler = () => {

                    if (buttonText === 'open') {

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
                            setButtonState(false)
                        }, 1400)

                    } else {

                        setFirstJS(prev => prev.replace('h-24', 'h-0'))
                        setSecondJS(prev => prev.replace('h-24', 'h-0'))
                        setThirdJS(prev => prev.replace('h-20', 'h-0'))
                        setFourthJS(prev => prev.replace('h-20', 'h-0'))
                        setFifthJS(prev => prev.replace('h-20', 'h-0'))
                        setSixthJS(prev => prev.replace('w-44', 'w-0'))
                        setEightUpperJS(prev => prev.replace('h-20', 'h-0'))
                        setSeventhUpperJS(prev => prev.replace('h-32', 'h-0'))
                        setSeventhLowerJS(prev => prev.replace('h-32', 'h-0'))
                        setEightLowerJS(prev => prev.replace('h-20', 'h-0'))
    
                        setThirdHTML(prev => prev.replace('h-11', 'h-0'))
                        setSecondHTML(prev => prev.replace('h-56', 'h-0'))
                        setFirstHTML(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                        setFourthHTML(prev => prev.replace('w-80', 'w-0'))
    
                        setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                        setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                        setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                        setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                        setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                        setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                        setFifthCSS(prev => prev.replace('h-14', 'h-0'))
    
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

            const gitClick = () => {
                if (gitStyle.match('w-0')) {
                    dispatch({type: TREE_SHOW_GIT})
                } else {
                    dispatch({type: TREE_HIDE_GIT})
                }
            }

            return (

                <div className={treePageStyle}>

                    <Header />

                    <div>

                        <div className="absolute w-full h-full -z-10"> <img className="scale-[200%]" src={require("../../assets/anim_bg_dots.svg").default} alt='mySvgImage' /></div>

                        <HtmlLine value={value} />

                        <JsLine value={value} />

                        <CssLine value={value} />

                        <div
                        className={gitDot + ' hover:scale-125 z-10 cursor-pointer'}
                        onClick={() => gitClick()}></div>

                        <div className={gitDot}>
                            <div className={gitStyle}>GIT</div>
                        </div>

                        <button
                        disabled={buttonState}
                        className={buttonStyle}
                        onClick={() => clickHandler()}>{buttonText}</button>
                    </div>
                
                </div>

            )

        }

    export default TreePage