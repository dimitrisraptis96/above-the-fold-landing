import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a
            href="https://www.visualeyes.design/contact/?ref=above-the-fold-plugin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://www.visualeyes.design/about/?ref=above-the-fold-plugin"
            target="_blank"
            rel="noopener noreferrer"
          >
            About us
          </a>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default FooterNav;
