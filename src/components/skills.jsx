import React, { useState } from "react";

const progressesData = [
  { skill: "C++", percent: 93 },
  { skill: "Java / OOP", percent: 90 },
  { skill: "React", percent: 93 },
  { skill: "NodeJS", percent: 85 },
  { skill: "MongoDB / SQL", percent: 75 },
  { skill: "DSA", percent: 88 },
  { skill: "AI / ML", percent: 75 },
  { skill: "Linux", percent: 90 },
  { skill: "CyberSecurity", percent: 85 },
  { skill: "Cloud Computing", percent: 88 },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [progressCount, setProgressCount] = useState(4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) setProgressCount(progressesData.length);
    else setProgressCount(4);
  };

  return(
    <div className="skills mx-auto">
    <div className="skill d-flex">
         <p className="me-2">- Technical</p>
         <p>Skills</p>
    </div>

    <style>
        {`
        .skill{
          margin: 15vh 0 5vh -3vh;
          letter-spacing: 2px;
          color: rgba(30, 165, 165, 0.721);
          font-size: calc(0.7rem + 0.6vw);
        }
        .skills{
          width: 50%;
        }
        .progresses{
          margin: 3vh auto;
        }
        .progress-ring {
          position: relative;
          width: calc(6vw + 80px);
          height: calc(6vw + 80px);
        }
        
        .progress-ring-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 4px solid rgb(0, 172, 172,0.3);
          border-radius: 50%;
          box-sizing: border-box;
        }
        
        .progress-ring-fill {
          border-color: teal;
          animation: fill 3s;
        }
        
        .progress-ring-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: calc(0.7rem + 0.6vw);
          color: #eee;
        }
        .skill-name{
          font-size: calc(0.7rem + 0.6vw);
        }
        @keyframes fill {
          0%{
            clip: rect(0, calc(6vw + 80px), calc(6vw + 80px), 0);
          }
        }
        @media screen and (max-width: 1199px){
          .skills{
              width: 85%;
          }
      }
      @media screen and (min-width: 1200px) and (max-width: 1599px){
          .skills{
              width: 65%;
          }
      }
        `}
      </style>
      <div className="d-flex flex-wrap mt-5 mb-5 mx-auto">
        {progressesData.slice(0, progressCount).map((progress, index) => (
          <div className="progresses p-3" key={index}>
            <div className="progress-ring">
              <div className="progress-ring-circle"></div>
              <div
                className="progress-ring-circle progress-ring-fill"
                style={{
                  clip: `rect(0, calc(${(progress.percent * 0.06 - 0.4)}vw + 80px), calc(6vw + 80px), 0)`,
                  transform: `rotate(${index * 45}deg)`,
                }}
              ></div>
              <div className="progress-ring-text">{progress.percent}%</div>
            </div>
            <div className="text-center mt-3 skill-name">{progress.skill}</div>
          </div>
        ))}
        {!showAll && (
          <div className="w-100 d-flex justify-content-center">
            <button className="btn btn-dark mt-4 mt-xxl-5" onClick={toggleShowAll}>
            View More
          </button>
          </div>
        )}
        {showAll &&
          progressesData.slice(progressCount).map((progress, index) => (
            <div className="progresses p-3" key={index + progressCount}>
              <div className="progress-ring">
                <div className="progress-ring-circle"></div>
                <div
                  className="progress-ring-circle progress-ring-fill"
                  style={{
                    clip: `rect(0, calc(${
                      (progress.percent / 100) * 8.1
                    }vw + 80px), calc(6vw + 80px), 0)`,
                    transform: `rotate(${(progress.percent / 100) * 360}deg)`,
                  }}
                ></div>
                <div className="progress-ring-text">{progress.percent}%</div>
              </div>
              <div className="text-center mt-3 skill-name">
                {progress.skill}
              </div>
            </div>
          ))}
        {showAll && (
          <div className="w-100 d-flex justify-content-center">
          <button className="btn btn-dark mt-4 mt-xxl-5" onClick={toggleShowAll}>
            View Less
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;