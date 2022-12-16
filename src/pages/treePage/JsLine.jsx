
    import { useSelector } from "react-redux";


    import React from "react";
import { useState } from "react";

        const JsLine = (props) => {

            const { 
                startJSDot, firstMiddleLine, 
                secondDot, secondLine, thirdJSDot, thirdJSDiagonalUpperLine,
                thirdJSHorizontalLine, thirdJSDiagonalLine, fourthJSDot, 
                fourthJSLine,
                fifthJSDot, fifthJSLine, sixthJSDot, sixthJSUpperLine, 
                sixthJSLowerLine, seventhJSLowerDot, seventhJSUpperDot, 
                seventhJSLine, eightJSDot
            } = useSelector(state => state.tree)

            const [firstJS, setFirstJS] = useState('text-xl duration-300 absolute -top-2 -translate-y-full font-bold text-slate-200 overflow-hidden h-0 flex flex-col gap-1')
            const [secondJS, setSecondJS] = useState('duration-300 absolute -top-2 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [thirdJS, setThirdJS] = useState('duration-300 absolute -top-2 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [fourthJS, setFourthJS] = useState('duration-300 absolute -top-2 w-96 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const [fifthJS, setFifthJS] = useState('duration-300 absolute -top-2 w-60 -translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1 z-20')
            const firstJSClick = () => {
                if (firstJS.match('h-0')) {
                    setTimeout(() => {
                        setFirstJS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-24', 'h-0'))
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
                    setFifthJS(prev => prev.replace('h-24', 'h-0'))
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
                    setFifthJS(prev => prev.replace('h-24', 'h-0'))
                } else {
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                }
            }

            const fourthJSClick = () => {
                if (fourthJS.match('h-0')) {
                    setTimeout(() => {
                        setFourthJS(prev => prev.replace('h-0', 'h-20'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFifthJS(prev => prev.replace('h-24', 'h-0'))
                } else {
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                }
            }

            const fifthJSClick = () => {
                if (fifthJS.match('h-0')) {
                    setTimeout(() => {
                        setFifthJS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setFirstJS(prev => prev.replace('h-24', 'h-0'))
                    setSecondJS(prev => prev.replace('h-24', 'h-0'))
                    setThirdJS(prev => prev.replace('h-20', 'h-0'))
                    setFourthJS(prev => prev.replace('h-20', 'h-0'))
                } else {
                    setFifthJS(prev => prev.replace('h-24', 'h-0'))
                }
            }

            return (

                <>
                
                    <div 
                    className={startJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                    onClick={() => firstJSClick()}></div>
                    <div className={startJSDot}>

                        <div className={firstJS}>
                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center'>JavaScript</p>
                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>ES6</p>
                        </div>

                        <div className={firstMiddleLine}>

                            <div 
                            className={secondDot + ' hover:scale-125 z-10 cursor-pointer'}
                            onClick={() => secondJSClick()}></div>

                            <div className={secondDot}>

                                <div className={secondJS}>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>SYNTAX</p>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>DATA TYPES</p>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>FUNCTIONS</p>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>OBJECTS</p>
                                </div>

                                <div className={secondLine}>

                                    <div 
                                    className={thirdJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                    onClick={() => thirdJSClick()}
                                    ></div>

                                    <div className={thirdJSDot}>

                                        <div className={thirdJS}>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>DOM MANIPULATION</p>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>HTML</p>
                                        </div>

                                        <div className={thirdJS.replace('-top-2', '-bottom-2').replace('-translate-y-full', 'translate-y-full')}>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>CSS</p>
                                        </div>

                                        <div className={thirdJSDiagonalUpperLine}></div>

                                        <div className={thirdJSDiagonalLine}></div>

                                        <div className={thirdJSHorizontalLine}>

                                            <div 
                                            className={fourthJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                            onClick={() => fourthJSClick()}></div>

                                            <div className={fourthJSDot}>

                                                <div className={fourthJS}>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>ASYNC/AWAIT</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>CALLBACKS</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>PROMISES</p>
                                                </div>

                                                <div className={fourthJSLine}>

                                                    <div 
                                                    className={fifthJSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                    onClick={() => fifthJSClick()}></div>

                                                    <div className={fifthJSDot}>

                                                        <div className={fifthJS}>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>API</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>FETCH</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>XMLHTTPRequest</p>
                                                        </div>

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

                </>

            )

        }

    export default JsLine