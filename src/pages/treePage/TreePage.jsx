


    import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { TREE_ANIM_1, TREE_ANIM_2, TREE_ANIM_3 } from "../../Redux/types";


        const TreePage = (props) => {

            const dispatch = useDispatch()
            const { startJSDot, startHTMLDot, startCSSDot, firstMiddleLine, secondDot } = useSelector(state => state.tree)

            const clickHandler = () => {


                dispatch({type: TREE_ANIM_1})

                setTimeout(() => {
                    dispatch({type: TREE_ANIM_2})
                }, 300)

                setTimeout(() => {
                    dispatch({type: TREE_ANIM_3})
                }, 700)

            }

            return (

                <>

                    <Header />

                    <div className="tree_container w-full absolute bottom-0">

                        <div className={startHTMLDot}>

                            <div className={firstMiddleLine}></div>

                        </div>

                        <div className={startJSDot}>

                            <div className={firstMiddleLine}></div>

                        </div>

                        <div className={startCSSDot}>

                            <div className={firstMiddleLine}></div>

                        </div>

                        <button
                        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-full"
                        onClick={() => clickHandler()}>click</button>
                    </div>
                
                </>

            )

        }

    export default TreePage