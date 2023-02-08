import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PuzzleGeneratorPage from "./Components/PuzzleGenerator/PuzzleGeneratorPage";
import HowToPage from "./Components/HowTo/HowToPage";
import GamePage from "./Components/Game/GamePage";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<PuzzleGeneratorPage />} />
            <Route path="/docs" element={<HowToPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </main>
        {/* Main */}
        {/* ++ Puzzle Generator */}
        {/* ++ How to Use */}
        {/* ++ Game */}
        {/* ++ Shop */}
        {/* Footer */}
      </Router>
    </div>
  );
}

export default App;
