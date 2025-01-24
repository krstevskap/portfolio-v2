import React from "react";

const StrippedPattern = () => {
  return (
    <div
      style={{
        backgroundColor: "none",
        backgroundImage:
          "repeating-linear-gradient(45deg, #48c3f4 0px, #48c3f4 10px, transparent 10px, transparent 20px)",
        width: "100%",
        height: "30px",
      }}
    ></div>
  );
};

export default StrippedPattern;
