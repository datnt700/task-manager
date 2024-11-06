import { css } from "@emotion/react";
import { colors } from "../styles/Global.style.tsx";

export const sideBarStyle = {
  sideBarClose: css({
    width: "5rem",
    backgroundColor: colors.dark,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    paddingTop: "1rem",
  }),
  container: css({
    width: "100%",
    position: "relative",
  }),
  sideBarOpen: css({
    width: "100%",
    height: "100vh",
    position: "absolute",
    backgroundColor: colors.dark,
    transform: "translateX(-100%)",
    transition: "all 0.3s ease-in",
    padding: "1rem ",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }),
  active: css({
    transform: "translateX(0)",
    "@media screen and (min-width: 1024px)": {
      width: "20%",
    },
  }),
};
