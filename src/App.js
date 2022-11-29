import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Nft from "./Pages/Nft/Nft";
import Play from "./Pages/Play/Play";
import Team from "./Pages/Team/Team";
import Versus from "./Pages/Versus/Versus";
import Tournament from "./Pages/Tournament/Tournament";
import Bracket from "./Pages/Bracket/Bracket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Nft />} path="/nft" />
        <Route element={<Play />} path="/play" />
        <Route element={<Team />} path="/team" />
        <Route element={<Versus />} path="/versus" />
        <Route element={<Tournament />} path="/tournament" />
        <Route element={<Bracket />} path="/bracket" />
      </Routes>
    </div>
  );
}

export default App;
