    
    import React from "react";
    import { ReactComponent as Background } from "../../assets/anim_bg.svg"

        const LoadingPage = (props) => {

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

                    <svg className="absolute w-full h-fit flex justify-start pl-10 items-center -translate-x-1/2 top-[23%] left-0">
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