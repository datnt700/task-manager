import { css } from "@emotion/react";
import { colors } from "../styles/Global.style.tsx";

export const buttonStyle = {
  container: css({
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }),
  image: css({
    padding: "0.3rem",
    backgroundColor: colors.dark2,
    borderRadius: "1.5rem",
  }),
  text: css({
    fontSize: "0.875rem",
    color: colors.white,
  }),
};
