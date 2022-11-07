import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  MAIN_HOR_HOVER_ON,
  MAIN_HOR_HOVER_OUT,
} from "../Redux/types";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const MainNavPage = (props) => {
  const dispatch = useDispatch()
  const { mainHor } = useSelector((state) => state.style);
  const {showHideSoftSkills, showHidehardSkills, show, showHideCSS, showHideJS, showHideReact} = props

  const { leftPart, rightPart } = useSelector((state) => state.style);

  const { triggerHS, triggerSS } = useSelector(
    (state) => state.style
  );

  const mainHorHover = (pos) => {
    pos === "ON"
      ? dispatch({ type: MAIN_HOR_HOVER_ON })
      : dispatch({ type: MAIN_HOR_HOVER_OUT });
  };


  return (
    <div className="h-full w-full">
      <div className={leftPart}>
        <p className="ml-1 md:ml-2 xl:ml-3 font-bold text-xl md:text-3xl xl:text-5xl ">
          {" "}
          FRONT-END DEVELOPER{" "}
        </p>

        <p className="ml-1 md:ml-2 xl:ml-3 font-bold text-lg md:text-2xl xl:text-3xl">
          {" "}
          REACT JS HTML CSS{" "}
        </p>
      </div>

      <div
        className={mainHor}
        onMouseEnter={() => mainHorHover("ON")}
        onMouseLeave={() => mainHorHover("OUT")}
        onClick={() => show("MAIN_HOR")}
      >
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-slate-200"></div>
      </div>

      <div className={rightPart}>
        <p className="mr-1 md:mr-2 xl:mr-3 font-bold text-xl md:text-3xl xl:text-5xl text-right "> IGOR MAZHITOV </p>

        <p className="mr-1 md:mr-2 xl:mr-3 font-bold text-xl md:text-3xl xl:text-5xl text-right"> ISTANBUL, TURKEY </p>
      </div>

      <HardSkills func={{ showHideCSS, showHideJS, showHideReact }} />

      <div className={triggerHS} onClick={() => showHidehardSkills()}>
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-yellow-400"></div>
      </div>

      <div className={triggerSS} onClick={() => showHideSoftSkills()}>
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-teal-400"></div>
      </div>
      <SoftSkills />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainNavPage);