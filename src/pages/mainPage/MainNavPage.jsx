import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  MAIN_HOR_HOVER_ON,
  MAIN_HOR_HOVER_OUT,
} from "../../Redux/types";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const MainNavPage = (props) => {
  const dispatch = useDispatch()
  const {showHideSoftSkills, showHidehardSkills, show, showHideCSS, showHideJS, showHideReact} = props

  const { leftPart, rightPart, mainHor, triggerHS, triggerSS } = useSelector((state) => state.style);

  const leftSideTextStyle = "ml-1 md:ml-2 xl:ml-3 font-bold text-xl md:text-3xl xl:text-5xl"
  const rightSideTextStyle = "mr-1 md:mr-2 xl:mr-3 font-bold text-xl md:text-3xl xl:text-5xl text-right"

  const mainHorHover = (pos) => {
    pos === "ON"
      ? dispatch({ type: MAIN_HOR_HOVER_ON })
      : dispatch({ type: MAIN_HOR_HOVER_OUT });
  };


  return (
    
    <div className="h-full w-full">
      <div className="absolute w-full h-full -z-10 overflow-hidden"> <img className="scale-[200%]" src={require("../../assets/anim_bg_dots.svg").default} alt='mySvgImage' /></div>
      <div className={leftPart}>
        <p className={leftSideTextStyle}>
          {" "}
          FRONT-END DEVELOPER{" "}
        </p>

        <p className={leftSideTextStyle}>
          {" "}
          REACT JS HTML CSS{" "}
        </p>
      </div>

      <div
        /* trigger for horizontal swap */
        className={mainHor + ' main_page_checker'}
        onMouseEnter={() => mainHorHover("ON")}
        onMouseLeave={() => mainHorHover("OUT")}
        onClick={() => show("MAIN_HOR")}
      >
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-slate-200"></div>
      </div>

      <div className={rightPart}>
        <p className={rightSideTextStyle}> IGOR MAZHITOV </p>

        <p className={rightSideTextStyle}> ISTANBUL, TURKEY </p>
      </div>

      <div className="absolute bottom-1/3 left-0 text-5xl font-bold uppercase w-1/2 flex justify-center items-center"> Hard skills </div>

      <HardSkills func={{ showHideCSS, showHideJS, showHideReact }} />

      <div 
      /* trigger for Hard Skills */
      className={triggerHS} onClick={() => showHidehardSkills()}>
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-yellow-400"></div>
      </div>

      <div 
      /* trigger for Soft Skills */
      className={triggerSS} onClick={() => showHideSoftSkills()}>
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-teal-400"></div>
      </div>

      <div className="absolute bottom-1/3 right-0 text-5xl font-bold uppercase w-1/2 flex justify-center items-center"> Soft skills </div>

      <SoftSkills />

    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainNavPage);