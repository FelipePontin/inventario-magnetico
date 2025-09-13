import React from "react";

import "./BannerSection.css";

export interface BannerSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageText?: string;
  imagePosition?: "left" | "right";
}

const BannerSection = ({
  title,
  subtitle,
  image,
  imageText,
  imagePosition,
}: BannerSectionProps) => {
  const positions: Record<string, string> = {
    left: "bannerSection--left",
    right: "bannerSection--right",
  };

  return (
    <section className={`bannerSection ${positions[imagePosition ?? "left"]}`}>
      <img className="bannerSection__image" src={image} />
      <div className="bannerSection__content">
        <div className="bannerSection__title--division">
          <img className="bannerSection__image--text" src={imageText} />
          <h1 className="bannerSection__title">{title}</h1>
        </div>
        <div
          className="bannerSection__subtitle"
          dangerouslySetInnerHTML={{ __html: subtitle ?? "" }}
        ></div>
      </div>
    </section>
  );
};

export default BannerSection;
