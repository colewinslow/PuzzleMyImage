import React, { useEffect, useState } from "react";

export default function SquarePuzzleMap({ size, shape }) {
  const [pieces, setPieces] = useState([]);
  const [WidthOfImg, setWidthOfImg] = useState(300);
  const [HeightOfImg, setHeightOfImg] = useState(300);
  // Dimensions Square, circle rectangle

  useEffect(() => {
    const pieceSize = Math.sqrt((HeightOfImg * WidthOfImg) / size);
    const pieces = [];

    for (let i = 0; i < size; i++) {
      const x = (i * pieceSize) % WidthOfImg;
      const y = Math.floor((i * pieceSize) / WidthOfImg) * pieceSize;

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
      {pieces.map((piece, index) => (
        <div className="piece" key={index} style={piece} />
      ))}
    </div>
  );
}
