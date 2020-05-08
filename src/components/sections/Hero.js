import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import DownloadButton from "../custom/DownloadButton";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { SketchIcon, FigmaIcon, AdobeXDIcon } from "../custom/Icons";
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Above the Fold plugin for{" "}
              <span className="text-color-primary" style={{ color: "#FEEEB7" }}>
                Sketch
              </span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Make sure all your important elements are in the 1st screenful.
                Above the Fold support Desktop, Mobile and Tablet viewports.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <DownloadButton />
                  {/* <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button> */}
                </ButtonGroup>
              </div>
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                style={{ fontSize: "12px", marginTop: "1rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Soon available for{" "}
                  <FigmaIcon style={{ margin: "0.5rem" }} size={16} />
                  and
                  <AdobeXDIcon style={{ margin: "0.5rem" }} size={16} />
                </div>
                <a
                  href="https://draptis.typeform.com/to/RiaAZD"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  Join the waiting list
                  <Image
                    src={require("./../../assets/images/external-link-outline.svg")}
                    alt="Open"
                    width={16}
                    height={16}
                    style={{ width: "16px", margin: "0 0 0 .5rem" }}
                  />
                </a>
              </p>
            </div>
          </div>
          <div
            className="hero-figure  illustration-element-01"
            // data-reveal-distance="20px"
            // data-reveal-delay="1200"
          >
            <a
              // data-video="https://player.vimeo.com/video/174002812"
              data-video="https://www.youtube.com/embed/sLgSEIOgihA"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/hero.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/sLgSEIOgihA"
            // video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
