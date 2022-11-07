import React from "react";
import { connect } from "react-redux";

const ReactInfo = (props) => {
  const { elStyle } = props;

  return (
    <div className={elStyle} style={{height: '0px'}}>
      <div className="flex flex-row justify-between pb-2 border-b-4 border-slate-100 whitespace-nowrap">
        <p>
          {" "}
          React Hooks:
          <li className=" list-none pl-2"> useState </li>
          <li className=" list-none pl-2"> useEffect </li>
          <li className=" list-none pl-2"> useContext </li>
          <li className=" list-none pl-2"> useMemo </li>
        </p>

        <div className="flex flex-col justify-center items-center">
          <p className=" border-b-4 border-slate-100"> JUNIOR+ </p>
          <p> MIDDLE </p>
        </div>
      </div>

      <div className="pt-4 flex flex-row justify-between">
        <div>
          <li className=" list-none pl-2"> useReducer </li>
          <li className=" list-none pl-2"> useCallback </li>
          <li className=" list-none pl-2"> useRef </li>
        </div>

        <p className="flex justify-center items-center"> JUNIOR </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ReactInfo);
