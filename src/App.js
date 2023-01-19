import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PuzzleGen from "./Pages/PuzzleGen";
import PuzzleSaves from "./Pages/PuzzleSaves";
import PuzzleShop from "./Pages/PuzzleShop";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PuzzleGen />}></Route>
          <Route path="/shop/saved" element={<PuzzleSaves />}></Route>
          <Route path="/shop" element={<PuzzleShop />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
