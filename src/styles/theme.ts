import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    highlight: "#FFBA08",
    // dark mod
    darkBlack: "#000000",
    darkHeadingAndText: "#47585B",
    darkInfo: "#999999",

    // light mod
    lightWhite: "#FFFFFF",
    lightHeadingAndText: "#F5F8FA",
    lightInfo: "#F5F8FA",

    info: "#DADADA",
  },
  styles: {
    global: {
      body: {
        bg: "#f5f8fa",
      },
      gui: "#ffff",
    },
  },
});
