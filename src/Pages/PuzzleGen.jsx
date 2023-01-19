import React, { useState } from "react";
import ShareOnSocial from "../Components/ShareOnSocial/ShareOnSocial";

export default function PuzzleGen() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="puzzle-gen-cont">
      <div className="aside">
        <div className="puzzle-upload-box">
          <div className="box-top">
            <h1>Upload Image</h1>
            <span>40 Images left to upload</span>
          </div>{" "}
          <div className="upload-drop-zone">
            {" "}
            <form
              id="form-file-upload"
              onDragEnter={handleDrag}
              onSubmit={(e) => e.preventDefault()}
            >
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.25 54.5V71C79.25 73.188 78.3808 75.2865 76.8336 76.8336C75.2865 78.3808 73.188 79.25 71 79.25H13.25C11.062 79.25 8.96354 78.3808 7.41637 76.8336C5.86919 75.2865 5 73.188 5 71V54.5"
                  stroke="#919191"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.75 25.625L42.125 5L21.5 25.625"
                  stroke="#919191"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.125 5V54.5"
                  stroke="#919191"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                ref={inputRef}
                type="file"
                id="input-file-upload"
                multiple={true}
                onChange={handleChange}
              />
              <label
                id="label-file-upload"
                htmlFor="input-file-upload"
                className={dragActive ? "drag-active" : ""}
              >
                <h3>Drag and drop your file here </h3>
                <button className="upload-button" onClick={onButtonClick}>
                  or Browse from file system
                </button>
              </label>
              {dragActive && (
                <div
                  id="drag-file-element"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                ></div>
              )}
            </form>
            <button className="upload-mobile-file-btn">
              Upload File From Device{" "}
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.25 54.5V71C79.25 73.188 78.3808 75.2865 76.8336 76.8336C75.2865 78.3808 73.188 79.25 71 79.25H13.25C11.062 79.25 8.96354 78.3808 7.41637 76.8336C5.86919 75.2865 5 73.188 5 71V54.5"
                  stroke="#919191"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.75 25.625L42.125 5L21.5 25.625"
                  stroke="#919191"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.125 5V54.5"
                  stroke="#919191"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>{" "}
          </div>
          <span className="supported-img">
            Support for following image types: JPEG, PNG8, PNG24,
          </span>{" "}
          <button className="gen-puzzle-btn">Generate Puzzle</button>
        </div>
        <div className="share-on-social-box web">
          <ShareOnSocial />
          <p>
            Share your puzzle{" "}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.49982L1.68788 7.18813C1.57743 7.25386 1.47048 7.32931 1.37481 7.42499C1.22992 7.56921 1.11496 7.74064 1.03651 7.92942C0.958065 8.11821 0.917682 8.32062 0.917682 8.52506C0.917682 8.72949 0.958065 8.93191 1.03651 9.1207C1.11496 9.30948 1.22992 9.48091 1.37481 9.62513C1.51903 9.77002 1.69045 9.885 1.87923 9.96345C2.068 10.0419 2.27042 10.0823 2.47484 10.0823C2.67927 10.0823 2.88169 10.0419 3.07046 9.96345C3.25924 9.885 3.43066 9.77002 3.57488 9.62513C3.67056 9.52946 3.74601 9.42292 3.81212 9.31207L5.5 11L7.18788 9.31207C7.07404 9.24653 6.96898 9.16682 6.8752 9.07483C6.73037 8.93062 6.61545 8.75919 6.53704 8.57045C6.45863 8.3817 6.41827 8.17934 6.41827 7.97495C6.41827 7.77056 6.45863 7.56816 6.53704 7.37941C6.61545 7.19066 6.73037 7.01929 6.8752 6.87507C7.01941 6.73024 7.19081 6.61531 7.37955 6.53689C7.56829 6.45848 7.77066 6.41811 7.97504 6.41811C8.17942 6.41811 8.38179 6.45848 8.57053 6.53689C8.75927 6.61531 8.93067 6.73024 9.07488 6.87507C9.16687 6.96899 9.24659 7.07416 9.31212 7.18813L11 5.5002L9.31212 3.81185C9.42257 3.74573 9.52952 3.67029 9.62519 3.57461C9.77002 3.43039 9.88493 3.25902 9.96334 3.07027C10.0418 2.88152 10.0821 2.67911 10.0821 2.47473C10.0821 2.27034 10.0418 2.06798 9.96334 1.87923C9.88493 1.69048 9.77002 1.51906 9.62519 1.37484C9.48097 1.22996 9.30955 1.11502 9.12077 1.03657C8.932 0.958125 8.72958 0.917741 8.52516 0.917741C8.32073 0.917741 8.11831 0.958125 7.92954 1.03657C7.74076 1.11502 7.56934 1.22996 7.42512 1.37484C7.32944 1.47013 7.254 1.5771 7.18788 1.68795L5.5 0L3.81212 1.68795C3.92296 1.75368 4.02952 1.82913 4.12481 1.92481C4.26969 2.06903 4.38465 2.24046 4.4631 2.42924C4.54155 2.61803 4.58193 2.82045 4.58193 3.02488C4.58193 3.22932 4.54155 3.43174 4.4631 3.62052C4.38465 3.8093 4.26969 3.98073 4.12481 4.12496C3.98059 4.26978 3.80919 4.38471 3.62045 4.46313C3.43171 4.54154 3.22934 4.58191 3.02496 4.58191C2.82058 4.58191 2.61821 4.54154 2.42947 4.46313C2.24073 4.38471 2.06933 4.26978 1.92512 4.12496C1.83313 4.03104 1.75341 3.92582 1.68788 3.81185L0 5.49982Z"
                fill="#25B39E"
              />
            </svg>
            on the web
          </p>
        </div>{" "}
      </div>{" "}
      <div className="puzzle-generator-box">
        <div className="box-top">
          <h1>Puzzle Generator</h1>
          <span className="puzzle-piece-counter">150 Piece Puzzle</span>
        </div>
        <div className="Puzzle-cont">
          <div className="Puzzle"></div>{" "}
          <div className="btn-cont">
            <button className="add">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.45452 15.3181C6.83108 15.3181 7.13634 15.0128 7.13634 14.6363C7.13634 14.2597 6.83108 13.9545 6.45452 13.9545C6.07797 13.9545 5.77271 14.2597 5.77271 14.6363C5.77271 15.0128 6.07797 15.3181 6.45452 15.3181Z"
                  stroke="#25B39E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9545 15.3181C14.3311 15.3181 14.6363 15.0128 14.6363 14.6363C14.6363 14.2597 14.3311 13.9545 13.9545 13.9545C13.578 13.9545 13.2727 14.2597 13.2727 14.6363C13.2727 15.0128 13.578 15.3181 13.9545 15.3181Z"
                  stroke="#25B39E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1H3.72727L5.55455 10.1295C5.61689 10.4435 5.78766 10.7254 6.03696 10.9261C6.28626 11.1268 6.5982 11.2334 6.91818 11.2273H13.5455C13.8654 11.2334 14.1774 11.1268 14.4267 10.9261C14.676 10.7254 14.8467 10.4435 14.9091 10.1295L16 4.40909H4.40909"
                  stroke="#25B39E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add Puzzle to cart
            </button>
            <span className="or">Or</span>
            <button className="save">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4444 15H2.55556C2.143 15 1.74733 14.8361 1.45561 14.5444C1.16389 14.2527 1 13.857 1 13.4444V2.55556C1 2.143 1.16389 1.74733 1.45561 1.45561C1.74733 1.16389 2.143 1 2.55556 1H11.1111L15 4.88889V13.4444C15 13.857 14.8361 14.2527 14.5444 14.5444C14.2527 14.8361 13.857 15 13.4444 15Z"
                  stroke="#919191"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8889 15.0001V8.77783H4.11108V15.0001"
                  stroke="#919191"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.11108 1V4.88889H10.3333"
                  stroke="#919191"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Save Puzzle{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
