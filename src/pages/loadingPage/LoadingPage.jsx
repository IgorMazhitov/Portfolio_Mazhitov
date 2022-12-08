    
    import React from "react";
import { useEffect } from "react";
import { useState } from "react";
    import { ReactComponent as Background } from "../../assets/anim_bg.svg"

        const LoadingPage = (props) => {

            const [slideAnim, setSlideAnim] = useState('duration-1000 absolute w-full h-fit flex justify-start pl-10 items-center translate-x-1/2 opacity-0 top-[23%] left-0 mix-blend-difference')

            useEffect(() => {

                setSlideAnim(prev => prev.replace('opacity-0', 'opacity-100'))
                setTimeout(() => {
                    setSlideAnim(prev => prev.replace(' translate-x-1/2', ' -translate-x-1/2'))
                }, 1500)
            }, [])

            return (

                <div className="box w-full h-full ">

                    <Background />
                    <svg className="absolute w-full h-full flex justify-center items-center">
                        <symbol id="text-copy">
                            <text text-anchor="middle" x="50%" y="50%" class="text--line text-[150px] font-bold">IGOR MAZHITOV</text>
                        </symbol>
                        <g class="g-ants">
                            <use xlinkHref="#text-copy"
                            class="text-copy" id="outline"></use>
                            <use xlinkHref="#text-copy"
                            class="text-copy" id="fill"></use> 
                        </g>
                    </svg>

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

                </div>

            )

        }

    export default LoadingPage