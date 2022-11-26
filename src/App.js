import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Nft from "./Pages/Nft/Nft";
import Play from "./Pages/Play/Play";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Nft />} path="/nft" />
        <Route element={<Play />} path="/play" />
      </Routes>
    </div>
  );
}

export default App;
