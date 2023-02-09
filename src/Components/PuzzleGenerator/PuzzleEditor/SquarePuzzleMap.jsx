import React, { useEffect, useState } from "react";

export default function SquarePuzzleMap({ size }) {
  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    const pieceSize = Math.sqrt((280 * 280) / size);
    const pieces = [];

    for (let i = 0; i < size; i++) {
      const x = (i * pieceSize) % 280;
      const y = Math.floor((i * pieceSize) / 280) * pieceSize;

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
      className="puzzle-map-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {" "}
      {pieces.map((piece, index) => (
        <div className="test" key={index} style={piece} />
      ))}
    </div>
  );
}
