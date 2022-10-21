import Header from "./Components/Header";
import MainNavPage from "./Components/MainNavPage";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-200 relative overflow-hidden z-0">
      <Header />

      <MainNavPage />
    </div>
  );
}

export default App;
