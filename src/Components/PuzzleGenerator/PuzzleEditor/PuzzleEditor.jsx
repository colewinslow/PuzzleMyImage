import React, { useState } from "react";

function PuzzleEditor({ PuzzleImg, ImgState }) {
  // Square, Circle, Rectangle
  const [PuzzleShape, setPuzzleShape] = useState("square");
  const [PuzzlePieceShape, setPuzzlePieceShape] = useState("Jigsaw");

  return (
    <div className="puzzle-editor">
      <div className="puzzle-container">
        <div className={`${PuzzleShape} editor-puzzle-container`}>
          <img
            className="editor-puzzle"
            alt="Personal Puzzle"
            src={PuzzleImg}
          />
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
          <button onClick={() => setPuzzleShape((prev) => (prev = "square"))}>
            Square
          </button>
          <button onClick={() => setPuzzleShape((prev) => (prev = "circle"))}>
            Circle
          </button>
          <button
            onClick={() => setPuzzleShape((prev) => (prev = "rectangle"))}
          >
            Rectangle
          </button>
        </div>
        <span className="puzzle-info-title">Type of Puzzle Pieces</span>
        <div className="shape-selection-box">
          <button
            onClick={() => setPuzzlePieceShape((prev) => (prev = "JigSaw"))}
          >
            Traditional JigSaw
          </button>
          <button
            onClick={() => setPuzzlePieceShape((prev) => (prev = "Squares"))}
          >
            Square Pieces
          </button>
          <button
            onClick={() => setPuzzlePieceShape((prev) => (prev = "Geometric"))}
          >
            Geometric Shapes
          </button>
        </div>{" "}
        <div>
          <button>Add To Cart</button>
          <button>Save Puzzle</button>
          <button>Play Puzzle Game</button>
        </div>
      </div>
    </div>
  );
}

export default PuzzleEditor;
