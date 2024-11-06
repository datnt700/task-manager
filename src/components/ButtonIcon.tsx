/** @jsxImportSource @emotion/react */

import { buttonIconStyle } from "./ButtonIcon.style.ts";

interface ButtonIconProp {
  onClick: (e: React.MouseEvent<HTMLButtonElement> | string) => void;
  src: string;
  text: string;
}

export const ButtonIcon = ({ onClick, src, text }: ButtonIconProp) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
  };
  return (
    <button onClick={handleClick} css={buttonIconStyle.container}>
      <img src={src} alt={"icon"} css={buttonIconStyle.image} />
      <span css={buttonIconStyle.text}>{text}</span>
    </button>
  );
};
