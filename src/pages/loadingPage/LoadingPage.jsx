    
    import React from "react";
    import { useEffect } from "react";
    import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
    import { ReactComponent as BackgroundDots } from "../../assets/anim_bg_dots.svg"
import { LOADING_A_SURNAME_END, LOADING_A_SURNAME_START, LOADING_CLOSE_BLOCK_1, LOADING_CLOSE_BLOCK_2, LOADING_G_NAME_END, LOADING_G_NAME_START, LOADING_H_SURNAME_END, LOADING_H_SURNAME_START, LOADING_I_NAME_END, LOADING_I_NAME_START, LOADING_I_SURNAME_END, LOADING_I_SURNAME_START, LOADING_M_SURNAME_END, LOADING_M_SURNAME_START, LOADING_O_NAME_END, LOADING_O_NAME_START, LOADING_O_SURNAME_END, LOADING_O_SURNAME_START, LOADING_R_NAME_END, LOADING_R_NAME_START, LOADING_T_SURNAME_END, LOADING_T_SURNAME_START, LOADING_V_SURNAME_END, LOADING_V_SURNAME_START, LOADING_Z_SURNAME_END, LOADING_Z_SURNAME_START } from "../../Redux/types";

        const LoadingPage = (props) => {

            // dispatch hook //
            const dispatch = useDispatch()

            // state pull // 
            const { iNameBlock, gNameBlock, oNameBlock, rNameBlock, mSurnameBlock, aSurnameBlock, zSurnameBlock, hSurnameBlock, iSurnameBlock, tSurnameBlock, oSurnameBlock, vSurnameBlock, block1Close, block2Close } = useSelector(state => state.loading)

            // name letters //
            const [iName, setIName] = useState("opacity-0")
            const [gName, setGName] = useState("opacity-0")
            const [oName, setOName] = useState("opacity-0")
            const [rName, setRName] = useState("opacity-0")

            // surname letters //
            const [mSurname, setMSurname] = useState("opacity-0")
            const [aSurname, setASurname] = useState("opacity-0")
            const [zSurname, setZSurname] = useState("opacity-0")
            const [hSurname, setHSurname] = useState("opacity-0")
            const [iSurname, setISurname] = useState("opacity-0")
            const [tSurname, setTSurname] = useState("opacity-0")
            const [oSurname, setOSurname] = useState("opacity-0")
            const [vSurname, setVSurname] = useState("opacity-0")

            // flipping cards 
            const [frontCard, setFrontCard] = useState("card_flip relative duration-500 w-full h-full transition-all [transform:rotateX(0deg)]")
            // end // 

            useEffect(() => {
                setTimeout(() => {

                    dispatch({type: LOADING_I_NAME_START})
                    setTimeout(() => {dispatch({type: LOADING_G_NAME_START})}, 100)
                    setTimeout(() => {dispatch({type: LOADING_O_NAME_START})}, 200)
                    setTimeout(() => {dispatch({type: LOADING_R_NAME_START})}, 300)

                    setTimeout(() => {dispatch({type: LOADING_M_SURNAME_START})}, 400)
                    setTimeout(() => {dispatch({type: LOADING_A_SURNAME_START})}, 500)
                    setTimeout(() => {dispatch({type: LOADING_Z_SURNAME_START})}, 600)
                    setTimeout(() => {dispatch({type: LOADING_H_SURNAME_START})}, 700)
                    setTimeout(() => {dispatch({type: LOADING_I_SURNAME_START})}, 800)
                    setTimeout(() => {dispatch({type: LOADING_T_SURNAME_START})}, 900)
                    setTimeout(() => {dispatch({type: LOADING_O_SURNAME_START})}, 1000)
                    setTimeout(() => {dispatch({type: LOADING_V_SURNAME_START})}, 1100)

                    setTimeout(() => {
                        setIName(prev => prev.replace('opacity-0', 'opacity-100'))
                        setGName(prev => prev.replace('opacity-0', 'opacity-100'))
                        setOName(prev => prev.replace('opacity-0', 'opacity-100'))
                        setRName(prev => prev.replace('opacity-0', 'opacity-100'))
    
                        setMSurname(prev => prev.replace('opacity-0', 'opacity-100'))
                        setASurname(prev => prev.replace('opacity-0', 'opacity-100'))
                        setZSurname(prev => prev.replace('opacity-0', 'opacity-100'))
                        setHSurname(prev => prev.replace('opacity-0', 'opacity-100'))
                    }, 1150)

                    setTimeout(() => {dispatch({type: LOADING_I_NAME_END})}, 1200)
                    setTimeout(() => {dispatch({type: LOADING_G_NAME_END})}, 1300)
                    setTimeout(() => {dispatch({type: LOADING_O_NAME_END})}, 1400)
                    setTimeout(() => {dispatch({type: LOADING_R_NAME_END})}, 1500)

                    setTimeout(() => {dispatch({type: LOADING_M_SURNAME_END})}, 1600)

                    setTimeout(() => {
                        setISurname(prev => prev.replace('opacity-0', 'opacity-100'))
                        setTSurname(prev => prev.replace('opacity-0', 'opacity-100'))
                        setOSurname(prev => prev.replace('opacity-0', 'opacity-100'))
                        setVSurname(prev => prev.replace('opacity-0', 'opacity-100'))
                    }, 1650)

                    setTimeout(() => {dispatch({type: LOADING_A_SURNAME_END})}, 1700)
                    setTimeout(() => {dispatch({type: LOADING_Z_SURNAME_END})}, 1800)
                    setTimeout(() => {dispatch({type: LOADING_H_SURNAME_END})}, 1900)
                    setTimeout(() => {dispatch({type: LOADING_I_SURNAME_END})}, 2000)
                    setTimeout(() => {dispatch({type: LOADING_T_SURNAME_END})}, 2100)
                    setTimeout(() => {dispatch({type: LOADING_O_SURNAME_END})}, 2200)
                    setTimeout(() => {dispatch({type: LOADING_V_SURNAME_END})}, 2300)

                    setTimeout(() => {
                        setFrontCard(prev => prev.replace(' [transform:rotateX(0deg)]', ' [transform:rotateX(180deg)]'))
                    }, 2600)

                    setTimeout(() => {
                        dispatch({type: LOADING_CLOSE_BLOCK_1})
                        dispatch({type: LOADING_CLOSE_BLOCK_2})
                    }, 3200)

                }, 500)
            }, [])

            return (

                <div className="w-full h-full overflow-hidden relative ">

                    <div 
                    /* container for dots */
                    className="absolute w-full h-full overflow-hidden -z-[1] bg-white flex">
                        <BackgroundDots />
                        <BackgroundDots />
                    </div>

                    <div className="w-full h-full flex flex-col gap-1">
                        <div className={block1Close}></div>
                        <div className={block2Close}></div>
                        <div className={block1Close}></div>
                        <div className={block2Close}></div>
                        <div className={block1Close}></div>
                        <div className={block2Close}></div>
                        <div className={block1Close}></div>
                        <div className={block2Close}></div>
                        <div className={block1Close}></div>
                        <div className={block2Close}></div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row gap-10">

                        
                        <div className="flex flex-row gap-1 text-black">
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={iName}>I</p>
                                <div className={iNameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={gName}>G</p>
                                <div className={gNameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={oName}>O</p>
                                <div className={oNameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={rName}>R</p>
                                <div className={rNameBlock}></div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-1 text-black">
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={mSurname}>M</p>
                                <div className={mSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={aSurname}>A</p>
                                <div className={aSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={zSurname}>Z</p>
                                <div className={zSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={hSurname}>H</p>
                                <div className={hSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={iSurname}>I</p>
                                <div className={iSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={tSurname}>T</p>
                                <div className={tSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={oSurname}>O</p>
                                <div className={oSurnameBlock}></div>
                            </div>
                            <div className="sm:text-5xl md:text-[75px] text-[100px] xl:text-[150px] 2xl:text-[170px] font-bold relative">
                                <p className={vSurname}>V</p>
                                <div className={vSurnameBlock}></div>
                            </div>
                        </div>


                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-1/3 flex flex-row justify-center items-center w-max gap-2">

                        <div class="relative bg-transparent w-36 h-12 [perspective:1000px]">
                            <div class={frontCard}>
                                <div class="absolute w-full h-full bg-transparent [backface-visibility:hidden]"></div>
                                <div class="absolute w-full h-full bg-black [backface-visibility:hidden] [transform:rotateX(180deg)] duration-300 flex items-center justify-center font-bold">
                                    <h2 className="text-yellow-400 text-4xl ">FRONT</h2>
                                </div>
                            </div>
                        </div>

                        <div class="relative bg-transparent w-28 h-12 [perspective:1000px]">
                            <div class={frontCard}>
                                <div class="absolute w-full h-full bg-transparent [backface-visibility:hidden]"></div>
                                <div class="absolute w-full h-full bg-black [backface-visibility:hidden] [transform:rotateX(180deg)] duration-300 flex items-center justify-center font-bold">
                                    <h2 className="text-yellow-400 text-4xl ">END</h2>
                                </div>
                            </div>
                        </div>

                        <div class="relative bg-transparent w-56 h-12 [perspective:1000px]">
                            <div class={frontCard}>
                                <div class="absolute w-full h-full bg-transparent [backface-visibility:hidden]"></div>
                                <div class="absolute w-full h-full bg-black [backface-visibility:hidden] [transform:rotateX(180deg)] duration-300 flex items-center justify-center font-bold">
                                    <h2 className="text-yellow-400 text-4xl ">DEVELOPER</h2>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            )

        }

    export default LoadingPage