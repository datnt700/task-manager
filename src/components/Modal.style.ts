import { css } from "@emotion/react";
import { colors } from "../styles/Global.style.tsx";

export const modalStyle = {
  modalBackground: css({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "350px",
    display: "none",
  }),
  active: css({
    display: "block",
  }),
  modalContainer: css({
    padding: "1rem",
    backgroundColor: colors.dark1,
  }),
  title: css({
    fontSize: "1.25rem",
    color: colors.white,
  }),
  body: css({
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    color: colors.gray,
    fontSize: "0.75rem",

    input: {
      backgroundColor: "transparent",
      padding: "1rem",
      border: `1px solid ${colors.dark2}`,
      borderRadius: "0.75rem",
      color: colors.white,
      outline: "none",
      "::placeholder": {
        color: colors.dark2,
      },
    },
  }),
  listLogo: css({
    marginTop: "1.5rem",
    color: colors.gray,
    fontSize: "0.75rem",
  }),
  logoItem: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "1.1rem",
    img: {
      padding: "0.2rem 0.01rem",
    },
  }),
  activeHover: css({
    backgroundColor: colors.blue,
    borderRadius: "1.75rem",
  }),
  buttonIcon: css({
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
  }),
  footer: css({
    display: "flex",
    marginTop: "1.2rem",
    gap: "0.5rem",
  }),
  btn: css({
    padding: "0.5rem 1rem",
    borderRadius: "1.75rem",
  }),

  create: css({
    border: "none",
    backgroundColor: colors.blue,
    color: colors.white,
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  }),
  cancel: css({
    color: colors.gray,
    border: `1px solid ${colors.gray}`,
    backgroundColor: "transparent",
  }),
};
