import React from "react";

const Skills = () => {
  return(
    <div className="d-flex flex-wrap w-50 mx-auto">
      <style>
        {`
        .progress-ring {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 20px auto;
        }
        
        .progress-ring-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 3px solid rgb(0, 172, 172,0.3);
          border-radius: 50%;
          box-sizing: border-box;
        }
        
        .progress-ring-fill {
          border-color: teal;
          clip: rect(0, 180px, 200px, 0);
        }
        
        .progress-ring-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          font-weight: bold;
        }
        `}
      </style>
      <div className="progress-ring">
  <div className="progress-ring-circle"></div>
  <div className="progress-ring-circle progress-ring-fill"></div>
  <div className="progress-ring-text text-white">75%</div>
</div>
<div className="progress-ring">
  <div className="progress-ring-circle"></div>
  <div className="progress-ring-circle progress-ring-fill"></div>
  <div className="progress-ring-text text-white">75%</div>
</div>
<div className="progress-ring">
  <div className="progress-ring-circle"></div>
  <div className="progress-ring-circle progress-ring-fill"></div>
  <div className="progress-ring-text text-white">75%</div>
</div>
<div className="progress-ring">
  <div className="progress-ring-circle"></div>
  <div className="progress-ring-circle progress-ring-fill"></div>
  <div className="progress-ring-text text-white">75%</div>
</div>
 </div>
  )
}

export default Skills;