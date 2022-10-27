import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { WORKS_SPREAD_HIDE } from "../Redux/types";

    const WorksPage = (props) => {

        const dispatch = useDispatch()
        const text = useSelector(state => state.elements.spreadHideText)
        
        const mouseHandler = (e) => {
            const gallery = document.getElementsByClassName('WORK_CONT')[0]

            const mouseX = e.clientX
            const mouseY = e.clientY

            const xDecimal = mouseX / window.innerWidth
            const yDecimal = mouseY / (window.innerWidth - 80)

            const maxX = gallery.offsetWidth - window.innerWidth
            const maxY = gallery.offsetHeight - window.innerHeight

            const panX = maxX * xDecimal * -1
            const panY = maxY * yDecimal * -1


            gallery.style.transform = `translate(${panX}px, ${panY}px)`

        }

        const clickHandler = () => {

            const gallery = document.getElementsByClassName('WORK_CONT')[0]
            if (gallery.className.match('w-full')) {
                gallery.className = gallery.className.replace('w-full', 'w-[150%]')
                dispatch({type: WORKS_SPREAD_HIDE})
            } else {
                dispatch({type: WORKS_SPREAD_HIDE})
                gallery.className = gallery.className.replace('w-[150%]', 'w-full')

            }
            

        }

        return (

            <div 
            onMouseOver={(e) => mouseHandler(e)}
            className="WORK_CONT absolute duration-[4000ms] top-20 w-full overflow-hidden z-[2]">

                <p className="absolute top-1/3 left-1/2 translate-x-1/2 text-[100px] font-bold z-0" style={{transform: 'translate(-50%, -50%)'}}> Portfolio </p>

                <div className="absolute top-5 left-5 w-60 h-32 bg-yellow-400 opacity-70 z-[1]"></div>
                <div className="absolute top-52 left-32 w-32 h-60 bg-black opacity-70"></div>
                <div className="absolute top-32 left-80 w-44 h-36 bg-yellow-400 opacity-70"></div>
                <div className="absolute bottom-24 left-16 w-72 h-16 bg-yellow-400 opacity-70"></div>
                <div className="absolute top-80 left-72 w-80 h-44 bg-black opacity-70 hover:opacity-100"> 
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-3xl"> :TO-DO:JS: </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="http://github.com/IgorMazhitov/TO-DO"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute top-0 left-72 w-64 h-24 bg-black opacity-70"></div>
                <div className="absolute bottom-10 left-96 h-24 w-80 bg-black opacity-70 hover:opacity-100">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-3xl"> :CodeWars: </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="http://github.com/IgorMazhitov/CodeWars"> :LINK: </a>
                    </div>
                </div>
                <div 
                onClick={() => {clickHandler()}}
                className="absolute top-36 right-72 h-24 w-96 bg-black text-5xl flex justify-center items-center duration-500 hover:text-yellow-400 hover:scale-105"> {text} </div>
                <div className="absolute bottom-[150px] right-64 h-64 w-64 bg-yellow-400 opacity-70 hover:opacity-100">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl"> :TO-DO: :REACT: </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="http://github.com/IgorMazhitov/TO_DO_REACT"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute top-1 right-1/2 w-10 h-10 bg-black opacity-70"></div>
                <div className="absolute top-16 right-1/2 w-10 h-10 bg-yellow-400 opacity-70"></div>
                <div className="absolute top-1 right-72 w-72 h-10 bg-yellow-400 opacity-70"></div>
                <div className="absolute top-16 right-72 w-72 h-10 bg-black opacity-70"></div>
                <div className="absolute top-12 right-16 w-44 h-72 bg-yellow-400 opacity-70"></div>
                <div className="absolute top-96 right-14 w-44 h-60 bg-black opacity-70"></div>
                <div className="absolute bottom-1 right-[270px] w-44 h-28 bg-black opacity-70"></div>


            </div>

        )

    }

    const mapStateToProps = (state) => {
        return state;
      };

export default connect(mapStateToProps)(WorksPage)