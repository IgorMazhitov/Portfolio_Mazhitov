const {
  SOFT_SKILLS_SHOW,
  SOFT_SKILLS_HIDE,
  SOFT_TYPE_BUT_SHOW,
  SOFT_TYPE_BUT_HIDE,
} = require("./types");

const initialState = {
  softSkills:
    " flex flex-col absolute bg-teal-400 text-3xl transition-all duration-300 flag w-1/2 h-0 opacity-0 top-72 right-0 z-0 overflow-hidden",
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
  button: "transition-all bg-yellow-400 text-black font-bold h-1/2 overflow-hidden",
  text: "transition-all text-yellow-400 text-6xl font-bold flex flex-row justify-center items-center w-full h-3/4 bg-black",
};

export const softSkillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOFT_SKILLS_SHOW:
      return {
        ...state,
        softSkills:
          state.softSkills
            .replace("top-72", "top-80")
            .replace("h-0", "h-screen").replace('opacity-0', 'opacity-1') + " p-4",
        soft1: state.soft1.replace("w-0", "w-full"),
      };

    case SOFT_SKILLS_HIDE:
      return {
        ...state,
        softSkills: state.softSkills
          .replace("top-80", "top-72")
          .replace("h-screen", "h-0")
          .replace(" p-4", "").replace('opacity-1', 'opacity-0'),
        soft1: state.soft1.replace("w-full", "w-0"),
      };

    case SOFT_TYPE_BUT_SHOW:
      return {
        ...state,
        text: state.text.replace('h-full', 'h-3/4'),
        button: state.button.replace("h-0", "h-1/2"),
      };
    case SOFT_TYPE_BUT_HIDE:
      return {
        ...state,
        text: state.text.replace('h-3/4', 'h-full'),
        button: state.button.replace("h-1/2", "h-0"),
      };
    default:
      return state;
  }
};
