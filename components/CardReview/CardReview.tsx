import React from "react";

import { reviews } from "./reviews";

import VerifyIcon from "../../images/verify_icon.png";
import StarIcon from "../../images/star_icon.png";

import "./CardReview.css";

export interface CardReviewProps {
  title?: string;
  subtitle?: string;
  imageIcon?: string;
}

const CardReview = ({ title, subtitle, imageIcon }: CardReviewProps) => {
  return (
    <section className="cardReview">
      <div className="cardReview__title--division">
        <img className="cardReview__icon" src={imageIcon} alt='Imagem Icone coração Clash Royale Inventario Magnetico' />
        <h1 className="cardReview__title">{title}</h1>
      </div>
      <p className="cardReview__subtitle">{subtitle}</p>
      <div className="cardReview__content">
        {reviews.map((item, id) => {
          return (
            <div className="cardReview__card" key={id}>
              <img className="cardReview__verify" src={VerifyIcon.src} />
              {/* <img className="cardReview__image" src={item.image} /> */}
              <div className="cardReview__stars">
                <img className="cardReview__star" src={StarIcon.src} alt='Imagem estrela avaliação Clash Royale Inventario Magnetico' />
                <img className="cardReview__star" src={StarIcon.src} alt='Imagem estrela avaliação Clash Royale Inventario Magnetico' />
                <img className="cardReview__star" src={StarIcon.src} alt='Imagem estrela avaliação Clash Royale Inventario Magnetico' />
                <img className="cardReview__star" src={StarIcon.src} alt='Imagem estrela avaliação Clash Royale Inventario Magnetico' />
                <img className="cardReview__star" src={StarIcon.src} alt='Imagem estrela avaliação Clash Royale Inventario Magnetico' />
              </div>
              <p className="cardReview__review">{item.review}</p>
              <p className="cardReview__name">- {item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardReview;
