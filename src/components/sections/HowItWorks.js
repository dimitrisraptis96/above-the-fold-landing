import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const HowItWorks = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "How It Works",
    paragraph:
      "We built Above the Fold plugin for the designers that want to quick check where is the Above the Fold section",
  };

  return (
    <section {...props} className={outerClasses} id="how">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Gather Data</h4>
                  <p className="m-0 text-sm">
                    We gathered the most common viewport sizes around the web.
                    Viewport is the area where Browsers load the web pages and
                    >90%* is different to the user's screen size.{" "}
                    <div
                      style={{
                        color: "rgba(255, 255, 255, 0.4)",
                        fontSize: "12px",
                        lineHeight: "150%",
                        marginTop: "1rem",
                      }}
                    >
                      *Viewport and Screen size are the same only when the user
                      is on fullscreen mode!
                    </div>
                    {/* https://css-tricks.com/screen-resolution-notequalto-browser-window/ */}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Aggregate dimensions</h4>
                  <p className="m-0 text-sm">
                    Then, we categorized the viewport sizes per device type
                    (desktop/mobile/tablet) and aggragated them to shape each
                    category. Also, we added the <b>danger zone*</b> which
                    pinpoint a possible unsafe area.
                    <div
                      style={{
                        color: "rgba(255, 255, 255, 0.4)",
                        fontSize: "12px",
                        lineHeight: "150%",
                        marginTop: "1rem",
                      }}
                    >
                      *Danger zone is an offset based on OS and browser's
                      navigation bars that vary per user.
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Fit to your Artboard</h4>
                  <p className="m-0 text-sm">
                    When we analyze your Artboard, the variables are your
                    Artboard's dimensions and the target device. The final
                    results respect the ratio of your canvas to eliminate scale
                    inconsistencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HowItWorks.propTypes = propTypes;
HowItWorks.defaultProps = defaultProps;

export default HowItWorks;
