import React from "react";

const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full rounded-full bg-white h-2.5 border my-2">
      <div
        className="rounded-full bg-black h-2.5"
        style={{ width: `${progress}` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
