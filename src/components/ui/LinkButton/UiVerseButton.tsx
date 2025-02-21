import React from "react";
import "../css/uiverse-style.css";
import Link from "next/link";

const UiVerseButton = ({
  href,
  icon,
  text,
}: {
  href?: string;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <>
      {href ? (
        <Link href={href} className="uiverse-button">
          <span className="uiverse-button__text">{text}</span>
          <span className="uiverse-button__icon">{icon}</span>
        </Link>
      ) : (
        <button className="uiverse-button">
          <span className="uiverse-button__text">{text}</span>
          <span className="uiverse-button__icon">{icon}</span>
        </button>
      )}
    </>
  );
};

export default UiVerseButton;
