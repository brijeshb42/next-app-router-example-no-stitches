// @ts-ignore
import { styled } from "no-stitches/runtime";

export const Header = styled("header", {
  width: "100%",
  position: "sticky",
  top: 0,
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(255,255,255,0.8)",
});

export const Container = styled("div", {
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "flex",
  justifyContent: "space-between",
  px: 2,
  alignItems: "center",
  minHeight: "56px",
  // [theme.breakpoints.up("sm")]: {
  //   px: 3,
  // },
  // [theme.breakpoints.up("lg")]: {
  //   maxWidth: 1200,
  // },
});
