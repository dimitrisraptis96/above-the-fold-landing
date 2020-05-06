import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div
      {...props}
      className={classes}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <h1 className="m-0" style={{ marginRight: ".5rem" }}>
        <Link to="/">
          <Image
            // src={require('./../../../assets/images/logo.svg')}
            src={require("./../../../assets/images/atf-logo.svg")}
            alt="Open"
            width={32}
            height={32}
          />
        </Link>
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            margin: 0,
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {" "}
          Above The Fold
        </p>
        <a
          href="https://www.visualeyes.design/?ref=above-the-fold-plugin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "contents", marginTop: "0.25rem" }}
        >
          <small style={{ margin: 0, fontSize: "12px", lineHeight: "100%" }}>
            By VisualEyes.design
          </small>
        </a>
      </div>
    </div>
  );
};

export default Logo;
