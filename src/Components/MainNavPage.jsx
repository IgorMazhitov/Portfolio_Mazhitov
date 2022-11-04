import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  CSS_INFO_HIDE_1,
  CSS_INFO_HIDE_2,
  CSS_INFO_SHOW_1,
  CSS_INFO_SHOW_2,
  JS_INFO_HIDE_1,
  JS_INFO_HIDE_2,
  JS_INFO_SHOW_1,
  JS_INFO_SHOW_2,
  LEFT_DOWN,
  LEFT_DOWN_STRIPES_HIDE,
  LEFT_DOWN_STRIPES_SHOW,
  MAIN_HOR,
  MAIN_HOR_HOVER_ON,
  MAIN_HOR_HOVER_OUT,
  REACT_INFO_HIDE_1,
  REACT_INFO_HIDE_2,
  REACT_INFO_HIDE_3,
  REACT_INFO_SHOW_1,
  REACT_INFO_SHOW_2,
  REACT_INFO_SHOW_3,
  SOFT_SKILLS_HIDE,
  SOFT_SKILLS_SHOW,
  SOFT_TYPE_BUT_SHOW,
} from "../Redux/types";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const MainNavPage = (props) => {
  const dispatch = useDispatch();
  const mainHor = useSelector((state) => state.style.mainHor);

  const { leftPart, rightPart } = useSelector((state) => state.style);

  const { triggerHS, triggerSS } = useSelector(
    (state) => state.style
  );
  const { reactInfo, cssInfo, jsInfo } = useSelector((state) => state.style);

  const show = () => {
    if (jsInfo || reactInfo || cssInfo) {
      showHidehardSkills();

      setTimeout(() => {
        dispatch({ type: MAIN_HOR });
      }, 1500);
    } else if (
      document.getElementsByClassName("HARD_LEFT")[0].style.height !== "0px"
    ) {
      showHidehardSkills();

      setTimeout(() => {
        dispatch({ type: MAIN_HOR });
      }, 900);
    } else if (
      document.getElementsByClassName("SOFT_RIGHT")[0].style.height !== "0px"
    ) {
      showHideSoftSkills();

      setTimeout(() => {
        dispatch({ type: MAIN_HOR });
      }, 600);
    } else {
      dispatch({ type: MAIN_HOR });
    }
  };

  const mainHorHover = (pos) => {
    pos === "ON"
      ? dispatch({ type: MAIN_HOR_HOVER_ON })
      : dispatch({ type: MAIN_HOR_HOVER_OUT });
  };

  const showHidehardSkills = () => {
    if (reactInfo || jsInfo || cssInfo) {
      if (reactInfo) {
        showHideReact();
      }

      if (jsInfo) {
        showHideJS();
      }

      if (cssInfo) {
        showHideCSS();
      }

      setTimeout(() => {
        dispatch({ type: LEFT_DOWN_STRIPES_HIDE });
      }, 600);

      setTimeout(() => {
        dispatch({ type: LEFT_DOWN });
      }, 900);
    } else {
      if (
        document.getElementsByClassName("HARD_LEFT")[0].style.height === "0px"
      ) {
        dispatch({ type: LEFT_DOWN });

        setTimeout(() => {
          dispatch({ type: LEFT_DOWN_STRIPES_SHOW });
        }, 300);
      } else {
        dispatch({ type: LEFT_DOWN_STRIPES_HIDE });

        setTimeout(() => {
          dispatch({ type: LEFT_DOWN });
        }, 300);
      }
    }
  };

  const showHideReact = () => {
    if (jsInfo || cssInfo) {
      jsInfo ? showHideJS() : showHideCSS();

      setTimeout(() => {
        dispatch({ type: REACT_INFO_SHOW_1 });

        setTimeout(() => {
          dispatch({ type: REACT_INFO_SHOW_2 });
        }, 150);

        setTimeout(() => {
          dispatch({ type: REACT_INFO_SHOW_3 });
        }, 300);
      }, 600);
    } else {
      if (reactInfo === false) {
        dispatch({ type: REACT_INFO_SHOW_1 });

        setTimeout(() => {
          dispatch({ type: REACT_INFO_SHOW_2 });
        }, 75);

        setTimeout(() => {
          dispatch({ type: REACT_INFO_SHOW_3 });
        }, 150);
      } else {
        dispatch({ type: REACT_INFO_HIDE_1 });

        setTimeout(() => {
          dispatch({ type: REACT_INFO_HIDE_2 });
        }, 75);

        setTimeout(() => {
          dispatch({ type: REACT_INFO_HIDE_3 });
        }, 150);
      }
    }
  };

  const showHideJS = () => {
    if (reactInfo || cssInfo) {
      reactInfo ? showHideReact() : showHideCSS();

      setTimeout(() => {
        dispatch({ type: JS_INFO_SHOW_1 });

        setTimeout(() => {
          dispatch({ type: JS_INFO_SHOW_2 });
        }, 300);
      }, 600);
    } else {
      if (jsInfo) {
        dispatch({ type: JS_INFO_HIDE_1 });

        setTimeout(() => {
          dispatch({ type: JS_INFO_HIDE_2 });
        }, 300);
      } else {
        dispatch({ type: JS_INFO_SHOW_1 });

        setTimeout(() => {
          dispatch({ type: JS_INFO_SHOW_2 });
        }, 300);
      }
    }
  };

  const showHideCSS = () => {
    if (reactInfo || jsInfo) {
      reactInfo ? showHideReact() : showHideJS();

      setTimeout(() => {
        dispatch({ type: CSS_INFO_SHOW_1 });

        setTimeout(() => {
          dispatch({ type: CSS_INFO_SHOW_2 });
        }, 300);
      }, 600);
    } else {
      if (cssInfo) {
        dispatch({ type: CSS_INFO_HIDE_1 });

        setTimeout(() => {
          dispatch({ type: CSS_INFO_HIDE_2 });
        }, 300);
      } else {
        dispatch({ type: CSS_INFO_SHOW_1 });

        setTimeout(() => {
          dispatch({ type: CSS_INFO_SHOW_2 });
        }, 300);
      }
    }
  };

  const showHideSoftSkills = () => {
    if (
      document.getElementsByClassName("SOFT_RIGHT")[0].style.height === "0px"
    ) {
      dispatch({ type: SOFT_SKILLS_SHOW });
    } else {
      const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearTimeout(i);
        }
      }, 0);
      dispatch({ type: SOFT_TYPE_BUT_SHOW });
      dispatch({ type: SOFT_SKILLS_HIDE });
      document.getElementById("text").innerHTML = "";
    }
  };

  return (
    <div className=" h-full w-full">
      <div className={leftPart}>
        <p className="ml-4 font-bold text-xl md:text-3xl xl:text-5xl ">
          {" "}
          FRONT-END DEVELOPER{" "}
        </p>

        <p className="ml-4 font-bold text-lg md:text-2xl xl:text-3xl">
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
        <p className="mr-4 font-bold text-5xl"> IGOR MAZHITOV </p>

        <p className="mr-4 font-bold text-4xl"> ISTANBUL, TURKEY </p>
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
