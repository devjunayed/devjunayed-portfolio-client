import React from "react";
import "../css/uiverse-style.css";
import Link from "next/link";

const UiVerseButton = ({
  href,
  icon,
  text,
  onClick
}: {
  href?: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <>
      {href ? (
        <Link href={href} className="uiverse-button">
          <span className="uiverse-button__text">{text}</span>
          <span className="uiverse-button__icon">{icon}</span>
        </Link>
      ) : (
        <button onClick={onClick} className="uiverse-button">
          <span className="uiverse-button__text">{text}</span>
          <span className="uiverse-button__icon">{icon}</span>
        </button>
      )}
    </>
  );
};

export default UiVerseButton;
