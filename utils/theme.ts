export interface Theme {
  /** The Colors to use */
  colors: Record<keyof typeof theme.colors, string>;
  /** The radius */
  radii: Record<keyof typeof theme.radii, string>;
  /** Font sizes to use */
  fontSizes: string[];
}

export const theme = {
  colors: {
    primary: "#f26b38",
    secondary: "#b83e5c",
    tertiary: "#1c1e26",
    background: "#1c1e26",

    orange: "#f26b38",
    orange1: "#F2612C",
    orange2: "#F05219",
    orange3: "#E6480F",
    orange4: "#D3420D",

    purple: "#b83e5c",
    purple1: "#A83854",
    purple2: "#99334C",
    purple3: "#8A2E45",
    purple4: "#7A293D",

    darkBlue: "#1c1e26",

    white: "#eee",
    blue: "#07c",
    lightgray: "#f6f6ff",
  },

  radii: {
    default: ".5em",
    fullyRounded: "50em",
  },

  fontSizes: [
    "0.833rem",
    "1rem",
    "1.2rem",
    "1.44rem",
    "1.728rem",
    "2.074rem",
    "2.488rem",
    "2.986rem",
  ],
};

export const lightTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#eee",
  },
};
