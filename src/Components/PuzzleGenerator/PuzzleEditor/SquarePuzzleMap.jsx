import React, { useEffect, useState } from "react";

export default function SquarePuzzleMap({ size, shape, height, width }) {
  const [pieces, setPieces] = useState([]);
  const [WidthOfImg] = useState(width);
  const [HeightOfImg] = useState(height);
  // Dimensions Square, circle rectangle
  console.log(width, height);
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
    <div className={`${shape} puzzle-map-container`}>
      {pieces.map((piece, index) => (
        <div className="piece" key={index} style={piece} />
      ))}
    </div>
  );
}
