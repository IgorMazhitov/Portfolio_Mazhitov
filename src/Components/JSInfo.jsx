import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  JS_ADV_LEFT,
  JS_ADV_RIGHT,
  JS_ADV_TEXT_ANIMATION_1,
  JS_ADV_TEXT_ANIMATION_1_L,
  JS_ADV_TEXT_ANIMATION_2,
  JS_ADV_TEXT_ANIMATION_2_L,
  JS_ADV_TEXT_ANIMATION_3,
  JS_ADV_TEXT_ANIMATION_3_L,
  JS_BASICS_LEFT,
  JS_BASICS_RIGHT,
  JS_BASIC_TEXT_ANIMATION_1,
  JS_BASIC_TEXT_ANIMATION_1_L,
  JS_BASIC_TEXT_ANIMATION_2,
  JS_BASIC_TEXT_ANIMATION_2_L,
  JS_BASIC_TEXT_ANIMATION_3,
  JS_BASIC_TEXT_ANIMATION_3_L,
} from "../Redux/types";
import {rightArrow, leftArrow} from "../icons"

const JSInfo = (props) => {
  const dispatch = useDispatch();
  const jsBasic = useSelector((state) => state.elements.jsBasics);
  const el = useSelector((state) => state.elements.el);
  const jsBasicLevel = useSelector((state) => state.elements.jsBasicsLevel);
  const jsBasicText = useSelector((state) => state.style.jsBasicText);
  const jsAdvanced = useSelector((state) => state.elements.jsAdvanced);
  const elAdv = useSelector((state) => state.elements.elAdv);
  const jsAdvancedLevel = useSelector(
    (state) => state.elements.jsAdvancedLevel
  );
  const jsAdvText = useSelector((state) => state.style.jsAdvText);

  const BasicsRight = () => {
    dispatch({ type: JS_BASIC_TEXT_ANIMATION_1 });

    setTimeout(() => {
      dispatch({ type: JS_BASIC_TEXT_ANIMATION_2 });
    }, 75);

    setTimeout(() => {
      dispatch({ type: JS_BASIC_TEXT_ANIMATION_3 });
    }, 150);

    setTimeout(() => {
      dispatch({ type: JS_BASICS_RIGHT });
    }, 225);
  };

  const BasicsLeft = () => {
    dispatch({ type: JS_BASIC_TEXT_ANIMATION_1_L });

    setTimeout(() => {
      dispatch({ type: JS_BASIC_TEXT_ANIMATION_2_L });
    }, 75);

    setTimeout(() => {
      dispatch({ type: JS_BASIC_TEXT_ANIMATION_3_L });
    }, 150);

    setTimeout(() => {
      dispatch({ type: JS_BASICS_LEFT });
    }, 225);
  };

  const AdvancedLeft = () => {
    dispatch({ type: JS_ADV_TEXT_ANIMATION_1_L });

    setTimeout(() => {
      dispatch({ type: JS_ADV_TEXT_ANIMATION_2_L });
    }, 75);

    setTimeout(() => {
      dispatch({ type: JS_ADV_TEXT_ANIMATION_3_L });
    }, 150);

    setTimeout(() => {
      dispatch({ type: JS_ADV_LEFT });
    }, 225);
  };

  const AdvancedRight = () => {
    dispatch({ type: JS_ADV_TEXT_ANIMATION_1 });

    setTimeout(() => {
      dispatch({ type: JS_ADV_TEXT_ANIMATION_2 });
    }, 75);

    setTimeout(() => {
      dispatch({ type: JS_ADV_TEXT_ANIMATION_3 });
    }, 150);

    setTimeout(() => {
      dispatch({ type: JS_ADV_RIGHT });
    }, 225);
  };

  return (
    <div className={props.elStyle} style={{height: '0px'}}>
        <p className="text-slate-100 mb-2"> Basics: </p>
        <div className="flex flex-row justify-between w-full h-32 text-slate-100">
            <button
            className="w-10 h-full flex justify-center items-center"
            onClick={BasicsLeft}
            >
                {" "}
                {leftArrow}{" "}
            </button>{" "}
            <div className="flex flex-col items-center justify-between">
                <p className={jsBasicText}> {jsBasic[el]} </p>{" "}
                <p className=" w-72 h-[2px] bg-slate-100"></p>
                <p className={jsBasicText}> {jsBasicLevel[el]} </p>{" "}
            </div>
            <button className="w-10 h-full" onClick={BasicsRight}>
            {" "}
            {rightArrow}{" "}
            </button>
        </div>

        <p className="text-slate-100 mb-2"> Advanced: </p>
        <div className="flex flex-row justify-between text-slate-100 h-32">
            <button className="w-10 h-full" onClick={AdvancedLeft}>
                {leftArrow}{" "}
            </button>{" "}

            <div className="flex flex-col items-center justify-between">
                <p className={jsAdvText}> {jsAdvanced[elAdv]} </p>{" "}
                <p className=" w-72 h-[2px] bg-slate-100"></p>
                <p
                    className={
                    jsAdvText
                    }
                >
                    {" "}
                    {jsAdvancedLevel[elAdv]}{" "}
                </p>{" "}
          
            </div>
            <button className="w-10 h-full" onClick={AdvancedRight}>
                {" "}
                {rightArrow}{" "}
            </button>{" "}
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(JSInfo);
