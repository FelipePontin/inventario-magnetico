import React from "react";

import InstagramIcon from "../../images/instagram_icon.png";
import TiktokIcon from "../../images/tiktok_icon.png";
import YoutubeIcon from "../../images/youtube_icon.png";

import "./BannerSection.css";

export interface BannerSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  alt?: string;
  altIcon?: string;
  imageText?: string;
  imagePosition?: "left" | "right";
  socialMedia?: boolean;
}

const BannerSection = ({
  title,
  subtitle,
  image,
  alt,
  altIcon,
  imageText,
  imagePosition,
  socialMedia,
}: BannerSectionProps) => {
  const positions: Record<string, string> = {
    left: "bannerSection--left",
    right: "bannerSection--right",
  };

  return (
    <section className={`bannerSection ${positions[imagePosition ?? "left"]}`}>
      <img className="bannerSection__image" src={image} alt={alt} />
      <div className="bannerSection__content">
        <div className="bannerSection__title--division">
          {imageText && (
            <img className="bannerSection__image--text" src={imageText} alt={altIcon} />
          )}
          <h1 className="bannerSection__title">{title}</h1>
        </div>
        <div
          className="bannerSection__subtitle"
          dangerouslySetInnerHTML={{ __html: subtitle ?? "" }}
        ></div>
        {socialMedia && (
          <div className="bannerSection__social">
            <a href="https://www.instagram.com/inventariomagnetico">
              <img
                className="bannerSection__social--icon"
                src={InstagramIcon.src}
              />
            </a>
            <a href="https://www.tiktok.com/@inventariomagnetico">
              <img
                className="bannerSection__social--icon"
                src={TiktokIcon.src}
              />
            </a>
            <a href="https://www.youtube.com/@InventárioMagnético">
              <img
                className="bannerSection__social--icon"
                src={YoutubeIcon.src}
              />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
