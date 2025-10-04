import React from "react";

import Button from "../Button/Button";

import "./Banner.css";

export interface BannerProps {
  title?: string;
  subtitle?: string;
  background?: string;
  alt?: string;
  buttonText?: string;
  buttonLink?: string;
  textPosition?: "left" | "right" | "center";
}

const Banner = ({
  title,
  subtitle,
  background,
  alt,
  buttonText,
  buttonLink,
  textPosition,
}: BannerProps) => {
  const positions: Record<string, string> = {
    left: "banner--left",
    center: "banner--center",
    right: "banner--right",
  };

  return (
    <section
      className={`banner ${positions[textPosition ?? "left"]}`}
      style={{
        backgroundImage: background ? `url("${background}")` : undefined,
        backgroundPosition:
          textPosition === "right" ? "right center" : "left center",
      }}
      role="img"
      aria-label={alt}
    >
      <div className="banner__content">
        <h1 className="banner__title">{title}</h1>
        <p className="banner__subtitle">{subtitle}</p>
        <Button href={buttonLink} text={buttonText} />
      </div>
    </section>
  );
};

export default Banner;
