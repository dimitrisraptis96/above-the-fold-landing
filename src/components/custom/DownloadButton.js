import React from "react";
import Button from "../elements/Button";
import { SketchIcon } from "./Icons";

const DownloadButton = ({}) => {
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
      }}
    >
      <SketchIcon size={20} style={{ marginRight: ".5rem" }} />
      Download Plugin
    </Button>
  );
};

export default DownloadButton;
