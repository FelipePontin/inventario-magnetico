import React from "react";
import "./Button.css";

export interface ButtonProps {
  text?: string;
  href?: string;
}

const Button = ({ text, href }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className="button">
        {text}
      </a>
    );
  }

  return <button className="button">{text}</button>;
};

export default Button;
