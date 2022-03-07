import "./App.css";
import Appbar from "./Pages/Home/Appbar/Appbar";
import CryptoListContainer from "./Pages/Home/List/CryptoListContainer";

function App() {
  return (
    <div className="flex bg-primarybackgroud ">
      <div className="w-2/3">
        <Appbar />
        <div className=" bg-primarybackgroud h-screen ">
          <CryptoListContainer />
        </div>
      </div>
      <div className="w-1/3 h-screen bg-cyan-500"></div>
    </div>
  );
}

export default App;
