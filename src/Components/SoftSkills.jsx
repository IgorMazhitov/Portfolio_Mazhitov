import { clear } from "@testing-library/user-event/dist/clear";
import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  SOFT_TEXT_ANIM,
  SOFT_TEXT_ANIM_END,
  SOFT_TYPE_BUT_HIDE,
  SOFT_TYPE_BUT_SHOW,
  SOFT_TYPE_HOVER_ON,
  SOFT_TYPE_HOVER_ON_2,
  SOFT_TYPE_HOVER_OUT,
  SOFT_TYPE_HOVER_OUT_2,
} from "../Redux/types";

const SoftSkills = (props) => {
  const dispatch = useDispatch();
  const { softSkills, button, text, bgButtonL, bgButtonR } = useSelector(
    (state) => state.soft
  );

  const arr = [...Array(26)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  let phrase =
    "HELLO MY NAME IS IGOR LIVING IN ISTANBUL TURKEY I AM JUNIOR/MIDDLE FRONT-END DEVELOPER WITH FOLLOWING QUALITIES: ACCOUNTABILITY СREATIVITY COMMUNICABILITY FAST-LEARNING PUNCTUALITY PROBLEM-SOLVER";

  const typeWriter = () => {
    let rot = 10;
    dispatch({ type: SOFT_TEXT_ANIM });
    setInterval(() => {
      rot += 10;
      document.getElementsByClassName("TEXT_BG")[0].style.rotate = `${rot}deg`;
      document.getElementsByClassName(
        "TEXT_BG_2"
      )[0].style.rotate = `${rot}deg`;
      document.getElementsByClassName(
        "TEXT_BG_3"
      )[0].style.rotate = `${rot}deg`;
    }, 100);
    dispatch({ type: SOFT_TYPE_BUT_HIDE });
    document.getElementById("text").innerHTML = "";
    clearTimeout();
    if (document.getElementById("table")) {
      let time = 150;

      let inter = {};

      for (let i = 0; i < phrase.length; i++) {
        inter = {
          ...inter,
          [i]: phrase[i],
        };
      }

      for (let el in inter) {
        if (inter[el] === " ") {
          setTimeout(() => {
            document.getElementById("text").innerHTML = "";
          }, time + 300);

          time += 300;
        } else {
          let alph = document.getElementById(inter[el]);
          setTimeout(() => {
            document.getElementById("text").innerHTML += inter[el];
            alph.className = alph.className
              .replace("bg-transparent", "bg-black")
              .replace("text-black", "text-teal-400");
          }, time);

          time += 150;

          setTimeout(() => {
            alph.className = alph.className
              .replace("text-teal-400", "text-black")
              .replace("bg-black", "bg-transparent");
          }, time + 300);

          if (el == phrase.length - 1) {
            setTimeout(() => {
              dispatch({ type: SOFT_TYPE_BUT_SHOW });
              document.getElementById("text").innerHTML = "";
              document.getElementsByClassName("TEXT_BG")[0].className = document
                .getElementsByClassName("TEXT_BG")[0]
                .className.replace("opacity-1", "opacity-0");
              document.getElementsByClassName("TEXT_BG_2")[0].className =
                document
                  .getElementsByClassName("TEXT_BG_2")[0]
                  .className.replace("opacity-1", "opacity-0");
              document.getElementsByClassName("TEXT_BG_3")[0].className =
                document
                  .getElementsByClassName("TEXT_BG_3")[0]
                  .className.replace("opacity-1", "opacity-0");
            }, time + 600);
          }
        }
      }
    }
  };

  if (document.getElementById("table")) {
    let clearAlpha = document.getElementById("table").childNodes[0].childNodes;

    for (let i = 0; i < clearAlpha.length; i++) {
      for (let j = 0; j < clearAlpha[i].childNodes.length; j++) {
        if (
          clearAlpha[i].childNodes[j].className &&
          clearAlpha[i].childNodes[j].className.match("bg-black")
        ) {
          clearAlpha[i].childNodes[j].className = clearAlpha[i].childNodes[
            j
          ].className
            .replace("bg-black", "bg-transparent")
            .replace("text-teal-400", "text-black");
        }
      }
    }
  }

  const typeHover = (status) => {
    if (status === "ON") {
      dispatch({ type: SOFT_TYPE_HOVER_ON });

      setTimeout(() => {
        dispatch({ type: SOFT_TYPE_HOVER_ON_2 });
      }, 300);
    } else {
      dispatch({ type: SOFT_TYPE_HOVER_OUT });

      setTimeout(() => {
        dispatch({ type: SOFT_TYPE_HOVER_OUT_2 });
      }, 300);
    }
  };


  return (
    <div className={softSkills} style={{ height: 0 + "px" }}>
      <table
        id="table"
        className=" w-full flex flex-col justify-start items-center pt-2 font-bold text-5xl"
      >
        <tbody>
          <tr className="flex flex-row w-full justify-between mb-1">
            {arr.map((el, ind) =>
              ind < 6 ? (
                <td
                  id={`${el}`}
                  className={`${el} mx-0 md:mx-1 lg:mx-4 transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-14 h-14`}
                >
                  {el}
                </td>
              ) : (
                <td className="hidden"></td>
              )
            )}
          </tr>
          <tr className="flex flex-row w-full justify-between mb-1">
            {arr.map((el, ind) =>
              ind >= 6 && ind < 12 ? (
                <td
                  id={`${el}`}
                  className={`${el} mx-0 md:mx-1 lg:mx-4 transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-14 h-14`}
                >
                  {el}
                </td>
              ) : (
                <td className="hidden"></td>
              )
            )}
          </tr>
          <tr className="flex flex-row w-full justify-between mb-1">
            {arr.map((el, ind) =>
              ind >= 12 && ind < 18 ? (
                <td
                  id={`${el}`}
                  key = {`${el}`}
                  className={`${el} mx-0 md:mx-1 lg:mx-4 transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-14 h-14`}
                >
                  {el}
                </td>
              ) : (
                <td className="hidden"></td>
              )
            )}
          </tr>
          <tr className="flex flex-row w-full justify-between mb-1">
            {arr.map((el, ind) =>
              ind >= 18 && ind < 24 ? (
                <td
                  id={`${el}`}
                  className={`${el} mx-0 md:mx-1 lg:mx-4 transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-14 h-14`}
                >
                  {el}
                </td>
              ) : (
                <td className="hidden"></td>
              )
            )}
          </tr>
          <tr className="flex flex-row w-full justify-evenly mb-1">
            {arr.map((el, ind) =>
              ind >= 24 ? (
                <td
                  id={`${el}`}
                  className={`${el} mx-0 md:mx-1 lg:mx-4 transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-14 h-14`}
                >
                  {el}
                </td>
              ) : (
                <td className="hidden"></td>
              )
            )}
          </tr>
        </tbody>
      </table>

      <div className="TEXT_CONTAINER box-border transition-all duration-300 relative flex flex-col justify-center items-center bottom-0 left-1/2 -translate-x-1/2 h-36 overflow-hidden z-0">
        <div
          className={button}
          style={{ width: 100 + "%", height: 35 + "%" }}
          onClick={() => typeWriter()}
          onMouseEnter={() => typeHover("ON")}
          onMouseLeave={() => typeHover("OUT")}
        >
          : CLICK ME :
        </div>
        <div className={bgButtonL}></div>
        <div className={bgButtonR}></div>
        <div id="text" className={text}></div>
        <div className="TEXT_BG -z-[10] opacity-0 absolute transition-all duration-[600] h-[140%] w-[140%] bg-teal-400"></div>
        <div className="TEXT_BG_2 -z-[10] opacity-1 absolute -translate-y-full transition-all duration-[600] h-[140%] w-[140%] bg-yellow-400"></div>
        <div className="TEXT_BG_3 -z-[10] opacity-1 absolute translate-y-full transition-all duration-[600] h-[140%] w-[140%] bg-yellow-400"></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SoftSkills);
