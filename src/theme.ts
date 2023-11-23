import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    otherColor?: {
      darkGray: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    otherColor: {
      darkGray: "#13171D",
    },
  },
});
