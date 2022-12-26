import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { mainIcon, roadmap, worksIcon } from "../icons";
import { MAIN_PAGE_ACTIVE, MAIN_PAGE_ENTER, MAIN_PAGE_ENTER_2, MAIN_PAGE_EXIT, MAIN_PAGE_EXIT_2, TREE_PAGE_ACTIVE, TREE_PAGE_ENTER_MAIN, TREE_PAGE_ENTER_WORKS, TREE_PAGE_EXIT, TREE_PAGE_EXIT_WORKS, WORKS_PAGE_ACTIVE } from "../Redux/types";

const Header = (props) => {
  const dispatch = useDispatch();
  const { reactInfo, cssInfo, jsInfo } = useSelector((state) => state.style);
  const { showHidehardSkills, showHideSoftSkills } = props;

  const pagesClickHandler = (page) => {
    if (page === "WORKS" && !document.getElementById('start_point')) {
      if (
        reactInfo ||
        cssInfo ||
        jsInfo ||
        document.getElementsByClassName("HARD_LEFT")[0].style.height !== "0px"
      ) {
        showHidehardSkills();
        setTimeout(() => {
          dispatch({type: MAIN_PAGE_EXIT})

        
          setTimeout(() => {
            
            dispatch({type: MAIN_PAGE_EXIT_2})
            
          }, 300)
          
          setTimeout(() => {

            dispatch({ type: WORKS_PAGE_ACTIVE });

          }, 300)
        }, 900);
      } else if (
        document.getElementsByClassName("SOFT_RIGHT")[0].style.height !== "0px" && !document.getElementById('start_point')
      ) {
        showHideSoftSkills();
        setTimeout(() => {
          dispatch({type: MAIN_PAGE_EXIT})

        
          setTimeout(() => {
            
            dispatch({type: MAIN_PAGE_EXIT_2})
            
          }, 300)
        
          setTimeout(() => {

            dispatch({ type: WORKS_PAGE_ACTIVE });

          }, 300)
        }, 600);
      } else {
        dispatch({type: MAIN_PAGE_EXIT})

        
        setTimeout(() => {
          
          dispatch({type: MAIN_PAGE_EXIT_2})
          
        }, 300)
        
        setTimeout(() => {

          dispatch({ type: WORKS_PAGE_ACTIVE });

        }, 300)
      }
    } else if (page === "TREE" && document.getElementsByClassName('main_page_checker')[0]) {

        if (
          reactInfo ||
          cssInfo ||
          jsInfo ||
          document.getElementsByClassName("HARD_LEFT")[0].style.height !== "0px"
        ) {
          showHidehardSkills();
          setTimeout(() => {
            dispatch({type: MAIN_PAGE_EXIT})
        
            setTimeout(() => {
            
              dispatch({type: MAIN_PAGE_EXIT_2})
            
            }, 300)
          
            setTimeout(() => {

              dispatch({type: TREE_PAGE_ACTIVE})

            }, 300)

            setTimeout(() => {

              dispatch({type: TREE_PAGE_ENTER_MAIN})

            }, 500)

        }, 900);
      } else if (
        document.getElementsByClassName("SOFT_RIGHT")[0].style.height !== "0px" && !document.getElementById('start_point')
      ) {
          showHideSoftSkills();
          setTimeout(() => {

            dispatch({type: MAIN_PAGE_EXIT})

            setTimeout(() => {
            
              dispatch({type: MAIN_PAGE_EXIT_2})
            
            }, 300)
        
            setTimeout(() => {

              dispatch({type: TREE_PAGE_ACTIVE})

            }, 300)

            setTimeout(() => {

              dispatch({type: TREE_PAGE_ENTER_MAIN})

            }, 500)

          }, 600);

      }

    } else if (document.getElementById('start_point')) {
      if (page === "MAIN") {
        dispatch({type: TREE_PAGE_EXIT})

        setTimeout(() => {
          dispatch({type: MAIN_PAGE_ENTER})
        }, 300)

        setTimeout(() => {
          dispatch({type: MAIN_PAGE_ACTIVE})
        }, 450)

        setTimeout(() => {
          dispatch({type: MAIN_PAGE_ENTER_2})
        }, 500)

      } else if (page === "WORKS") {
        dispatch({type: TREE_PAGE_EXIT_WORKS})

        setTimeout(() => {
          dispatch({type: WORKS_PAGE_ACTIVE})
          dispatch({type: TREE_PAGE_ENTER_WORKS})
        }, 300)
      }
    }
  };

  return (
    <div
      className={`z-10 absolute top-0 h-20 w-full flex flex-row ${
        props.pages.works ? "justify-end" : "justify-between"
      } items-center p-4 text-lg`}
    >
      <div className=" font-bold text-4xl "> Portfolio. </div>

      <div className=" flex flex-row justify-evenly items-center w-[450px]">
        <div
          onClick={() => pagesClickHandler("MAIN")}
          className=" ml-1 flex flex-row items-center justify-center w-20 cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black"
        >
          {mainIcon}
          <p className="ml-1 font-bold"> Main </p>
        </div>

        <div
          onClick={() => pagesClickHandler("TREE")}
          className=" ml-1 flex flex-row items-center justify-start w-max cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black"
        >
          {roadmap}
          <p className="ml-1 font-bold"> RoadMap </p>
        </div>

        <div
          onClick={() => pagesClickHandler("WORKS")}
          className=" ml-1 flex flex-row items-center justify-center cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black"
        >
          {worksIcon}
          <p className="ml-1 font-bold"> Works </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Header);
