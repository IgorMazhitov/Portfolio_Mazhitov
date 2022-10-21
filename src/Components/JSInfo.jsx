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

  const rightArrow = (
    <svg class="svg-icon w-10 h-10 fill-white" viewBox="0 0 20 20">
      <path
        fill="evenodd"
        d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
      ></path>
    </svg>
  );

  const leftArrow = (
    <svg class="svg-icon w-10 h-10 fill-white" viewBox="0 0 20 20">
      <path
        fill="evenodd"
        d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
      ></path>
    </svg>
  );

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
    <div className={props.elStyle}>
      <div className=" text-slate-100">
        <p> Basics: </p>

        <div className="flex flex-row items-center justify-between">
          {" "}
          <button className="w-10 h-full" onClick={BasicsLeft}>
            {" "}
            {leftArrow}{" "}
          </button>{" "}
          <p className={jsBasicText}> {jsBasic[el]} </p>{" "}
          <button className="w-10 h-full" onClick={BasicsRight}>
            {" "}
            {rightArrow}{" "}
          </button>{" "}
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          {" "}
          <p
            className={
              jsBasicText.replace("w-full", "w-36") +
              " py-2 uppercase border-t-2 border-slate-100"
            }
          >
            {" "}
            {jsBasicLevel[el]}{" "}
          </p>{" "}
        </div>
      </div>

      <div className=" text-slate-100 pt-1">
        <p> Advanced: </p>

        <div className="flex flex-row items-center justify-between">
          {" "}
          <button className="w-10 h-full" onClick={AdvancedLeft}>
            {" "}
            {leftArrow}{" "}
          </button>{" "}
          <p className={jsAdvText}> {jsAdvanced[elAdv]} </p>{" "}
          <button className="w-10 h-full" onClick={AdvancedRight}>
            {" "}
            {rightArrow}{" "}
          </button>{" "}
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          {" "}
          <p
            className={
              jsAdvText.replace("w-full", "w-36") +
              " py-2 uppercase border-t-2 border-slate-100"
            }
          >
            {" "}
            {jsAdvancedLevel[elAdv]}{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(JSInfo);
