import React, { useState } from "react";

function PuzzleEditor({ PuzzleImg, ImgState }) {
  // Square, Circle, Rectangle
  const [PuzzleShape, setPuzzleShape] = useState("square");
  const [PuzzlePieceShape, setPuzzlePieceShape] = useState("Jigsaw");
  const [ShapeChosen, setShapeChosen] = useState(false);
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
          {ShapeChosen && ` | ${PuzzlePieceShape} Pieces`}
        </div>
        {!ShapeChosen ? (
          <>
            <div className="shape-selection-box">
              <button
                onClick={() => setPuzzleShape((prev) => (prev = "square"))}
              >
                Square
              </button>
              <button
                onClick={() => setPuzzleShape((prev) => (prev = "circle"))}
              >
                Circle
              </button>
              <button
                onClick={() => setPuzzleShape((prev) => (prev = "rectangle"))}
              >
                Rectangle
              </button>
            </div>{" "}
            <button onClick={() => setShapeChosen((prev) => (prev = true))}>
              Next
            </button>
          </>
        ) : (
          <>
            {" "}
            <div className="shape-selection-box">
              {" "}
              <button
                onClick={() => setPuzzlePieceShape((prev) => (prev = "JigSaw"))}
              >
                Traditional JigSaw
              </button>
              <button
                onClick={() =>
                  setPuzzlePieceShape((prev) => (prev = "Squares"))
                }
              >
                Square Pieces
              </button>
              <button
                onClick={() =>
                  setPuzzlePieceShape((prev) => (prev = "Geometric"))
                }
              >
                Geometric Shapes
              </button>{" "}
            </div>{" "}
            <button
              onClick={() => setShapeChosen((prev) => (prev = !ShapeChosen))}
            >
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PuzzleEditor;
