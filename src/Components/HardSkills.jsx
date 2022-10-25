import React from "react";
import { connect, useSelector } from "react-redux";
import CssInfo from "./CssInfo";
import JSInfo from "./JSInfo";
import ReactInfo from "./ReactInfo";

const HardSkills = (props) => {
  const JSStyle = useSelector((state) => state.style.jsInfoStyle);
  const { reactInfoStyle, hardSkills, cssInfoStyle } = useSelector(
    (state) => state.style
  );
  const { stripes1, stripes2, stripeV } = useSelector((state) => state.style);
  const { showHideCSS, showHideJS, showHideReact } = props.func;

  return (
    <div className={hardSkills}>
      <div className="flex flex-row justify-between items-center w-full h-20 font-bold relative">
        <div>
          <div
            className="w-36 transition-all cursor-pointer hover:border-b-4 border-black"
            onClick={() => showHideReact()}
          >
            {" "}
            REACT JS{" "}
          </div>

          <ReactInfo elStyle={reactInfoStyle} />
        </div>

        <div>
          <div
            className="transition-all cursor-pointer hover:border-b-4 border-black w-24 text-center"
            onClick={() => showHideJS()}
          >
            {" "}
            JS{" "}
          </div>

          <JSInfo elStyle={JSStyle} />
        </div>

        <div>
          <div
            className="transition-all cursor-pointer hover:border-b-4 border-black w-[152px]"
            onClick={() => showHideCSS()}
          >
            {" "}
            HTML|CSS{" "}
          </div>

          <CssInfo elStyle={cssInfoStyle} />
        </div>
      </div>

      <div className={stripeV}></div>
      <div className="absolute flex flex-col justify-start text-2xl left-full top-0 w-full h-screen py-auto -z-[1]">
        <div className={stripes1}> Hard Skills </div>
        <div className={stripes2}> TypeScript </div>
        <div className={stripes1}> JavaScript </div>
        <div className={stripes2}> React </div>
        <div className={stripes1}> Redux </div>
        <div className={stripes2}> WebPack </div>
        <div className={stripes1}> GIT </div>
        <div className={stripes2}> Tailwind </div>
        <div className={stripes1}> Bootstrap </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(HardSkills);
