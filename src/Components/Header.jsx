import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { mainIcon, worksIcon } from "../icons";
import { MAIN_PAGE_EXIT, MAIN_PAGE_EXIT_2, WORKS_PAGE_ACTIVE } from "../Redux/types";

const Header = (props) => {
  const dispatch = useDispatch();
  const { reactInfo, cssInfo, jsInfo } = useSelector((state) => state.style);
  const { showHidehardSkills, showHideSoftSkills } = props;

  const pagesClickHandler = (page) => {
    if (page === "WORKS") {
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
        document.getElementsByClassName("SOFT_RIGHT")[0].style.height !== "0px"
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
    }
  };

  return (
    <div
      className={`absolute top-0 h-20 w-full flex flex-row ${
        props.pages.works ? "justify-end" : "justify-between"
      } items-center p-4 text-lg`}
    >
      <div className=" font-bold text-4xl "> Portfolio. </div>

      <div className=" flex flex-row justify-evenly items-center w-96">
        <div
          onClick={() => pagesClickHandler("MAIN")}
          className=" ml-1 flex flex-row items-center justify-center w-20 cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black"
        >
          {mainIcon}
          <p className="ml-1 font-bold"> Main </p>
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
