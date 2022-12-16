


    import React from "react";
import { useState } from "react";
    import { useSelector } from "react-redux";

        const CssLine = () => {

            const { 
                startCSSDot, firstMiddleLine, 
                secondDot, secondLine, thirdCSSDot, thirdCSSHorizontalLine, 
                thirdCSSDiagonalLine, fourthCSSDot, fourthCSSDiagDot, 
                fourthCSSLine, fourthCSSDiagLine, fifthCSSDot
            } = useSelector(state => state.tree)
            const [firstCSS, setFirstCSS] = useState('duration-300 absolute -top-2 -translate-y-full text-xl font-bold bg-black text-slate-200 overflow-hidden h-0')
            const [secondCSS, setSecondCSS] = useState('duration-300 absolute -bottom-4 -left-8 -translate-x-[20%] w-60 translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [thirdCSS, setThirdCSS] = useState('z-20 duration-300 absolute -bottom-4 -left-16 -translate-x-[20%] w-60 translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fourthCSS, setFourthCSS] = useState('z-20 duration-300 absolute -bottom-4 w-max translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fifthCSS, setFifthCSS] = useState('z-20 duration-300 absolute -bottom-4 w-max translate-y-full text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fourthLowerCSS, setFourthLowerCSS] = useState('duration-300 absolute -left-4 -translate-x-full w-60 top-1/2 -translate-y-1/2 text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')
            const [fifthLowerCSS, setFifthLowerCSS] = useState('duration-300 absolute -right-4 top-1/2 translate-x-full w-96 -translate-y-1/2 text-md font-bold text-slate-200 overflow-hidden h-0 flex flex-row flex-wrap justify-start items-start gap-1')



            const firstCSSClick = () => {
                if (firstCSS.match('h-0')) {
                    setTimeout(() => {
                        setFirstCSS(prev => prev.replace('h-0', 'h-auto') + ' py-2 px-4')
                    }, 300)
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                }
            }

            const secondCSSClick = () => {
                if (secondCSS.match('h-0')) {
                    setTimeout(() => {
                        setSecondCSS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                }
            }

            const thirdCSSClick = () => {
                if (thirdCSS.match('h-0')) {
                    setTimeout(() => {
                        setThirdCSS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                }
            }

            const fourthLowerCSSClick = () => {
                if (fourthLowerCSS.match('h-0')) {
                    setTimeout(() => {
                        setFourthLowerCSS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                }
            }

            const fifthLowerCSSClick = () => {
                if (fifthLowerCSS.match('h-0')) {
                    setTimeout(() => {
                        setFifthLowerCSS(prev => prev.replace('h-0', 'h-24'))
                    }, 300)
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                }
            }

            const fourthCSSClick = () => {
                if (fourthCSS.match('h-0')) {
                    setTimeout(() => {
                        setFourthCSS(prev => prev.replace('h-0', 'h-14'))
                    }, 300)
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                }
            }

            const fifthCSSClick = () => {
                if (fifthCSS.match('h-0')) {
                    setTimeout(() => {
                        setFifthCSS(prev => prev.replace('h-0', 'h-14'))
                    }, 300)
                    setFirstCSS(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setSecondCSS(prev => prev.replace('h-24', 'h-0'))
                    setThirdCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFifthLowerCSS(prev => prev.replace('h-24', 'h-0'))
                    setFourthCSS(prev => prev.replace('h-14', 'h-0'))
                } else {
                    setFifthCSS(prev => prev.replace('h-14', 'h-0'))
                }
            }

            return (

                <>
                
                    <div 
                    className={startCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                    onClick={() => firstCSSClick()}></div>
                    <div className={startCSSDot}>

                        <div className={firstCSS}>CSS</div>

                        <div className={firstMiddleLine}>

                            <div 
                            className={secondDot + ' hover:scale-125 z-10 cursor-pointer'}
                            onClick={() => secondCSSClick()}></div>
                            <div className={secondDot}>

                                <div className={secondCSS}>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>syntax</p>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>box model</p>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>tables</p>
                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>position</p>
                                </div>

                                <div className={secondLine}>

                                    <div 
                                    className={thirdCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                    onClick={() => thirdCSSClick()}></div>
                                    <div className={thirdCSSDot}>

                                        <div className={thirdCSS}>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>Preprocessors</p>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>Frameworks</p>
                                        </div>

                                        <div className={thirdCSSHorizontalLine}>

                                            <div 
                                            className={fourthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                            onClick={() => fourthCSSClick()}></div>
                                            <div className={fourthCSSDot}>
                                        
                                                <div className={fourthCSS}>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>transitions</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>animations</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>pagination</p>
                                                </div>

                                                <div className={fourthCSSLine}>

                                                    <div 
                                                    className={fifthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                    onClick={() => fifthCSSClick()}></div>

                                                    <div className={fifthCSSDot}>

                                                        <div className={fifthCSS}>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>grid</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>flexbox</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>responsive design</p>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        <div className={thirdCSSDiagonalLine}>

                                            <div 
                                            className={fourthCSSDiagDot + ' hover:scale-125 z-40 cursor-pointer'}
                                            onClick={() => fourthLowerCSSClick()}></div>
                                            <div className={fourthCSSDiagDot}>

                                                <div className={fourthLowerCSS}>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>SASS</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>LESS</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>STYLUS</p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>POST CSS</p>
                                                </div>

                                                <div className={fourthCSSDiagLine}>

                                                    <div 
                                                    className={fifthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                    onClick={() => fifthLowerCSSClick()}></div>
                                                    <div className={fifthCSSDot}>

                                                        <div className={fifthLowerCSS}>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>bootstrap</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>tailwind css</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>foundation</p>
                                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200 text-center w-fit'>bulma</p>
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

    export default CssLine