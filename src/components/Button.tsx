/** @jsxImportSource @emotion/react */

import { buttonStyle } from "./Button.style.ts";

interface ButtonProp {
  onClick: (e: React.MouseEvent<HTMLButtonElement> | string) => void;
  icon: string;
  text: string;
}

export const Button = ({ onClick, icon, text }: ButtonProp) => {
  return (
    <button onClick={onClick} css={buttonStyle.container}>
      {icon && <img src={icon} alt={"icon"} css={buttonStyle.image} />}
      {text && <span css={buttonStyle.text}>{text}</span>}
    </button>
  );
};
