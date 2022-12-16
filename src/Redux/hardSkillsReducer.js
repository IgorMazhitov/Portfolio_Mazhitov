import {
  CSS_INFO_HIDE_1,
  CSS_INFO_HIDE_2,
  CSS_INFO_SHOW_1,
  CSS_INFO_SHOW_2,
  C_ANIM_HIDE,
  C_ANIM_SHOW,
  H_ANIM_HIDE,
  H_ANIM_SHOW,
  JS_ADV_TEXT_ANIMATION_1,
  JS_ADV_TEXT_ANIMATION_1_L,
  JS_ADV_TEXT_ANIMATION_2,
  JS_ADV_TEXT_ANIMATION_2_L,
  JS_ADV_TEXT_ANIMATION_3,
  JS_ADV_TEXT_ANIMATION_3_L,
  JS_BASIC_TEXT_ANIMATION_1,
  JS_BASIC_TEXT_ANIMATION_1_L,
  JS_BASIC_TEXT_ANIMATION_2,
  JS_BASIC_TEXT_ANIMATION_2_L,
  JS_BASIC_TEXT_ANIMATION_3,
  JS_BASIC_TEXT_ANIMATION_3_L,
  JS_INFO_HIDE_1,
  JS_INFO_HIDE_2,
  JS_INFO_SHOW_1,
  JS_INFO_SHOW_2,
  LEFT_DOWN,
  LEFT_DOWN_STRIPES_HIDE,
  LEFT_DOWN_STRIPES_HIDE_2,
  LEFT_DOWN_STRIPES_SHOW,
  LEFT_DOWN_STRIPES_SHOW_2,
  L_ANIM_HIDE,
  L_ANIM_SHOW,
  MAIN_HOR,
  MAIN_HOR_HOVER_ON,
  MAIN_HOR_HOVER_OUT,
  MAIN_PAGE_ENTER,
  MAIN_PAGE_ENTER_2,
  MAIN_PAGE_EXIT,
  MAIN_PAGE_EXIT_2,
  M_ANIM_HIDE,
  M_ANIM_SHOW,
  REACT_INFO_HIDE_1,
  REACT_INFO_HIDE_2,
  REACT_INFO_HIDE_3,
  REACT_INFO_SHOW_1,
  REACT_INFO_SHOW_2,
  REACT_INFO_SHOW_3,
  S2_ANIM_HIDE,
  S2_ANIM_SHOW,
  S_ANIM_HIDE,
  S_ANIM_SHOW,
  T_ANIM_HIDE,
  T_ANIM_SHOW,
} from "./types";

const initialState = {
  MainPage: "h-screen w-screen overflow-hidden transition-all duration-700 overflow-hidden",
  mainHor:
    "absolute h-10 w-10 top-56 left-1/2 -translate-x-1/2 rotate-0 flex flex-row-reverse cursor-pointer z-10 transition-all duration-300",
  leftPart:
    "duration-300 absolute z-10 h-40 w-1/2 top-40 text-3xl text-slate-100 flex flex-col justify-evenly items-start bg-black transition-all translate-x-0 opacity-1",
  rightPart:
    "duration-300 absolute z-[2] h-40 w-1/2 top-40 right-0 text-xl md:text-3xl text-slate-100 flex flex-col justify-evenly items-end opacity-0 transition-all -translate-x-full",
  triggerHS:
    "absolute hover:rotate-0 h-10 w-10 duration-300 top-72 translate-y-3 left-1/4 -translate-x-1/2 flex flex-row-reverse cursor-pointer z-10 transition-all rotate-90",
  triggerSS:
    "absolute hidden h-10 w-10 duration-300 top-72 translate-y-3 left-3/4 -translate-x-1/2 flex flex-row-reverse cursor-pointer z-10 transition-all rotate-90 hover:rotate-180",
  hardSkills:
    "HARD_LEFT absolute bg-yellow-400 p-4 text-3xl transition-all duration-300 w-1/2 top-72 z-0 overflow-auto opacity-0",
  softSkills:
    "absolute bg-teal-400 text-3xl transition-all duration-300 flag w-1/2 h-0 top-72 right-0 z-0 overflow-hidden",
  reactInfoStyle:
    "REACT_CONT p-4 absolute top-12 translate-y-2 bg-black text-slate-100 transition-all duration-300 flag w-36 overflow-auto opacity-0",
  reactInfo: false,
  jsInfoStyle:
    "JS_CONT absolute p-4 overflow-auto transition-all duration-300 left-0 bg-black w-24 opacity-0",
  jsInfo: false,
  jsBasicText:
    "transition-all h-[45%] duration-75 w-full text-center flex justify-center items-center opacity-1 translate-x-0",
  jsAdvText:
    "transition-all h-[45%] duration-75 w-full text-center flex justify-center items-center opacity-1 translate-x-0",
  cssInfo: false,
  cssInfoStyle:
    "CSS_CONT absolute top-12 text-slate-100 p-4 bg-black transition-all translate-y-2 duration-300 right-0 w-[152px] overflow-auto opacity-0 whitespace-nowrap flex-nowrap",
  hStyle:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  tStyle:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  mStyle:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  lStyle:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  cStyle:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  s1Style:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  s2Style:
    "w-0 text-black overflow-hidden duration-300 bg-yellow-400 transition-all",
  stripes1:
    "stripe1 text-transparent whitespace-nowrap flex justify-center items-center font-bold transiliton-all overflow-hidden duration-300 w-0 bg-black hover:scale-2 hover:w-[40%] hover:text-yellow-400",
  stripes2:
    "stripe2 text-transparent whitespace-nowrap flex justify-center items-center font-bold transiliton-all overflow-hidden duration-300 w-0 bg-yellow-400 hover:w-[55%] hover:text-black",
  stripeV: "absolute top-0 left-0 bg-black duration-300 h-0 w-[2px] opacity-0",
  stripesCont: "STRIPE_COL absolute flex flex-col justify-start text-2xl w-0 bottom-0 left-1/2 py-auto",
};

export const hardSkillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_HOR:
      if (state.leftPart.match("opacity-0")) {
        return {
          ...state,
          triggerHS: state.triggerHS.replace(" hidden", ""),
          leftPart: state.leftPart
            .replace("translate-x-full", "")
            .replace("opacity-0", "opacity-1"),
          rightPart: state.rightPart
            .replace("bg-black", "")
            .replace("opacity-1", "opacity-0")
            .replace("translate-x-0", "-translate-x-full"),
          mainHor: state.mainHor.replace("rotate-180", "rotate-90"),
          hardSkills: state.hardSkills.replace(" hidden", ""),
          triggerSS: state.triggerSS + " hidden",
        };
      } else {
        document.getElementsByClassName("HARD_LEFT")[0].style.height = "0px";
        return {
          ...state,
          triggerHS: state.triggerHS + " hidden",
          leftPart: state.leftPart
            .replace("translate-x-0", "translate-x-full")
            .replace("opacity-1", "opacity-0"),
          rightPart:
            state.rightPart
              .replace("opacity-0", "opacity-1")
              .replace("-translate-x-full", "translate-x-0") + " bg-black",
          mainHor: state.mainHor.replace("rotate-0", "rotate-180"),
          hardSkills: state.hardSkills.replace("top-80", "top-72") + " hidden",
          triggerSS: state.triggerSS.replace(" hidden", ""),
        };
      }

    case MAIN_HOR_HOVER_ON:
      if (state.rightPart.match("bg-black")) {
        return {
          ...state,
          mainHor: state.mainHor.replace("rotate-180", "rotate-90"),
        };
      } else {
        return {
          ...state,
          mainHor: state.mainHor.replace("rotate-0", "rotate-90"),
        };
      }

    case MAIN_HOR_HOVER_OUT:
      if (
        state.mainHor.match("rotate-90") &&
        state.rightPart.match("opacity-0")
      ) {
        return {
          ...state,
          mainHor: state.mainHor.replace("rotate-90", "rotate-0"),
        };
      } else {
        return {
          ...state,
          mainHor: state.mainHor.replace("rotate-90", "rotate-180"),
        };
      }

    case LEFT_DOWN:
      if (
        document.getElementsByClassName("HARD_LEFT")[0].style.height === "0px"
      ) {
        document.getElementsByClassName("HARD_LEFT")[0].style.height =
          "calc(100% - 320px)";
        return {
          ...state,
          hardSkills: state.hardSkills
            .replace("top-72", "top-80")
            .replace(" overflow-hidden", "")
            .replace("opacity-0", "opacity-1"),
          stripeV: state.stripeV
            .replace("h-0", "h-full")
            .replace("opacity-0", "opacity-1"),
        };
      } else {
        document.getElementsByClassName("HARD_LEFT")[0].style.height = "0px";
        return {
          ...state,
          hardSkills:
            state.hardSkills
              .replace("top-80", "top-72")
              .replace("opacity-1", "opacity-0") + " overflow-hidden",
          stripeV: state.stripeV
            .replace("h-full", "h-0")
            .replace("opacity-1", "opacity-0"),
        };
      }

    case LEFT_DOWN_STRIPES_SHOW:
      return {
        ...state,
        stripes1: state.stripes1.replace("w-0", "w-[5%]"),
        stripes2: state.stripes2.replace("w-0", "w-[5%]"),
      };

    case LEFT_DOWN_STRIPES_SHOW_2:
      return {
        ...state,
        stripesCont: state.stripesCont.replace('w-0', 'w-1/2'),
      }

    case LEFT_DOWN_STRIPES_HIDE:
      return {
        ...state,
        stripes1: state.stripes1.replace("w-[5%]", "w-0"),
        stripes2: state.stripes2.replace("w-[5%]", "w-0"),
      };
    case LEFT_DOWN_STRIPES_HIDE_2:
      return {
        ...state,
        stripesCont: state.stripesCont.replace('w-1/2', 'w-0'),
      }

    case REACT_INFO_SHOW_1:
      document.getElementsByClassName("REACT_CONT")[0].style.height = 'calc(100vh - 408px)'
      return {
        ...state,
        reactInfo: true,
        reactInfoStyle: state.reactInfoStyle.replace("opacity-0", "opacity-50"),
      };

    case REACT_INFO_SHOW_2:
      return {
        ...state,
        reactInfoStyle: state.reactInfoStyle
          .replace("opacity-50", "opacity-1")
      };

    case REACT_INFO_SHOW_3:
      return {
        ...state,
        reactInfoStyle: state.reactInfoStyle.replace("w-36", "w-full"),
      };

    case REACT_INFO_HIDE_1:
      return {
        ...state,
        reactInfo: false,
        reactInfoStyle: state.reactInfoStyle.replace("w-full", "w-36"),
      };

    case REACT_INFO_HIDE_2:
      return {
        ...state,
        reactInfoStyle: state.reactInfoStyle
          .replace("opacity-1", "opacity-50")
      };
    case REACT_INFO_HIDE_3:
      document.getElementsByClassName("REACT_CONT")[0].style.height = '0px'
      return {
        ...state,
        reactInfoStyle: state.reactInfoStyle
          .replace("opacity-50", "opacity-0")
      };

    case JS_INFO_SHOW_1:
      document.getElementsByClassName("JS_CONT")[0].style.height = 'calc(100vh - 408px)'
      return {
        ...state,
        jsInfo: true,
        jsInfoStyle: state.jsInfoStyle
          .replace("opacity-0", "opacity-50")
          .replace("w-24", "w-full"),
      };

    case JS_INFO_SHOW_2:
      return {
        ...state,
        jsInfoStyle: state.jsInfoStyle
          .replace("opacity-50", "opacity-1"),
      };

    case JS_INFO_HIDE_1:
      document.getElementsByClassName("JS_CONT")[0].style.height = '4px'
      return {
        ...state,
        jsInfo: false,
        jsInfoStyle: state.jsInfoStyle
          .replace("h-screen", "h-1")
          .replace("opacity-1", "opacity-50"),
      };

    case JS_INFO_HIDE_2:
      document.getElementsByClassName("JS_CONT")[0].style.height = '0px'
      return {
        ...state,
        jsInfoStyle: state.jsInfoStyle
          .replace("w-full", "w-24")
          .replace("opacity-50", "opacity-0")
      };

    case JS_BASIC_TEXT_ANIMATION_1:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("translate-x-0", "translate-x-1/2")
          .replace("opacity-1", "opacity-50"),
      };

    case JS_BASIC_TEXT_ANIMATION_2:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("translate-x-1/2", "-translate-x-1/2")
          .replace("opacity-50", "opacity-0"),
      };

    case JS_BASIC_TEXT_ANIMATION_3:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("opacity-0", "opacity-1")
          .replace("-translate-x-1/2", "translate-x-0"),
      };

    case JS_BASIC_TEXT_ANIMATION_1_L:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("translate-x-0", "-translate-x-1/2")
          .replace("opacity-1", "opacity-50"),
      };

    case JS_BASIC_TEXT_ANIMATION_2_L:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("-translate-x-1/2", "translate-x-1/2")
          .replace("opacity-50", "opacity-0"),
      };

    case JS_BASIC_TEXT_ANIMATION_3_L:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("opacity-0", "opacity-1")
          .replace("translate-x-1/2", "translate-x-0"),
      };

    case JS_ADV_TEXT_ANIMATION_1:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("translate-x-0", "translate-x-1/2")
          .replace("opacity-1", "opacity-50"),
      };

    case JS_ADV_TEXT_ANIMATION_2:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("translate-x-1/2", "-translate-x-1/2")
          .replace("opacity-50", "opacity-0"),
      };

    case JS_ADV_TEXT_ANIMATION_3:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("opacity-0", "opacity-1")
          .replace("-translate-x-1/2", "translate-x-0"),
      };

    case JS_ADV_TEXT_ANIMATION_1_L:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("translate-x-0", "translate-x-1/2")
          .replace("opacity-1", "opacity-50"),
      };

    case JS_ADV_TEXT_ANIMATION_2_L:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("translate-x-1/2", "-translate-x-1/2")
          .replace("opacity-50", "opacity-0"),
      };

    case JS_ADV_TEXT_ANIMATION_3_L:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("opacity-0", "opacity-1")
          .replace("-translate-x-1/2", "translate-x-0"),
      };

    case CSS_INFO_SHOW_1:
      document.getElementsByClassName("CSS_CONT")[0].style.height = 'calc(100vh - 408px)'
      return {
        ...state,
        cssInfo: true,
        cssInfoStyle: state.cssInfoStyle
          .replace("opacity-0", "opacity-50"),
      };

    case CSS_INFO_SHOW_2:
      return {
        ...state,
        cssInfoStyle: state.cssInfoStyle
          .replace("w-[152px]", "w-full")
          .replace("opacity-50", "opacity-1"),
      };

    case CSS_INFO_HIDE_1:
      return {
        ...state,
        cssInfo: false,
        cssInfoStyle: state.cssInfoStyle
          .replace("opacity-1", "opacity-50")
          .replace("w-full", "w-[152px]"),
      };

    case CSS_INFO_HIDE_2:
      document.getElementsByClassName("CSS_CONT")[0].style.height = '0px'
      return {
        ...state,
        cssInfoStyle: state.cssInfoStyle
          .replace("opacity-50", "opacity-0"),
      };

    case H_ANIM_SHOW:
      return {
        ...state,
        hStyle: state.hStyle.replace("w-0", "w-[64px]"),
      };

    case H_ANIM_HIDE:
      return {
        ...state,
        hStyle: state.hStyle.replace("w-[64px]", "w-0"),
      };

    case T_ANIM_SHOW:
      return {
        ...state,
        tStyle: state.tStyle.replace("w-0", "w-[45px]"),
      };

    case T_ANIM_HIDE:
      return {
        ...state,
        tStyle: state.tStyle.replace("w-[45px]", "w-0"),
      };

    case M_ANIM_SHOW:
      return {
        ...state,
        mStyle: state.mStyle.replace("w-0", "w-[81px]"),
      };

    case M_ANIM_HIDE:
      return {
        ...state,
        mStyle: state.mStyle.replace("w-[81px]", "w-0"),
      };

    case L_ANIM_SHOW:
      return {
        ...state,
        lStyle: state.lStyle.replace("w-0", "w-[123px]"),
      };

    case L_ANIM_HIDE:
      return {
        ...state,
        lStyle: state.lStyle.replace("w-[123px]", "w-0"),
      };

    case C_ANIM_SHOW:
      return {
        ...state,
        cStyle: state.cStyle.replace("w-0", "w-[128px]"),
      };
    case C_ANIM_HIDE:
      return {
        ...state,
        cStyle: state.cStyle.replace("w-[128px]", "w-0"),
      };
    case S_ANIM_SHOW:
      return {
        ...state,
        s1Style: state.s1Style.replace("w-0", "w-[53px]"),
      };
    case S_ANIM_HIDE:
      return {
        ...state,
        s1Style: state.s1Style.replace("w-[53px]", "w-0"),
      };
    case S2_ANIM_SHOW:
      return {
        ...state,
        s2Style: state.s2Style.replace("w-0", "w-[79px]"),
      };
    case S2_ANIM_HIDE:
      return {
        ...state,
        s2Style: state.s2Style.replace("w-[79px]", "w-0"),
      };

    case MAIN_PAGE_EXIT:
      return {
        ...state,
        MainPage: state.MainPage + " -translate-x-full",
      };
    case MAIN_PAGE_EXIT_2:
      return {
        ...state,
        MainPage: state.MainPage.replace("-translate-x-full", ""),
      };

      case MAIN_PAGE_ENTER:
        return {
          ...state,
          MainPage: state.MainPage + " translate-x-full",
        };
      case MAIN_PAGE_ENTER_2:
        return {
          ...state,
          MainPage: state.MainPage.replace(" translate-x-full", ""),
        };
    default:
      return state;
  }
};
