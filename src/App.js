import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Nft from "./Pages/Nft/Nft";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Nft />} path="/nft" />
      </Routes>
    </div>
  );
}

export default App;
