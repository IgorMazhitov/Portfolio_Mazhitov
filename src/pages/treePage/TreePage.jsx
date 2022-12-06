


    import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TREE_TEST } from "../../Redux/types";


        const TreePage = (props) => {

            const dispatch = useDispatch()
            const { textStyle } = useSelector(state => state.tree)

            const clickHandler = () => {

                
                dispatch({type: TREE_TEST})

            }

            return (

                <div>
                    <p className={textStyle}>tree</p>
                    <button onClick={() => clickHandler()}>click</button>
                </div>

            )

        }

    export default TreePage