import React from "react";

function ShareOnSocial() {
  const Shareable = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div className="sharable-cont">
      {Shareable.map((elm) => {
        return <div className="Sharable" key={elm.id}></div>;
      })}
    </div>
  );
}

export default ShareOnSocial;
