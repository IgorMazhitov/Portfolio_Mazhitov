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
  LEFT_DOWN_HOVER_ON,
  LEFT_DOWN_HOVER_OUT,
  LEFT_DOWN_STRIPES_HIDE,
  LEFT_DOWN_STRIPES_SHOW,
  L_ANIM_HIDE,
  L_ANIM_SHOW,
  MAIN_HOR,
  MAIN_HOR_HOVER_ON,
  MAIN_HOR_HOVER_OUT,
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
  mainHor:
    "absolute h-10 w-10 top-56 left-1/2 -translate-x-1/2 flex flex-row-reverse cursor-pointer z-10 transition-all",
  leftPart:
    "z-10 absolute h-40 w-1/2 top-40 text-4xl text-slate-100 font-sans flex justify-evenly items-start flex-col bg-black transition-all",
  rightPart:
    "absolute h-40 w-1/2 top-40 right-0 text-4xl text-slate-100 fomt-sans flex flex-col justify-evenly items-end opacity-0 transition-all -translate-x-full",
  leftVert:
    "absolute h-10 w-10 top-72 translate-y-3 left-1/4 -translate-x-1/2 flex flex-row-reverse cursor-pointer z-10 transition-all rotate-90",
  leftDownPart:
    "absolute bg-yellow-400 p-4 text-3xl transition-all duration-300 flag w-1/2 h-0 top-72 z-0 overflow-hidden",
  leftDownPartStyle:
    "p-4 absolute top-12 translate-y-2 bg-black text-slate-100 transition-all duration-300 flag w-36 overflow-auto h-0 opacity-0",
  reactInfo: false,
  jsInfoStyle:
    "absolute p-4 overflow-hidden transition-all duration-300 left-0 bg-black w-24 h-0 opacity-0",
  jsInfo: false,
  jsBasicText:
    "transition-all duration-75 w-full text-center flex justify-center items-center",
  jsAdvText:
    "transition-all duration-75 w-full text-center h-20 flex justify-center items-center",
  cssInfo: false,
  cssInfoStyle:
    "absolute top-12 text-slate-100 p-4 bg-black transition-all translate-y-2 duration-300 right-0 w-[152px] overflow-hidden h-0 opacity-0",
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
  stripes1: "h-12 transiliton-all overflow-hidden duration-300 w-0 bg-black",
  stripes2:
    " h-14 transiliton-all overflow-hidden duration-300 w-0 bg-yellow-400",
  stripes3: " h-11 transiliton-all overflow-hidden duration-300 w-0 bg-black",
  stripes4:
    " h-[10%] transiliton-all overflow-hidden duration-300 w-0 bg-yellow-400",
  stripes5:
    " h-[10%] transiliton-all overflow-hidden duration-300 w-0 bg-black",
  stripes6:
    " h-[10%] transiliton-all overflow-hidden duration-300 w-0 bg-yellow-400",
};

export const styleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_HOR:
      if (state.leftPart.match("opacity-0")) {
        return {
          ...state,
          leftVert: state.leftVert.replace(" hidden", ""),
          leftPart: state.leftPart.replace(
            /( translate-x-full)|(opacity-0)/g,
            ""
          ),
          rightPart:
            state.rightPart.replace(/(bg-black)/g, "") +
            "opacity-0 -translate-x-full",
          mainHor: state.mainHor.replace(/( rotate-180)|( rotate-90)/g, ""),
          leftDownPart:
            state.leftDownPart
              .replace(" hidden", "")
              .split("flag")
              .splice(0, 1)
              .join("") + "flag h-0 top-72 z-0 w-1/2 overflow-hidden",
        };
      } else {
        return {
          ...state,
          leftVert: state.leftVert + " hidden",
          leftPart: state.leftPart + "translate-x-full opacity-0",
          rightPart:
            state.rightPart.replace(/(opacity-0)|(-translate-x-full)/g, "") +
            "bg-black",
          mainHor: state.mainHor.replace(/( rotate-90)/g, "") + " rotate-180",
          leftDownPart:
            state.leftDownPart.split("flag").splice(0, 1).join("") +
            "flag h-0 top-72 z-0 w-1/2 overflow-hidden hidden",
        };
      }

    case MAIN_HOR_HOVER_ON:
      if (state.rightPart.match("bg-black")) {
        return {
          ...state,
          mainHor: state.mainHor.replace(/(rotate-180)/g, "rotate-90"),
        };
      } else {
        if (!state.mainHor.match("rotate-90")) {
          return {
            ...state,
            mainHor: state.mainHor + " rotate-90",
          };
        } else {
          return state;
        }
      }

    case MAIN_HOR_HOVER_OUT:
      if (state.rightPart.match("bg-black")) {
        return {
          ...state,
          mainHor: state.mainHor.replace(/(rotate-90)/g, "rotate-180"),
        };
      } else {
        if (state.mainHor.match("rotate-90")) {
          return {
            ...state,
            mainHor: state.mainHor.replace(/( rotate-90)/g, ""),
          };
        } else if (state.mainHor.match("rotate-180")) {
          return {
            ...state,
            mainHor: state.mainHor.replace(/(rotate-180)/g, "rotate-90"),
          };
        } else {
          return state;
        }
      }

    case LEFT_DOWN_HOVER_ON:
      return {
        ...state,
        leftVert: state.leftVert.replace(/( rotate-90)/g, ""),
      };

    case LEFT_DOWN_HOVER_OUT:
      return {
        ...state,
        leftVert: state.leftVert + " rotate-90",
      };

    case LEFT_DOWN:
      if (state.leftDownPart.match("h-0")) {
        return {
          ...state,
          leftDownPart:
            state.leftDownPart.split("flag").splice(0, 1).join("") +
            "flag top-80 w-1/2 h-full",
        };
      } else {
        return {
          ...state,
          leftDownPart:
            state.leftDownPart.split("flag").splice(0, 1).join("") +
            "flag h-0 top-72 z-0 w-1/2 overflow-hidden",
        };
      }

    case LEFT_DOWN_STRIPES_SHOW:
      return {
        ...state,
        stripes1: state.stripes1.replace("w-0", "w-1/3"),
        stripes2: state.stripes2.replace("w-0", "w-1/4"),
        stripes3: state.stripes3.replace("w-0", "w-2/3"),
        stripes4: state.stripes4.replace("w-0", "w-[40%]"),
        stripes5: state.stripes5.replace("w-0", "w-[55%]"),
        stripes6: state.stripes6.replace("w-0", "w-[70%]"),
      };

    case LEFT_DOWN_STRIPES_HIDE:
      return {
        ...state,
        stripes1: state.stripes1.replace("w-1/3", "w-0"),
        stripes2: state.stripes2.replace("w-1/4", "w-0"),
        stripes3: state.stripes3.replace("w-2/3", "w-0"),
        stripes4: state.stripes4.replace("w-[40%]", "w-0"),
        stripes5: state.stripes5.replace("w-[55%]", "w-0"),
        stripes6: state.stripes6.replace("w-[70%]", "w-0"),
      };

    case REACT_INFO_SHOW_1:
      return {
        ...state,
        reactInfo: true,
        leftDownPartStyle: state.leftDownPartStyle
          .replace("h-0", "h-1/2")
          .replace("opacity-0", "opacity-50"),
      };

    case REACT_INFO_SHOW_2:
      return {
        ...state,
        leftDownPartStyle: state.leftDownPartStyle
          .replace("opacity-50", "opacity-1")
          .replace("h-1/2", "h-screen"),
      };

    case REACT_INFO_SHOW_3:
      return {
        ...state,
        leftDownPartStyle: state.leftDownPartStyle.replace("w-36", "w-full"),
      };

    case REACT_INFO_HIDE_1:
      return {
        ...state,
        reactInfo: false,
        leftDownPartStyle: state.leftDownPartStyle.replace("w-full", "w-36"),
      };

    case REACT_INFO_HIDE_2:
      return {
        ...state,
        leftDownPartStyle: state.leftDownPartStyle
          .replace("opacity-1", "opacity-50")
          .replace("h-screen", "h-1/2"),
      };
    case REACT_INFO_HIDE_3:
      return {
        ...state,
        leftDownPartStyle: state.leftDownPartStyle
          .replace("opacity-50", "opacity-0")
          .replace("h-1/2", "h-0"),
      };

    case JS_INFO_SHOW_1:
      return {
        ...state,
        jsInfo: true,
        jsInfoStyle: state.jsInfoStyle
          .replace(" h-0", " h-1")
          .replace("opacity-0", "opacity-50")
          .replace("w-24", "w-full"),
      };

    case JS_INFO_SHOW_2:
      return {
        ...state,
        jsInfoStyle: state.jsInfoStyle
          .replace("h-1", "h-screen")
          .replace("opacity-50", "opacity-1"),
      };

    case JS_INFO_HIDE_1:
      return {
        ...state,
        jsInfo: false,
        jsInfoStyle: state.jsInfoStyle
          .replace("h-screen", "h-1")
          .replace("opacity-1", "opacity-50"),
      };

    case JS_INFO_HIDE_2:
      return {
        ...state,
        jsInfoStyle: state.jsInfoStyle
          .replace("w-full", "w-24")
          .replace("opacity-50", "opacity-0")
          .replace("h-1", "h-0"),
      };

    case JS_BASIC_TEXT_ANIMATION_1:
      return {
        ...state,
        jsBasicText: state.jsBasicText + " translate-x-1/2 opacity-0",
      };

    case JS_BASIC_TEXT_ANIMATION_2:
      return {
        ...state,
        jsBasicText: state.jsBasicText.replace(
          "translate-x-1/2",
          "-translate-x-1/2"
        ),
      };

    case JS_BASIC_TEXT_ANIMATION_3:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("opacity-0", "opacity-1")
          .replace(" -translate-x-1/2", ""),
      };

    case JS_BASIC_TEXT_ANIMATION_1_L:
      return {
        ...state,
        jsBasicText: state.jsBasicText + " -translate-x-1/2 opacity-0",
      };

    case JS_BASIC_TEXT_ANIMATION_2_L:
      return {
        ...state,
        jsBasicText: state.jsBasicText.replace(
          "-translate-x-1/2",
          "translate-x-1/2"
        ),
      };

    case JS_BASIC_TEXT_ANIMATION_3_L:
      return {
        ...state,
        jsBasicText: state.jsBasicText
          .replace("opacity-0", "opacity-1")
          .replace(" translate-x-1/2", ""),
      };

    case JS_ADV_TEXT_ANIMATION_1:
      return {
        ...state,
        jsAdvText: state.jsAdvText + " translate-x-1/2 opacity-0",
      };

    case JS_ADV_TEXT_ANIMATION_2:
      return {
        ...state,
        jsAdvText: state.jsAdvText.replace(
          "translate-x-1/2",
          "-translate-x-1/2"
        ),
      };

    case JS_ADV_TEXT_ANIMATION_3:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("opacity-0", "opacity-1")
          .replace(" -translate-x-1/2", ""),
      };

    case JS_ADV_TEXT_ANIMATION_1_L:
      return {
        ...state,
        jsAdvText: state.jsAdvText + " translate-x-1/2 opacity-0",
      };

    case JS_ADV_TEXT_ANIMATION_2_L:
      return {
        ...state,
        jsAdvText: state.jsAdvText.replace(
          "translate-x-1/2",
          "-translate-x-1/2"
        ),
      };

    case JS_ADV_TEXT_ANIMATION_3_L:
      return {
        ...state,
        jsAdvText: state.jsAdvText
          .replace("opacity-0", "opacity-1")
          .replace(" -translate-x-1/2", ""),
      };

    case CSS_INFO_SHOW_1:
      return {
        ...state,
        cssInfo: true,
        cssInfoStyle: state.cssInfoStyle
          .replace("h-0", "h-screen")
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
      return {
        ...state,
        cssInfoStyle: state.cssInfoStyle
          .replace("h-screen", "h-0")
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
    default:
      return state;
  }
};
