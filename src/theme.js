const fallbackFonts =
  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

const colors = {
  black: "#100C53",
  purple: "#8330ff",
  blue: "#0000C2",
  white: "#F9FCFD",
  green: "#46eca1",
  gray: "#a4a5b0",
  grayLight: "#dcdde4",
};

export default {
  colors: {
    primary: colors.black,
    secondary: colors.purple,
    ...colors,
  },
  fonts: {
    header: `"Space Grotesk",${fallbackFonts}`,
    text: `"Sora",${fallbackFonts}`,
    monospace: `"Space Mono",${fallbackFonts}`,
  },
  fontSizes: {
    text: "32px",
  },
};
