import React, { useState } from "react";
import SquarePuzzleMap from "./SquarePuzzleMap";

function PuzzleEditor({ PuzzleImg, ImgState }) {
  // Square, Circle, Rectangle
  const [PuzzleShape, setPuzzleShape] = useState("Square");
  const [PuzzlePieceShape, setPuzzlePieceShape] = useState("Jigsaw");
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
        </div>
        <div>
          <button className="add-to-cart-btn">
            {" "}
            <svg
              className="cart-svg-add"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.38648 19.8088C8.88011 19.8088 9.28028 19.4086 9.28028 18.915C9.28028 18.4213 8.88011 18.0212 8.38648 18.0212C7.89284 18.0212 7.49268 18.4213 7.49268 18.915C7.49268 19.4086 7.89284 19.8088 8.38648 19.8088Z"
                stroke="#BBC0C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.2185 19.8088C18.7121 19.8088 19.1123 19.4086 19.1123 18.915C19.1123 18.4213 18.7121 18.0212 18.2185 18.0212C17.7249 18.0212 17.3247 18.4213 17.3247 18.915C17.3247 19.4086 17.7249 19.8088 18.2185 19.8088Z"
                stroke="#BBC0C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.23633 1.04248H4.81153L7.20691 13.008C7.28864 13.4194 7.51251 13.789 7.83931 14.052C8.16612 14.315 8.57505 14.4548 8.99451 14.4467H17.6822C18.1017 14.4548 18.5106 14.315 18.8374 14.052C19.1642 13.789 19.3881 13.4194 19.4698 13.008L20.8999 5.51056H5.70533"
                stroke="#BBC0C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add To Cart
          </button>
          <div className="btn-box-bottom">
            <button className="play-btn">Play Puzzle Game</button>{" "}
            <button className="save-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H14L19 6V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19Z"
                  stroke="#6AAADC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 19V11H5V19"
                  stroke="#6AAADC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 1V6H13"
                  stroke="#6AAADC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PuzzleEditor;
