const {
  SOFT_SKILLS_SHOW,
  SOFT_SKILLS_HIDE,
  SOFT_TYPE_BUT_SHOW,
  SOFT_TYPE_BUT_HIDE,
  SOFT_TYPE_HOVER_ON,
  SOFT_TYPE_HOVER_ON_2,
  SOFT_TYPE_HOVER_OUT,
  SOFT_TYPE_HOVER_OUT_2,
  SOFT_TEXT_ANIM,
  SOFT_TEXT_ANIM_END,
} = require("./types");

const initialState = {
  softSkills:
    "SOFT_RIGHT flex flex-col justify-center items-between absolute bg-teal-400 text-3xl transition-all duration-300 w-1/2 opacity-0 top-72 right-0 z-0 overflow-hidden",
  soft1:
    "duration-300 delay-300 text-center ml-[1px] relative right-0 bg-black overflow-hidden h-10 w-0 text-yellow-400",
  soft2:
    "duration-300 absolute right-0 bg-black m-2 overflow-hidden h-10 w-0 text-yellow-400",
  soft3:
    "duration-300 absolute right-0 bg-black m-2 overflow-hidden h-10 w-0 text-yellow-400",
  soft4:
    "duration-300 absolute right-0 bg-black m-2 overflow-hidden h-10 w-0 text-yellow-400",
  soft5:
    "duration-300 absolute right-0 bg-black m-2 overflow-hidden h-10 w-0 text-yellow-400",
  soft6:
    "duration-300 absolute right-0 bg-black m-2 overflow-hidden h-10 w-0 text-yellow-400",
  soft7:
    "duration-300 absolute right-0 bg-black m-2 overflow-hidden h-10 w-0 text-yellow-400",
  button:
    "TYPE_BUT cursor-pointer flex justify-center items-center transition-all bg-yellow-400 text-black font-bold overflow-hidden",
  text: "transition-all text-yellow-400 text-4xl font-bold flex flex-row justify-center items-center w-full h-3/4 bg-black z-[1]",
  bgButtonL:
    "BG_BUT opacity-0 absolute transition-all duration-300 bg-black w-[3px] translate-y-0 h-11 left-0 -z-10",
  bgButtonR:
    "BG_BUT opacity-0 absolute transition-all duration-300 bg-black w-[3px] translate-y-0 h-11 right-0 -z-10",
};

export const softSkillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOFT_SKILLS_SHOW:
      document.getElementsByClassName("SOFT_RIGHT")[0].style.height =
        "calc(100% - 320px)";

      return {
        ...state,
        softSkills:
          state.softSkills
            .replace("top-72", "top-80")
            .replace("opacity-0", "opacity-1")
            .replace("overflow-hidden", "overflow") + " p-4",
        soft1: state.soft1.replace("w-0", "w-full"),
      };

    case SOFT_SKILLS_HIDE:
      document.getElementsByClassName("SOFT_RIGHT")[0].style.height = "0";
      document.getElementsByClassName("TEXT_BG")[0].className = document
        .getElementsByClassName("TEXT_BG")[0]
        .className.replace("opacity-1", "opacity-0");
        document.getElementsByClassName("TEXT_BG_2")[0].className = document
        .getElementsByClassName("TEXT_BG_2")[0]
        .className.replace("opacity-1", "opacity-0");
        document.getElementsByClassName("TEXT_BG_3")[0].className = document
        .getElementsByClassName("TEXT_BG_3")[0]
        .className.replace("opacity-1", "opacity-0");
      return {
        ...state,
        softSkills: state.softSkills
          .replace("top-80", "top-72")
          .replace(" p-4", "")
          .replace("opacity-1", "opacity-0")
          .replace("overflow", "overflow-hidden"),
        soft1: state.soft1.replace("w-full", "w-0"),
      };

    case SOFT_TYPE_BUT_SHOW:
      document.getElementsByClassName("TYPE_BUT")[0].style.height = "25%";
      document.getElementsByClassName("TEXT_CONTAINER")[0].style.padding =
        "0px";
      const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearTimeout(i);
        }
      }, 0);
      return {
        ...state,
        text: state.text.replace("h-full", "h-3/4"),
      };
    case SOFT_TYPE_BUT_HIDE:
      document.getElementsByClassName("TYPE_BUT")[0].style.height = "0px";
      return {
        ...state,
        text: state.text.replace("h-3/4", "h-full"),
      };
    case SOFT_TYPE_HOVER_ON:
      document.getElementsByClassName("TYPE_BUT")[0].style.width =
        "calc(100% - 6px)";
      document.getElementsByClassName("TYPE_BUT")[0].style.height =
        "calc(25% - 6px)";
      return {
        ...state,
        bgButtonL: state.bgButtonL
          .replace("translate-y-0", "-translate-y-[94%]")
          .replace("opacity-0", "opacity-1"),
        bgButtonR: state.bgButtonR
          .replace("translate-y-0", "-translate-y-[94%]")
          .replace("opacity-0", "opacity-1"),
      };

    case SOFT_TYPE_HOVER_ON_2:
      return {
        ...state,
        bgButtonL: state.bgButtonL.replace("w-[3px]", "w-[50%]"),
        bgButtonR: state.bgButtonR.replace("w-[3px]", "w-[50%]"),
      };

    case SOFT_TYPE_HOVER_OUT:
      if (
        document.getElementsByClassName("TYPE_BUT")[0].style.height === "0px"
      ) {
        return state;
      } else {
        return {
          ...state,
          bgButtonL: state.bgButtonL.replace("w-[50%]", "w-[3px]"),
          bgButtonR: state.bgButtonR.replace("w-[50%]", "w-[3px]"),
        };
      }

    case SOFT_TYPE_HOVER_OUT_2:
      document.getElementsByClassName("TYPE_BUT")[0].style.width = "100%";
      if (
        document.getElementsByClassName("TYPE_BUT")[0].style.height === "0px"
      ) {
        return {
          ...state,
          bgButtonL: state.bgButtonL.replace("opacity-1", "opacity-0"),
          bgButtonR: state.bgButtonR.replace("opacity-1", "opacity-0"),
        };
      } else {
        document.getElementsByClassName("TYPE_BUT")[0].style.height =
          "calc(25%)";
        return {
          ...state,
          bgButtonL: state.bgButtonL
            .replace("-translate-y-[94%]", "translate-y-0")
            .replace("opacity-0", "opacity-1"),

          bgButtonR: state.bgButtonR
            .replace("-translate-y-[94%]", "translate-y-0")
            .replace("opacity-0", "opacity-1"),
        };
      }

    case SOFT_TEXT_ANIM:
      document.getElementsByClassName("TEXT_BG")[0].className = document
        .getElementsByClassName("TEXT_BG")[0]
        .className.replace("opacity-0", "opacity-1");
        document.getElementsByClassName("TEXT_BG_2")[0].className = document
        .getElementsByClassName("TEXT_BG_2")[0]
        .className.replace("opacity-0", "opacity-1");document.getElementsByClassName("TEXT_BG_3")[0].className = document
        .getElementsByClassName("TEXT_BG_3")[0]
        .className.replace("opacity-0", "opacity-1");
      document.getElementsByClassName("TEXT_CONTAINER")[0].style.padding =
        "6px";
      return state;
    case SOFT_TEXT_ANIM_END:
      document.getElementsByClassName("TEXT_CONTAINER")[0].style.padding =
        "0px";
      return state;
    default:
      return state;
  }
};
