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
  LEFT_DOWN_HOVER_ON,
  LEFT_DOWN_HOVER_OUT,
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
} from "../Redux/types";
import CssInfo from "./CssInfo";
import JSInfo from "./JSInfo";
import ReactInfo from "./ReactInfo";

const MainNavPage = (props) => {
  const dispatch = useDispatch();
  const mainHor = useSelector((state) => state.style.mainHor);
  const rightPart = useSelector((state) => state.style.rightPart);
  const leftPart = useSelector((state) => state.style.leftPart);
  const leftVert = useSelector((state) => state.style.leftVert);
  const leftDown = useSelector((state) => state.style.leftDownPart);
  const reactInfo = useSelector((state) => state.style.reactInfo);
  const jsInfo = useSelector((state) => state.style.jsInfo);
  const reactInfoStyle = useSelector((state) => state.style.leftDownPartStyle);
  const JSStyle = useSelector((state) => state.style.jsInfoStyle);
  const cssInfo = useSelector((state) => state.style.cssInfo);
  const cssInfoStyle = useSelector((state) => state.style.cssInfoStyle);
  const {stripes1, stripes2, stripes3, stripes4, stripes5, stripes6} = useSelector(state => state.style)

  const show = () => {
    dispatch({ type: MAIN_HOR });
  };

  const mainHorHover = (pos) => {
    pos === "ON"
      ? dispatch({ type: MAIN_HOR_HOVER_ON })
      : dispatch({ type: MAIN_HOR_HOVER_OUT });
  };

  const leftDownHover = (pos) => {
    pos === "ON"
      ? dispatch({ type: LEFT_DOWN_HOVER_ON })
      : dispatch({ type: LEFT_DOWN_HOVER_OUT });
  };

  const showHideLeftDown = () => {
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
        dispatch({type: LEFT_DOWN_STRIPES_HIDE})
      }, 600)

      setTimeout(() => {
        dispatch({ type: LEFT_DOWN });
      }, 900);
    } else {

        if (leftDown.match('h-0')) {

            dispatch({ type: LEFT_DOWN });

            setTimeout(() => {

                dispatch({type: LEFT_DOWN_STRIPES_SHOW})

            }, 300)

        } else {

            dispatch({type: LEFT_DOWN_STRIPES_HIDE})

            setTimeout(() => {

                dispatch({type: LEFT_DOWN})

            }, 300)  

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

  return (
    <div className=" h-full w-full">
      <div className={leftPart}>
        <p className="ml-4"> FRONT-END DEVELOPER </p>

        <p className="ml-4"> REACT JS HTML CSS </p>
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
        <p className="mr-4"> IGOR MAZHITOV </p>

        <p className="mr-4"> ISTANBUL, TURKEY </p>
      </div>

      <div className={leftDown}>
        <div className="flex flex-row justify-between items-center w-full h-20 font-sans font-bold relative">
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

        <div className="absolute flex flex-col justify-start left-full top-0 w-full h-screen pt-10 -z-[1]">

            <div className={stripes1}></div>
            <div className={stripes2}></div>
            <div className={stripes3}></div>
            <div className={stripes4}></div>
            <div className={stripes5}></div>
            <div className={stripes6}></div>

        </div>



      </div>

      <div
        className={leftVert}
        onMouseEnter={() => leftDownHover("ON")}
        onMouseLeave={() => leftDownHover("OUT")}
        onClick={() => showHideLeftDown()}
      >
        <div className="h-full w-1/2 bg-black"></div>
        <div className="h-full w-1/2 bg-yellow-400"></div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainNavPage);
