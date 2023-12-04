import { styled, Button } from "@mui/material";

export const CustomContainer = styled("div")({
  margin: "0 auto",
  width: "100%",
  height: "100%",
  maxWidth: "1280px",
  padding: "0 20px",
});

export const TransparentToFullBtn = styled(Button)(({}) => ({
  textTransform: "none",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  padding: "20px 69px",
  borderRadius: "20px",
  background: `linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)`,
  position: "relative",
  zIndex: 1,
  color: "#E2E2E2",
  fontFamily: "Work Sans",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "24px",
  transition: "500ms",

  "&::before": {
    content: '""',
    position: "absolute",
    left: "1px",
    right: "1px",
    top: "1px",
    bottom: "1px",
    borderRadius: "19px",
    background: "#13171D",
    zIndex: "-1",
    transition: "500ms",
  },
  "&:hover::before": {
    "@media (hover: hover) and (pointer: fine)": {
      background: "transparent",
    },
  },
  // "&:hover::before": {
  //   background: "transparent",
  // },
}));

export const FullToTransparentBtn = styled(Button)(({}) => ({
  textTransform: "none",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  padding: "20px 69px",
  borderRadius: "20px",
  background: `linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)`,
  position: "relative",
  zIndex: 1,
  color: "#E2E2E2",
  fontFamily: "Work Sans",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "24px",
  transition: "all 400ms ease-in-out",

  "&::before": {
    content: '""',
    position: "absolute",
    left: "1px",
    right: "1px",
    top: "1px",
    bottom: "1px",
    borderRadius: "19px",
    zIndex: "-1",
    opacity: "0",
    transition: "all 400ms ease-in-out",
    background: "linear-gradient(214deg, #482B8D 5.44%, #180C33 94.54%)",
  },
  "&:hover::before": {
    "@media (hover: hover) and (pointer: fine)": {
      opacity: "1",
    },
  },
}));

export const Title = styled("h2")(({ theme }) => ({
  color: "#E2E2E2",
  textAlign: "center",
  fontFamily: "Anton",
  fontSize: "48px",
  fontWeight: "400",
  lineHeight: "60px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    lineHeight: "40px",
  },
}));

export const Overview = styled("p")(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "1040px",
  width: "100%",
  marginTop: "16px",
  color: "#E2E2E2",
  textAlign: "center",
  fontFamily: "Work Sans",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "32px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    lineHeight: "24px",
  },
}));
