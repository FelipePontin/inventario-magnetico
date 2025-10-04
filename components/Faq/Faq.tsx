"use client";

import React, { useState } from "react";

import { questions } from "./questions";

import "./Faq.css";

export interface FaqProps {
  title?: string;
  image?: string;
  alt?: string;
  background?: string;
}

const Faq = ({ title, image, alt, background }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      className="faq"
      style={{
        backgroundImage: background ? `url("${background}")` : undefined,
      }}
    >
      <img className="faq__image" src={image} alt={alt} />
      <div className="faq__division">
        <h1 className="faq__title">{title}</h1>
        <div className="faq__questions">
          {questions.map((item, index) => (
            <div key={index} className="faq__question">
              <button onClick={() => toggleFAQ(index)} className="faq__button">
                {item.question}
                <span className="faq__icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq__anwser">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
