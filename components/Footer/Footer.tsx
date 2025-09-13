import React from "react";

import "./Footer.css";

export interface FooterProps {
  text?: string;
  background?: string;
}

const Footer = ({ text, background }: FooterProps) => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: background ? `url("${background}")` : undefined,
      }}
    >
      <p className="footer__text">{text}</p>
    </footer>
  );
};

export default Footer;
