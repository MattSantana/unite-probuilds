import { Typography } from "@mui/material";
import React from "react";
import "./Stats.css";

export default function Stats(props) {
  return (
    <div className="stats" style={{ width: props.fullwidth ? "100%" : "80px" }}>
      <Typography variant="subtitle" align="center">
        {props.text}
      </Typography>
    </div>
  );
}
