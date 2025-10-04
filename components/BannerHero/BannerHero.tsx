import React from "react";

import Button from "../Button/Button";

import "./BannerHero.css";

export interface BannerHeroProps {
  title?: string;
  subtitle?: string;
  background?: string;
  image?: string;
  alt?: string;
  buttonText?: string;
  buttonLink?: string;
}

const BannerHero = ({
  title,
  subtitle,
  background,
  image,
  alt,
  buttonText,
  buttonLink,
}: BannerHeroProps) => {
  return (
    <section
      className="bannerHero"
      style={{
        backgroundImage: background ? `url("${background}")` : undefined,
      }}
      role="img"
      aria-label={alt}
    >
      <img
        className="bannerHero__image"
        src={image}
        alt={"Imagem logo Clash Royale Inventario Magnetico"}
      ></img>
      <h1 className="bannerHero__title">{title}</h1>
      <p className="bannerHero__subtitle">{subtitle}</p>
      <Button href={buttonLink} text={buttonText} />
    </section>
  );
};

export default BannerHero;
