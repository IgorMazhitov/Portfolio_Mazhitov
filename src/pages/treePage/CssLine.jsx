


    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { CSS_ANIM_6, CSS_ANIM_7, CSS_ANIM_8, CSS_ANIM_9 } from "../../Redux/types";

        const CssLine = (props) => {

            const dispatch = useDispatch()

            const textStyle = 'duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-yellow-400 text-black text-center w-fit'

            const { 
                startCSSDot, firstMiddleLine, 
                secondDot, secondLine, thirdCSSDot, thirdCSSHorizontalLine, 
                thirdCSSDiagonalLine, fourthCSSDot, fourthCSSDiagDot, 
                fourthCSSLine, fourthCSSDiagLine, fifthCSSDot
            } = useSelector(state => state.tree)

            const {
                firstCSS, secondCSS, thirdCSS, fourthCSS, fifthCSS, fourthLowerCSS, fifthLowerCSS,
                setFirstCSS, setSecondCSS, setThirdCSS, setFourthCSS, setFifthCSS, setFourthLowerCSS, setFifthLowerCSS
            } = props.value
            
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
                dispatch({type: CSS_ANIM_6})
                setTimeout(() => {
                    dispatch({type: CSS_ANIM_7})
                }, 300)
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
                dispatch({type: CSS_ANIM_8})
                setTimeout(() => {
                    dispatch({type: CSS_ANIM_9})
                }, 300)
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
                dispatch({type: CSS_ANIM_8})
                setTimeout(() => {
                    dispatch({type: CSS_ANIM_9})
                }, 300)
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
                                    <p className={textStyle}>syntax</p>
                                    <p className={textStyle}>box model</p>
                                    <p className={textStyle}>tables</p>
                                    <p className={textStyle}>position</p>
                                </div>

                                <div className={secondLine}>

                                    <div 
                                    className={thirdCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                    onClick={() => thirdCSSClick()}></div>
                                    <div className={thirdCSSDot}>

                                        <div className={thirdCSS}>
                                            <p className={textStyle}>Preprocessors</p>
                                            <p className={textStyle}>Frameworks</p>
                                        </div>

                                        <div className={thirdCSSHorizontalLine}>

                                            <div 
                                            className={fourthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                            onClick={() => fourthCSSClick()}></div>
                                            <div className={fourthCSSDot}>
                                        
                                                <div className={fourthCSS}>
                                                    <p className={textStyle}>transitions</p>
                                                    <p className={textStyle}>animations</p>
                                                    <p className={textStyle}>pagination</p>
                                                </div>

                                                <div className={fourthCSSLine}>

                                                    <div 
                                                    className={fifthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                    onClick={() => fifthCSSClick()}></div>

                                                    <div className={fifthCSSDot}>

                                                        <div className={fifthCSS}>
                                                            <p className={textStyle}>grid</p>
                                                            <p className={textStyle}>flexbox</p>
                                                            <p className={textStyle}>responsive design</p>
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
                                                    <p className={textStyle}>SASS</p>
                                                    <p className={textStyle}>LESS</p>
                                                    <p className={textStyle}>STYLUS</p>
                                                    <p className={textStyle}>POST CSS</p>
                                                </div>

                                                <div className={fourthCSSDiagLine}>

                                                    <div 
                                                    className={fifthCSSDot + ' hover:scale-125 z-10 cursor-pointer'}
                                                    onClick={() => fifthLowerCSSClick()}></div>
                                                    <div className={fifthCSSDot}>

                                                        <div className={fifthLowerCSS}>
                                                            <p className={textStyle}>bootstrap</p>
                                                            <p className={textStyle}>tailwind css</p>
                                                            <p className={textStyle}>foundation</p>
                                                            <p className={textStyle}>bulma</p>
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