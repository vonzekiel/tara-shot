import { useState } from "react";

export default function App() {
  const [isYes, setYes] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [position, setPosition] = useState("inherit");
  function handleClickYes() {
    setYes(true);
    console.log(isYes);
  }

  function handleClickNo() {
    setTop(Math.floor(Math.random() * 400));
    setLeft(Math.floor(Math.random() * 300));
    setPosition("fixed");
  }
  return (
    <>
      {!isYes ? (
        <div className="container">
          <div className="text-container">
            <h1>Will you be my girlfriend? 💕</h1>
          </div>
          <div className="btn-container">
            <button onClick={handleClickYes}>Yes</button>
            <button
              className="btn-no"
              onClick={handleClickNo}
              style={{
                position: position,
                top: top,
                left: left,
              }}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>You are now my girlfriend!😍🥰😘</h1>
        </div>
      )}
    </>
  );
}
