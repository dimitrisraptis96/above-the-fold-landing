import React from "react";
import Button from "../elements/Button";
import { SketchIcon } from "./Icons";

const DownloadButton = ({ style }) => {
  return (
    <Button
      tag="a"
      color="primary"
      wideMobile
      href="https://www.visualeyes.design/"
      style={{
        background: "#FEEEB7",
        color: "#9A5B00",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <SketchIcon size={20} style={{ margin: "0 .5rem 0 0" }} />
      Download Plugin
    </Button>
  );
};

export default DownloadButton;
