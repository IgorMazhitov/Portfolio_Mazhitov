


    import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { CSS_ANIM_5, CSS_ANIM_6, CSS_ANIM_7, CSS_ANIM_8, TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3, TREE_ANIM_4 } from "../../Redux/types";


        const TreePage = (props) => {

            const dispatch = useDispatch()
            const { startJSDot, startHTMLDot, startCSSDot, firstMiddleLine, secondDot, secondLine, thirdCSSDot, thirdCSSHorizontalLine, thirdCSSDiagonalLine, fourthCSSDot, fourthCSSLine} = useSelector(state => state.tree)

            const clickHandler = () => {

                // Moving dot to the left and displaying 2 other// 
                dispatch({type: TREE_ANIM_1})


                // Lines are appearing  //
                setTimeout(() => {
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
                }, 1500)

                setTimeout(() => {
                    dispatch({type: CSS_ANIM_6})
                }, 1700)

                setTimeout(() => {
                    dispatch({type: CSS_ANIM_7})
                }, 2000)

                setTimeout(() => {
                    dispatch({type: CSS_ANIM_8})
                }, 2300)

            }

            return (

                <>

                    <Header />

                    <div className="tree_container w-full absolute bottom-0 yel">

                        <div className={startHTMLDot}>

                            <div className={firstMiddleLine}>

                                <div className={secondDot}>

                                    <div className={secondLine}></div>

                                </div>

                            </div>

                        </div>

                        <div className={startJSDot}>

                            <div className={firstMiddleLine}>

                                <div className={secondDot}>

                                    <div className={secondLine}></div>

                                </div>

                            </div>

                        </div>

                        <div className={startCSSDot}>

                            <div className={firstMiddleLine}>

                                <div className={secondDot}>

                                    <div className={secondLine}>

                                        <div className={thirdCSSDot}>

                                            <div className={thirdCSSHorizontalLine}>

                                                <div className={fourthCSSDot}>

                                                    <div className={fourthCSSLine}></div>

                                                </div>

                                            </div>
                                            <div className={thirdCSSDiagonalLine}>

                                                <div className={fourthCSSDot}>

                                                    <div id="diagonalFourthCSS" className={fourthCSSLine}></div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <button
                        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-full"
                        onClick={() => clickHandler()}>click</button>
                    </div>
                
                </>

            )

        }

    export default TreePage