import React from "react";
import { connect, useDispatch } from "react-redux";
import { CONTACTS_PAGE_ACTIVE, MAIN_PAGE_ACTIVE } from "../Redux/types";
import { mainIcon, contactsIcon } from "../icons";


    const WorksPage = (props) => {

        const dispatch = useDispatch()
        
        const mouseHandler = (e) => {
            const gallery = document.getElementsByClassName('WORK_CONT')[0]

            const mouseX = e.clientX
            const mouseY = e.clientY

            const xDecimal = mouseX / window.innerWidth
            const yDecimal = mouseY / (window.innerWidth - 80)

            const maxX = gallery.offsetWidth - window.innerWidth
            const maxY = gallery.offsetHeight - window.innerHeight

            const panX = maxX * xDecimal * -1
            const panY = maxY * yDecimal


            gallery.style.transform = `translate(${panX}px, ${panY}px)`

        }

        return (

            <div 
            onMouseOver={(e) => mouseHandler(e)}
            className="WORK_CONT absolute duration-[4000ms] top-20 w-[150%] overflow-hidden z-[2]">

                <p className="absolute top-1/3 left-1/3 translate-x-1/2 text-[100px] font-bold z-0" style={{transform: 'translate(-50%, -50%)'}}> Portfolio </p>
                <p className="absolute top-1/2 right-0 translate-x-1/2 text-[100px] font-bold z-0" style={{transform: 'translate(-50%, -50%)'}}> Contacts </p>

                <div className="absolute top-5 left-5 w-60 h-32 bg-yellow-400 opacity-70 hover:opacity-100">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold"> :SeaApp: </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-yellow-400 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-black text-5xl" href="https://github.com/IgorMazhitov/Sea_App"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute top-52 left-32 w-32 h-60 bg-black opacity-70 text-yellow-400 text-3xl flex justify-center items-center font-bold"> 
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-3xl font-bold flex justify-center items-center flex-col"> <p>:NextJS:</p> <p>:Game:</p> </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-4xl" href="https://github.com/IgorMazhitov/NextGame"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute top-32 left-80 w-52 h-36 bg-yellow-400 opacity-70 hover:opacity-100">
                    <p className="absolute w-full h-full text-black text-3xl flex flex-col justify-center items-center"> <p>:TO-DO:</p><p>:REACT:</p>  </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-yellow-400 hover:scale-105 text-black text-5xl" href="http://github.com/IgorMazhitov/TO_DO_REACT"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute bottom-24 left-16 w-72 h-16 bg-yellow-400 opacity-70 text-black flex justify-center items-center text-3xl font-bold"> :soon: </div>
                <div className="absolute top-80 left-72 w-80 h-44 bg-black opacity-70 hover:opacity-100"> 
                    <p className="absolute w-full h-full text-yellow-400 text-3xl font-bold flex flex-col justify-center items-center"> <p>:TO-DO:</p> <p>:JS:</p>  </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="http://github.com/IgorMazhitov/TO-DO"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute top-0 left-72 w-64 h-24 bg-black opacity-70 text-yellow-400 flex justify-center items-center text-3xl font-bold"> :soon:</div>
                <div className="absolute bottom-10 left-96 h-24 w-80 bg-black opacity-70 hover:opacity-100">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-3xl font-bold flex justify-center items-center flex-col"> <p>:CodeWars:</p> <p>:GitHub:</p> </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="http://github.com/IgorMazhitov/CodeWars"> :LINK: </a>
                    </div>
                </div>
                <div 
                className="absolute top-36 right-72 h-24 w-96 opacity-70 bg-black text-5xl flex justify-center items-center duration-500 hover:text-yellow-400 hover:scale-105 hover:opacity-100 font-bold">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-5xl font-bold"> :GitHub: </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="https://github.com/IgorMazhitov"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute bottom-[150px] right-64 h-64 w-64 bg-yellow-400 opacity-70 hover:opacity-100">
                    <p className="absolute w-full h-full text-black text-3xl flex flex-col justify-center items-center font-bold text-3xl"> <p>:INSTA:</p>  </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-yellow-400 hover:scale-105 text-black text-5xl" href="https://www.instagram.com/mazhitov.igor/?igshid=YmMyMTA2M2Y%3D"> :LINK: </a>
                    </div>
                </div>
                <div
                onClick={() => dispatch({type: MAIN_PAGE_ACTIVE})}
                className="cursor-pointer duration-500 absolute top-1 right-1/2 w-14 h-14 bg-black opacity-70 flex justify-center items-center fill-white hover:scale-105 hover:fill-yellow-400 hover:opacity-100"> {mainIcon} </div>
                <div className="absolute top-1 right-72 w-72 h-10 bg-yellow-400 opacity-70 text-black flex justify-center items-center text-3xl"> :soon: </div>
                <div className="absolute top-16 right-72 w-72 h-10 bg-black opacity-70 text-yellow-400 flex justify-center items-center text-3xl"> :soon: </div>
                <div className="absolute top-12 right-16 w-44 h-72 bg-yellow-400 opacity-70 hover:opacity-100">
                    <p className="absolute w-full h-full text-black text-3xl flex flex-col justify-center items-center font-bold text-3xl"> <p>:CodeWars:</p>  </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-yellow-400 hover:scale-105 text-black text-5xl" href="https://www.codewars.com/users/IgorMazhitov"> :LINK: </a>
                    </div>
                </div>
                <div className="absolute top-96 right-14 w-44 h-60 bg-black opacity-70 text-3xl text-yellow-400 flex justify-center items-center"> :soon: </div>
                <div className="absolute bottom-1 right-[270px] w-80 h-28 bg-black opacity-70 hover:opacity-100">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-5xl font-bold"> :LinkedIn: </p> 
                    <div className="w-full h-full">
                        <a className="duration-500 bg-black w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 text-yellow-400 text-5xl" href="https://www.linkedin.com/in/igor-mazhitov-630054233/"> :LINK: </a>
                    </div>
                </div>


            </div>

        )

    }

    const mapStateToProps = (state) => {
        return state;
      };

export default connect(mapStateToProps)(WorksPage)