import React, { useState } from "react";
import ActionBtns from "./ActionBtns";
import SquarePuzzleMap from "./SquarePuzzleMap";

function PuzzleEditor({ PuzzleImg, ImgState }) {
  // Square, Circle, Rectangle
  const [PuzzleShape, setPuzzleShape] = useState("Square");
  const [PuzzlePieceShape, setPuzzlePieceShape] = useState("Squares");
  const [PieceAmount, setPieceAmount] = useState("100");

  function onPieceChange(e) {
    console.log(e.target.value);
    setPieceAmount((prev) => (prev = e.target.value));
  }
  return (
    <div className="puzzle-editor">
      <div className="puzzle-container">
        <div className={`${PuzzleShape} editor-puzzle-container`}>
          <img
            className="editor-puzzle"
            alt="Personal Puzzle"
            src={PuzzleImg}
          />
          {PuzzlePieceShape === "Squares" && (
            <SquarePuzzleMap
              shape={PuzzleShape}
              DimensionsWidth={300}
              DimensionsHeight={300}
              size={PieceAmount}
            />
          )}
        </div>
        <div className="mobile">
          <ActionBtns />
        </div>
      </div>
      <div
        onClick={() => ImgState((prev) => (prev = null))}
        className="remove-photo-btn"
      >
        <span>X</span>
      </div>
      <div className="puzzle-info-container">
        <h2 className="sm-title">Current Puzzle</h2>
        <div className="info-tag-line">
          {PuzzleShape}
          {` | ${PuzzlePieceShape} Pieces`}
        </div>
        <span className="puzzle-info-title">Puzzle Shape</span>
        <div className="shape-selection-box">
          <button
            className={`${PuzzleShape === "Square" && "selected-btn"}`}
            onClick={() => setPuzzleShape((prev) => (prev = "Square"))}
          >
            Square
          </button>
          <button
            className={`${PuzzleShape === "Circle" && "selected-btn"}`}
            onClick={() => setPuzzleShape((prev) => (prev = "Circle"))}
          >
            Circle
          </button>
          <button
            className={`${PuzzleShape === "Rectangle" && "selected-btn"}`}
            onClick={() => setPuzzleShape((prev) => (prev = "Rectangle"))}
          >
            Rectangle
          </button>
        </div>
        <span className="puzzle-info-title">Type of Puzzle Pieces</span>
        <div className="shape-selection-box">
          <button
            className={`${PuzzlePieceShape === "Jigsaw" && "selected-btn"}`}
            onClick={() => setPuzzlePieceShape((prev) => (prev = "Jigsaw"))}
          >
            Traditional Jigsaw
          </button>
          <button
            className={`${PuzzlePieceShape === "Squares" && "selected-btn"}`}
            onClick={() => setPuzzlePieceShape((prev) => (prev = "Squares"))}
          >
            Square Pieces
          </button>
          <button
            className={`${PuzzlePieceShape === "Geometric" && "selected-btn"}`}
            onClick={() => setPuzzlePieceShape((prev) => (prev = "Geometric"))}
          >
            Geometric Shapes
          </button>
        </div>{" "}
        <span className="puzzle-info-title">Amount of Pieces</span>
        <div className="shape-selection-box">
          {" "}
          <div className="checkbox-info">
            <input
              onChange={onPieceChange}
              checked={PieceAmount === "25"}
              value="25"
              type="checkbox"
            />
            <span>25</span>
          </div>
          <div className="checkbox-info">
            <input
              onChange={onPieceChange}
              checked={PieceAmount === "100"}
              value="100"
              type="checkbox"
            />
            <span>100</span>
          </div>
          <div className="checkbox-info">
            <input
              onChange={onPieceChange}
              checked={PieceAmount === "300"}
              value="300"
              type="checkbox"
            />
            <span>300</span>
          </div>
          <div className="checkbox-info">
            <input
              onChange={onPieceChange}
              checked={PieceAmount === "400"}
              value="400"
              type="checkbox"
            />
            <span>400</span>
          </div>
          <div className="checkbox-info">
            <input
              onChange={onPieceChange}
              checked={PieceAmount === "750"}
              value="750"
              type="checkbox"
            />
            <span>750</span>
          </div>
          <div className="checkbox-info">
            <input
              onChange={onPieceChange}
              checked={PieceAmount === "1000"}
              value="1000"
              type="checkbox"
            />
            <span>1000</span>
          </div>
        </div>{" "}
        <div className="web">
          <ActionBtns />
        </div>
      </div>
    </div>
  );
}

export default PuzzleEditor;
