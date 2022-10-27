import React from "react";
import { connect, useDispatch } from "react-redux";
import { mainIcon, worksIcon, contactsIcon } from "../icons";
import {
  CONTACTS_PAGE_ACTIVE,
  MAIN_PAGE_ACTIVE,
  WORKS_PAGE_ACTIVE,
} from "../Redux/types";

const Header = (props) => {
  const dispatch = useDispatch();

  const pagesClickHandler = (page) => {
    if (page === "MAIN") {
      dispatch({ type: MAIN_PAGE_ACTIVE });
    }
    if (page === "WORKS") {
      dispatch({ type: WORKS_PAGE_ACTIVE });
    }
    if (page === "CONTACTS") {
      dispatch({ type: CONTACTS_PAGE_ACTIVE });
    }
  };

  return (
    <div className={`absolute top-0 h-20 w-full flex flex-row ${props.pages.works ? 'justify-end' : 'justify-between'} items-center p-4 text-lg`}>
      {props.pages.main && <div className=" font-bold text-4xl "> Portfolio. </div>}

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

        <div
          onClick={() => pagesClickHandler("CONTACTS")}
          className=" ml-1 flex flex-row items-center justify-center cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black"
        >
          {contactsIcon}
          <p className="ml-1 font-bold"> Contacts </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Header);
