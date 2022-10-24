import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  C_ANIM_HIDE,
  C_ANIM_SHOW,
  H_ANIM_HIDE,
  H_ANIM_SHOW,
  L_ANIM_HIDE,
  L_ANIM_SHOW,
  M_ANIM_HIDE,
  M_ANIM_SHOW,
  S2_ANIM_HIDE,
  S2_ANIM_SHOW,
  S_ANIM_HIDE,
  S_ANIM_SHOW,
  T_ANIM_HIDE,
  T_ANIM_SHOW,
} from "../Redux/types";

const CssInfo = (props) => {
  const dispatch = useDispatch();
  const hStyle = useSelector((state) => state.style.hStyle);
  const tStyle = useSelector((state) => state.style.tStyle);
  const mStyle = useSelector((state) => state.style.mStyle);
  const lStyle = useSelector((state) => state.style.lStyle);
  const cStyle = useSelector((state) => state.style.cStyle);
  const s1Style = useSelector((state) => state.style.s1Style);
  const s2Style = useSelector((state) => state.style.s2Style);

  return (
    <div className={props.elStyle}>
      <div className="whitespace-nowrap flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: H_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: H_ANIM_HIDE })}
              >
                {" "}
                H{" "}
              </p>{" "}
              <p className={hStyle}> yper </p>{" "}
            </div>
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: T_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: T_ANIM_HIDE })}
              >
                T
              </p>
              <p className={tStyle}> ext </p>
            </div>
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: M_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: M_ANIM_HIDE })}
              >
                M
              </p>
              <p className={mStyle}> arkup </p>
            </div>
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: L_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: L_ANIM_HIDE })}
              >
                L
              </p>
              <p className={lStyle}> anguage </p>
            </div>
          </div>

          <p> :hover </p>
        </div>
        <div className="text-center whitespace-nowrap">
          <p> Basics </p> 
          <p> Forms and Validations </p>
        </div>
        <p className="pt-2 border-b-2 pb-2"> MIDDLE </p>
      </div>

      <div className="pt-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: C_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: C_ANIM_HIDE })}
              >
                {" "}
                C{" "}
              </p>{" "}
              <p className={cStyle}> ascading </p>{" "}
            </div>
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: S_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: S_ANIM_HIDE })}
              >
                S
              </p>
              <p className={s1Style}> tyle </p>
            </div>
            <div className="flex flex-row">
              <p
                className="cursor-pointer"
                onMouseEnter={() => dispatch({ type: S2_ANIM_SHOW })}
                onMouseLeave={() => dispatch({ type: S2_ANIM_HIDE })}
              >
                S
              </p>
              <p className={s2Style}> heets </p>
            </div>
          </div>

          <p> :hover </p>
        </div>
        <div className="text-center">
          {" "}
          <p> Sass/SCSS </p> <p> Tailwind </p>{" "}
        </div>
        <p> MIDDLE </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(CssInfo);
