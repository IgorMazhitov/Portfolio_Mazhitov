    
    import React from "react";
    import { useEffect } from "react";
    import { useState } from "react";
    import { ReactComponent as Background } from "../../assets/anim_bg.svg"
    import { ReactComponent as BackgroundDots } from "../../assets/anim_bg_dots.svg"

        const LoadingPage = (props) => {

            const [slideAnim, setSlideAnim] = useState('duration-700 absolute top-0 translate-x-1/2 w-full h-1/2 flex justify-start pl-10 items-center opacity-0 z-0 ')
            const [slideNameAnim, setSlideNameAnim] = useState("duration-700 w-full h-1/2 absolute top-1/2 left-1/2 -translate-x-[300%] text-[150px] font-bold -translate-y-[45%] flex justify-center items-center z-10")

            useEffect(() => {
                setSlideAnim(prev => prev.replace('opacity-0', 'opacity-100'))
                setTimeout(() => {
                    setSlideNameAnim(prev => prev.replace(' -translate-x-[300%]', ' -translate-x-1/2'))
                    setSlideAnim(prev => prev.replace(' translate-x-1/2', ' -translate-x-[40%]'))
                }, 1500)
            }, [])

            return (

                <div className="w-screen h-screen overflow-hidden ">

                    
                    <div 
                    /* container for circle */
                    className="absolute w-full h-full duration-[2500ms] overflow-hidden flex justify-center items-center z-10">
                            <Background />
                    </div>
                    <div 
                    /* container for dots */
                    className="absolute w-full h-full overflow-hidden -z-[1] bg-gray-900 flex">
                        <BackgroundDots />
                        <BackgroundDots />
                    </div>

                    <svg id="svg_front_slide" className={slideAnim}>
                        <symbol id="text-copy2" >
                            <text text-anchor="middle2" x="50%" y="50%" class="text--line2 text-[50px] font-bold">FRONT END DEVELOPER</text>
                        </symbol>
                        <g class="g-ants2">
                            <use xlinkHref="#text-copy2"
                            class="text-copy2" id="outline2"></use>
                            <use xlinkHref="#text-copy2"
                            class="text-copy2" id="fill2"></use> 
                        </g>
                    </svg>

                    <svg className={slideNameAnim}>
                        <symbol id="text-copy" className="w-full h-full">
                            <text text-anchor="middle" x="50%" y="50%" class="text--line">IGOR MAZHITOV</text>
                        </symbol>
                        <g class="g-ants absolute top-0 w-full h-full">
                            <use xlinkHref="#text-copy"
                            class="text-copy w-full h-full" id="outline"></use>
                            <use xlinkHref="#text-copy"
                            class="text-copy w-full h-full" id="fill"></use> 
                        </g>
                    </svg>

                </div>

            )

        }

    export default LoadingPage