import React, { useEffect, useState } from "react";

export default function SquarePuzzleMap({
  size,
  shape,
  DimensionsWidth,
  DimensionsHeight,
}) {
  const [pieces, setPieces] = useState([]);
  // Dimensions Square, circle rectangle
  let width = DimensionsWidth;
  let height = DimensionsHeight;

  useEffect(() => {
    const pieceSize = Math.sqrt((height * width) / size);
    const pieces = [];

    for (let i = 0; i < size; i++) {
      const x = (i * pieceSize) % width;
      const y = Math.floor((i * pieceSize) / width) * pieceSize;

      pieces.push({
        x,
        y,
        backgroundPosition: `-${x}px -${y}px`,
        width: `${pieceSize}px`,
        height: `${pieceSize}px`,
      });
    }

    setPieces(pieces);
  }, [size]);

  return (
    <div
      className={`${shape} puzzle-map-container`}
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {" "}
      {pieces.map((piece, index) => (
        <div className="piece" key={index} style={piece} />
      ))}
    </div>
  );
}
