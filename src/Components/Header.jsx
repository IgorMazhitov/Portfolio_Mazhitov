import React from "react";
import { mainIcon, worksIcon, contactsIcon } from "../icons";

const Header = () => {
  return (
    <div className="absolute top-0 w-full flex flex-row justify-between items-center p-4 text-lg">
      <div className=" font-bold text-4xl "> Portfolio. </div>

      <div className=" flex flex-row justify-evenly items-center w-96">
        <div className=" ml-1 flex flex-row items-center justify-center w-20 cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black">
          {mainIcon}
          <p className="ml-1 font-bold"> Main </p>
        </div>

        <div className=" ml-1 flex flex-row items-center justify-center cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black">
          {worksIcon}
          <p className="ml-1 font-bold"> Works </p>
        </div>

        <div className=" ml-1 flex flex-row items-center justify-center cursor-pointer bg-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-black">
          {contactsIcon}
          <p className="ml-1 font-bold"> Contacts </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
