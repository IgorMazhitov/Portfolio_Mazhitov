import { connect, useDispatch, useSelector } from "react-redux";
import Header from "./Components/Header";
import MainNavPage from "../src/pages/mainPage/MainNavPage";
import WorksPage from "./pages/worksPage/WorksPage";
import "./index.css";
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
  LEFT_DOWN_STRIPES_HIDE_2,
  LEFT_DOWN_STRIPES_SHOW,
  LEFT_DOWN_STRIPES_SHOW_2,
  LOADING_PAGE_DIS,
  LOADING_PAGE_HIDE,
  MAIN_HOR,
  REACT_INFO_HIDE_1,
  REACT_INFO_HIDE_2,
  REACT_INFO_HIDE_3,
  REACT_INFO_SHOW_1,
  REACT_INFO_SHOW_2,
  REACT_INFO_SHOW_3,
  SOFT_SKILLS_HIDE,
  SOFT_SKILLS_SHOW,
  SOFT_TYPE_BUT_SHOW,
} from "./Redux/types";
import TreePage from "./pages/treePage/TreePage";
import { useEffect } from "react";
import LoadingPage from "./pages/loadingPage/LoadingPage";

function App(props) {
  const dispatch = useDispatch();
  const { reactInfo, cssInfo, jsInfo, MainPage } = useSelector((state) => state.style);
  const { loading, loadingStyle } = useSelector(state => state.pages)

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

        setTimeout(() => {dispatch({type: LEFT_DOWN_STRIPES_SHOW_2})}, 300)
        setTimeout(() => {
          dispatch({ type: LEFT_DOWN_STRIPES_SHOW });
        }, 350);
      } else {
        dispatch({ type: LEFT_DOWN_STRIPES_HIDE });

        setTimeout(() => {dispatch({type: LEFT_DOWN_STRIPES_HIDE_2})}, 300)

        setTimeout(() => {dispatch({ type: LEFT_DOWN })}, 350);
      }
    }
  };

  useEffect(() => {

    setTimeout(() => {

      dispatch({type: LOADING_PAGE_HIDE})

    }, 3900)

    setTimeout(() => {

      dispatch({type: LOADING_PAGE_DIS})

    }, 4300)

  }, [])

  if (loading) {

    return (

      <div className={loadingStyle}>

          <LoadingPage />

      </div>


    )

  } else {

    return (
      <div className={MainPage}>
        {props.pages.main && (
          <Header
            showHideSoftSkills={showHideSoftSkills}
            showHidehardSkills={showHidehardSkills}
          />
        )}
  
        {props.pages.main && (
          <MainNavPage
            showHideSoftSkills={showHideSoftSkills}
            showHidehardSkills={showHidehardSkills}
            show={show}
            showHideCSS={showHideCSS}
            showHideJS={showHideJS}
            showHideReact={showHideReact}
          />
        )}
        {props.pages.works && <WorksPage />}
  
        {props.pages.tree && <TreePage />}
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);
