import { connect } from "react-redux";
import Header from "./Components/Header";
import MainNavPage from "./Components/MainNavPage";
import WorksPage from "./Components/WorksPage";
import "./index.css";

function App(props) {

  return (
    <div className="w-screen h-screen bg-slate-300 relative overflow-hidden z-0 font-['Montserrat']">
      <Header />

      {props.pages.main && <MainNavPage />}
      {props.pages.works && <WorksPage />}

    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App)
