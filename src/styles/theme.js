import { rgba } from "polished";

export const colors = {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "1.2rem",
  },
  font: {
    family:
      "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.4rem",
      xxlarge: "2.8rem",
      huge: "5.6rem",
    },
  },
  colors: {
    primary: "#D7385E",
    secondary: "#5EAD09",
    mainBg: "#222127",
    lightBg: "#F2F2F2",
    white: "#FAFAFA",
    black: "#030517",
    lightGray: "#EAEAEA",
    gray: "#C8C8C8",
    darkGray: "#565757",
    red: "#FF6347",
    transparent: rgba(0, 0, 0, 0),
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    xxxlarge: "14.2rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
};

export default colors;
