import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress style={{ color: "#48c3f4" }} size="4rem" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
