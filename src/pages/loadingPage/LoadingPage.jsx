    
    import React from "react";
    import { ReactComponent as Background } from "../../assets/anim_bg.svg"
    import { ReactComponent as Name } from "../../assets/anim_name.svg"
    import { ReactComponent as Frontend } from "../../assets/anim_frontend.svg"


        const LoadingPage = (props) => {

            return (

                <div className="box w-full h-full ">

                    <Background />
                    <Name />
                    <Frontend />

                </div>

            )

        }

    export default LoadingPage