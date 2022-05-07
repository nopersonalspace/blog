export interface Theme {
  /** The Colors to use */
  color: {
    /** Primary Color */
    primary: string;
    /** Secondary Color */
    secondary: string;
    /** Tertiary Color */
    tertiary: string;
    /** Background Color */
    background: string;
  };
}

export const theme = {
  color: {
    primary: "#00bcd4",
    secondary: "#fafafa",
    tertiary: "#fafafa",
    background: "#1c1e26",
  },
};
