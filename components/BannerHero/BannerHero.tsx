import React from "react";

import Button from "../Button/Button";

import "./BannerHero.css";

export interface BannerHeroProps {
  title?: string;
  subtitle?: string;
  background?: string;
  image?: string;
  buttonText?: string;
}

const BannerHero = ({
  title,
  subtitle,
  background,
  image,
  buttonText,
}: BannerHeroProps) => {
  return (
    <section
      className="bannerHero"
      style={{
        backgroundImage: background ? `url("${background}")` : undefined,
      }}
    >
      <img className="bannerHero__image" src={image}></img>
      <h1 className="bannerHero__title">{title}</h1>
      <p className="bannerHero__subtitle">{subtitle}</p>
      <Button text={buttonText} />
    </section>
  );
};

export default BannerHero;
