import { styled } from "@mui/material";

export const CustomContainer = styled("div")({
  margin: "0 auto",
  width: "100%",
  height: "100%",
  maxWidth: "1280px",
  padding: "0 20px",
});

export const TransparentToFullBtn = styled("button")(({ theme }) => ({
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
    backgroundColor: "#13171D",
    zIndex: "-1",
    transition: "500ms",
  },
  "&::after": {
    content: '""',
  },
  "&:hover::before": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down(1024)]: {
    display: "none",
  },
}));

export const FullToTransparentBtn = styled("button")(({ theme }) => ({
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
    opacity: "1",
  },
  [theme.breakpoints.down(1024)]: {
    display: "none",
  },
}));
