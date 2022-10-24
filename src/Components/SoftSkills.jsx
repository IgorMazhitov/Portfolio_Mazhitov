import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  SOFT_TYPE_BUT_HIDE, SOFT_TYPE_BUT_SHOW,
} from "../Redux/types";

const SoftSkills = (props) => {
  const dispatch = useDispatch();
  const { softSkills, button, text } =
    useSelector((state) => state.soft);
  const rightArrow = (
    <svg class="svg-icon w-10 h-10 fill-black" viewBox="0 0 20 20">
      <path
        fill="evenodd"
        d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
      ></path>
    </svg>
  );

  const leftArrow = (
    <svg class="svg-icon w-10 h-10 fill-black" viewBox="0 0 20 20">
      <path
        fill="evenodd"
        d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
      ></path>
    </svg>
  );

  const arr = [...Array(26)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  let phrase =
    "HELLO MY NAME IS IGOR LIVING IN ISTANBUL TURKEY I AM JUNIOR/MIDDLE FRONT-END DEVELOPER WITH FOLLOWING QUALITIES: ACCOUNTABILITY СREATIVITY COMMUNICABILITY FAST-LEARNING PUNCTUALITY PROBLEM-SOLVER";

  const typeWriter = () => {
    dispatch({type: SOFT_TYPE_BUT_HIDE})
    document.getElementById("text").innerHTML = "";
    clearTimeout()
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
        }

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

        console.log(el, phrase.length)
        if (el == phrase.length - 1) {

            setTimeout(() => {

                dispatch({type: SOFT_TYPE_BUT_SHOW})
                document.getElementById('text').innerHTML = ''

            }, time + 600)

        }
      }
    }
    console.log('end')
  };

  return (
    <div className={softSkills}>
      <div
        id="table"
        className=" w-full flex flex-col justify-start items-center pt-2 font-bold text-5xl"
      >
        <tr className="flex flex-row w-full justify-between">
          {" "}
          {arr.map((el, ind) =>
            ind < 6 ? (
              <td
                id={`${el}`}
                className={`${el} transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-16 h-16`}
              >
                {el}
              </td>
            ) : (
              ""
            )
          )}{" "}
        </tr>
        <tr className="flex flex-row w-full justify-between">
          {" "}
          {arr.map((el, ind) =>
            ind >= 6 && ind < 12 ? (
              <td
                id={`${el}`}
                className={`${el} transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-16 h-16`}
              >
                {el}
              </td>
            ) : (
              ""
            )
          )}{" "}
        </tr>
        <tr className="flex flex-row w-full justify-between">
          {" "}
          {arr.map((el, ind) =>
            ind >= 12 && ind < 18 ? (
              <td
                id={`${el}`}
                className={`${el} transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-16 h-16`}
              >
                {el}
              </td>
            ) : (
              ""
            )
          )}{" "}
        </tr>
        <tr className="flex flex-row w-full justify-between">
          {" "}
          {arr.map((el, ind) =>
            ind >= 18 && ind < 24 ? (
              <td
                id={`${el}`}
                className={`${el} transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-16 h-16`}
              >
                {el}
              </td>
            ) : (
              ""
            )
          )}{" "}
        </tr>
        <tr className="flex flex-row w-full justify-evenly">
          {" "}
          {arr.map((el, ind) =>
            ind >= 24 ? (
              <td
                id={`${el}`}
                className={`${el} transition-all bg-transparent duration-300 text-black flex flex-row justify-center items-center w-16 h-16`}
              >
                {el}
              </td>
            ) : (
              ""
            )
          )}{" "}
        </tr>
      </div>

      <div className="flex flex-col h-36 mt-1">

        <button
            className={button}
            onClick={() => typeWriter()}
        >
            : CLICK ME :
        </button>

        <div
            id="text"
            className={text}
        >
            {" "}
        </div>

      </div>

    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SoftSkills);
