import React, { useState, useEffect } from "react";
import PuzzleEditor from "./PuzzleEditor/PuzzleEditor";
import Rectangle from "./TestImages/Rectangle.png";
import Rectangle1 from "./TestImages/Rectangle1.png";
import Rectangle2 from "./TestImages/Rectangle2.png";
import Rectangle3 from "./TestImages/Rectangle3.png";

export default function PuzzleGeneratorPage() {
  const [Image, setImage] = useState();

  function onImageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <div className="page">
      <ScrollToTopOnMount />
      {Image ? (
        <PuzzleEditor ImgState={setImage} PuzzleImg={Image} />
      ) : (
        <>
          {" "}
          <h1 className="title">
            Upload an image to create your custom puzzle
          </h1>
          <div className="upload-box">
            <div className="upload-info">
              <svg
                className="upload-puzzle-svg"
                viewBox="0 0 116 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 56.9983L17.7994 74.4951C16.6347 75.1762 15.5068 75.9583 14.4979 76.9498C12.9701 78.4445 11.7577 80.221 10.9305 82.1778C10.1032 84.1341 9.67736 86.2321 9.67736 88.3506C9.67736 90.4692 10.1032 92.5671 10.9305 94.5235C11.7577 96.4802 12.9701 98.2567 14.4979 99.7515C16.0188 101.253 17.8265 102.445 19.8173 103.258C21.808 104.071 23.9426 104.489 26.0984 104.489C28.2541 104.489 30.3887 104.071 32.3794 103.258C34.3702 102.445 36.1778 101.253 37.6989 99.7515C38.7077 98.76 39.5032 97.6559 40.2005 96.5069L57.9998 114L75.7995 96.5069C74.5991 95.8278 73.4909 95.0018 72.5019 94.0482C70.9748 92.5538 69.7628 90.7773 68.936 88.8209C68.1092 86.8649 67.6834 84.7676 67.6834 82.6497C67.6834 80.5315 68.1092 78.4335 68.936 76.4775C69.7628 74.5214 70.9748 72.7453 72.5019 71.2508C74.0227 69.7497 75.8302 68.5587 77.8208 67.7461C79.811 66.9334 81.9449 66.5151 84.1003 66.5151C86.2557 66.5151 88.3896 66.9334 90.3802 67.7461C92.3704 68.5587 94.1779 69.7497 95.6988 71.2508C96.6689 72.224 97.5093 73.3141 98.2007 74.4951L116 57.002L98.2007 39.5045C99.3654 38.8194 100.493 38.0374 101.502 37.0459C103.029 35.5515 104.241 33.7753 105.068 31.8192C105.895 29.8631 106.32 27.7654 106.32 25.6472C106.32 23.529 105.895 21.4318 105.068 19.4757C104.241 17.5196 103.029 15.743 101.502 14.2484C99.9811 12.7468 98.1736 11.5557 96.1827 10.7427C94.1918 9.92965 92.0572 9.51114 89.9015 9.51114C87.7458 9.51114 85.6112 9.92965 83.6207 10.7427C81.6298 11.5557 79.8222 12.7468 78.3011 14.2484C77.2923 15.2359 76.4965 16.3446 75.7995 17.4933L57.9998 0L40.2005 17.4933C41.3695 18.1745 42.493 18.9565 43.4978 19.948C45.0259 21.4427 46.2382 23.2193 47.0653 25.1758C47.8925 27.1323 48.3186 29.2301 48.3186 31.3488C48.3186 33.4675 47.8925 35.5651 47.0653 37.5218C46.2382 39.4782 45.0259 41.2547 43.4978 42.7495C41.977 44.2506 40.1698 45.4416 38.1792 46.2543C36.189 47.0669 34.0547 47.4852 31.8996 47.4852C29.7443 47.4852 27.6102 47.0669 25.6198 46.2543C23.6295 45.4416 21.822 44.2506 20.3012 42.7495C19.3311 41.7763 18.4905 40.6859 17.7994 39.5045L0 56.9983Z"
                  fill="#DDDFE1"
                />
              </svg>{" "}
              <button className="upload-image-btn">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5873 13.1549V17.037C20.5873 17.5518 20.3598 18.0456 19.9547 18.4096C19.5497 18.7736 19.0003 18.9781 18.4274 18.9781H3.30831C2.73548 18.9781 2.18611 18.7736 1.78105 18.4096C1.376 18.0456 1.14844 17.5518 1.14844 17.037V13.1549"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2676 6.36121L10.868 1.50854L5.46826 6.36121"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8677 1.50854V13.1549"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={onImageChange}
                />
                Upload Image
              </button>
              <span className="drop-file-text">or drop a file</span>
            </div>
            <div className="upload-cmd-instruction">
              <p>Paste Image or URL</p>
              <div className="upload-instructions-set">
                <span className="upload-instruction">cmd</span>+<span>v</span>
              </div>
            </div>
          </div>
          <div className="upload-test-images-container">
            <div
              onClick={() => setImage((prev) => (prev = Rectangle))}
              className="upload-test-image"
            >
              <img alt="Leaf" src={Rectangle} />
            </div>{" "}
            <div
              onClick={() => setImage((prev) => (prev = Rectangle1))}
              className="upload-test-image"
            >
              <img alt="Dog" src={Rectangle1} />
            </div>{" "}
            <div
              onClick={() => setImage((prev) => (prev = Rectangle3))}
              className="upload-test-image"
            >
              <img alt="Dog" src={Rectangle3} />
            </div>{" "}
            <div
              className="upload-test-image"
              onClick={() => setImage((prev) => (prev = Rectangle2))}
            >
              <img alt="Family" src={Rectangle2} />
            </div>{" "}
            <div className="upload-test-image disabled">
              <svg
                width="101"
                height="39"
                viewBox="0 0 101 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.24 21.24C15.24 24.76 14.4 27.208 12.72 28.584C12.032 29.128 11.288 29.504 10.488 29.712C9.688 29.904 8.64 30 7.344 30H1.128L0.912 28.68C2.128 28.232 2.8 28 2.928 27.984C2.928 27.936 2.856 23.704 2.712 15.288C2.008 15.112 1.344 14.904 0.72 14.664C0.816 13.832 0.88 13.344 0.912 13.2H7.272C8.84 13.2 10.088 13.36 11.016 13.68C11.96 14 12.792 14.568 13.512 15.384C14.664 16.728 15.24 18.68 15.24 21.24ZM7.56 27.672C9.384 27.672 10.592 27.232 11.184 26.352C11.792 25.472 12.096 23.952 12.096 21.792C12.096 19.632 11.76 18.064 11.088 17.088C10.416 16.096 9.296 15.6 7.728 15.6H5.976C5.912 20.992 5.872 25.016 5.856 27.672H7.56ZM28.4638 13.464L28.4878 13.704C28.4878 14.36 28.3838 14.92 28.1758 15.384C27.9678 15.544 27.6398 15.672 27.1918 15.768L31.1998 27.624L33.4798 27.912C33.4798 28.568 33.2958 29.264 32.9278 30H27.0958L26.8798 28.68C27.5518 28.424 27.9918 28.256 28.1998 28.176L27.2398 25.464H21.8398C21.3598 26.888 21.1038 27.632 21.0718 27.696L22.7278 27.912C22.7278 28.248 22.6638 28.64 22.5358 29.088C22.4078 29.52 22.2878 29.824 22.1758 30H16.3438L16.1278 28.68C16.8478 28.376 17.4958 28.152 18.0718 28.008L22.1038 15.672C21.0318 15.512 20.2238 15.304 19.6798 15.048C19.6798 14.584 19.7518 14.176 19.8958 13.824C20.2318 13.712 21.0158 13.584 22.2478 13.44C23.4958 13.28 24.6798 13.2 25.7998 13.2C26.9358 13.2 27.8238 13.288 28.4638 13.464ZM25.3678 20.064L24.6718 16.896H24.4318L23.6638 20.208L22.5358 23.208H26.5438L25.3678 20.064ZM44.958 25.632C45.342 25.568 45.63 25.536 45.822 25.536C46.03 25.536 46.47 25.592 47.142 25.704C47.206 25.832 47.294 26.24 47.406 26.928C47.534 27.616 47.598 28.176 47.598 28.608C47.598 29.024 47.55 29.488 47.454 30H35.814L35.598 28.68C36.382 28.36 37.054 28.128 37.614 27.984C37.614 27.936 37.542 23.704 37.398 15.288L35.406 14.664L35.598 13.2H41.838C41.822 13.2 41.822 13.216 41.838 13.248C41.87 13.28 41.902 13.352 41.934 13.464C41.982 13.56 42.03 13.68 42.078 13.824C42.174 14.08 42.238 14.504 42.27 15.096C41.454 15.224 40.918 15.304 40.662 15.336C40.598 20.856 40.558 24.976 40.542 27.696H44.43L44.958 25.632ZM59.1611 25.632C59.5451 25.568 59.8331 25.536 60.0251 25.536C60.2331 25.536 60.6731 25.592 61.3451 25.704C61.4091 25.832 61.4971 26.24 61.6091 26.928C61.7371 27.616 61.8011 28.176 61.8011 28.608C61.8011 29.024 61.7531 29.488 61.6571 30H50.0171L49.8011 28.68C50.5851 28.36 51.2571 28.128 51.8171 27.984C51.8171 27.936 51.7451 23.704 51.6011 15.288L49.6091 14.664L49.8011 13.2H56.0411C56.0251 13.2 56.0251 13.216 56.0411 13.248C56.0731 13.28 56.1051 13.352 56.1371 13.464C56.1851 13.56 56.2331 13.68 56.2811 13.824C56.3771 14.08 56.4411 14.504 56.4731 15.096C55.6571 15.224 55.1211 15.304 54.8651 15.336C54.8011 20.856 54.7611 24.976 54.7451 27.696H58.6331L59.1611 25.632ZM74.3666 15.6C74.3666 17.424 74.3506 18.992 74.3186 20.304H76.7666L77.0066 18.648C77.8226 18.648 78.6146 18.848 79.3826 19.248V24.048L77.7986 24.12C77.4146 23.544 77.1906 23.04 77.1266 22.608H74.2946C74.2626 24.848 74.2466 26.536 74.2466 27.672H78.3506L78.8786 25.584C79.8706 25.584 80.6226 25.632 81.1346 25.728C81.3746 26.64 81.4946 27.472 81.4946 28.224C81.4946 28.96 81.4706 29.552 81.4226 30H69.5186L69.3026 28.68C70.3426 28.28 71.0146 28.048 71.3186 27.984C71.3026 27.04 71.2866 25.712 71.2706 24C71.2066 20.16 71.1506 17.256 71.1026 15.288L69.1106 14.664L69.3026 13.2H81.0866C81.1346 13.632 81.1586 14.176 81.1586 14.832C81.1586 15.472 81.0386 16.368 80.7986 17.52C80.3026 17.68 79.5506 17.76 78.5426 17.76L77.9906 15.6H74.3666ZM96.8505 25.38C96.9905 25.36 97.1605 25.35 97.3605 25.35C97.7205 25.35 98.0705 25.4 98.4105 25.5C98.6505 26.7 98.7705 28.2 98.7705 30H88.2705C88.0305 29.58 87.9105 29.21 87.9105 28.89C87.9105 28.55 87.9205 28.34 87.9405 28.26C92.0805 24.32 94.3105 22.18 94.6305 21.84C94.9505 21.48 95.2705 20.95 95.5905 20.25C95.9305 19.55 96.1005 18.85 96.1005 18.15C96.1005 17.43 95.8205 16.77 95.2605 16.17C94.7205 15.57 93.8905 15.27 92.7705 15.27C92.1505 15.27 91.6205 15.33 91.1805 15.45L90.4605 19.14C90.2605 19.16 90.0405 19.17 89.8005 19.17C89.5605 19.17 89.2005 19.13 88.7205 19.05C88.4005 18.19 88.2305 17 88.2105 15.48C88.7105 15 89.4205 14.55 90.3405 14.13C91.2805 13.69 92.1705 13.47 93.0105 13.47C94.7705 13.47 96.1805 13.92 97.2405 14.82C98.3205 15.7 98.8605 16.67 98.8605 17.73C98.8605 19.09 98.5705 20.27 97.9905 21.27C97.4305 22.27 96.4905 23.33 95.1705 24.45L91.1505 27.87L91.2405 28.23L96.4905 28.2C96.5905 26.84 96.7105 25.9 96.8505 25.38Z"
                  fill="white"
                />
                <circle cx="66" cy="24" r="1" fill="white" />
              </svg>

              <span className="coming-soon">Coming Soon</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
