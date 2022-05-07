// eslint-disable-next-line import/no-named-default
import { default as emotionStyled } from "@emotion/styled";

/**
 * Helper function to override the default styled function
 * and add support for transient styles
 *
 * @param component - The component to style
 * @param config - The config options to use
 * @returns The styled component
 */
export const styled = ((component: any, config: any) => {
  // eslint-disable-next-line no-param-reassign
  config = {
    shouldForwardProp: (prop: string) => !prop.startsWith("$"),
    ...config,
  };
  return emotionStyled(component, config);
}) as typeof emotionStyled;
/**
 * Sizes to use for spacing
 */
export enum Size {
  xs = "xs",
  sm = "sm",
  md = "md",
  l = "l",
  xl = "xl",
}

/**
 * Weights to use for font-weight
 */
export enum Weight {
  light = "light",
  normal = "normal",
  medium = "medium",
  bold = "bold",
  extrabold = "extrabold",
  black = "black",
}

/**
 * Utility class to store common styles
 */
export class StyleUtils {
  static Spacing: Record<Size | "default", string> = {
    [Size.xs]: ".3em",
    [Size.sm]: ".5em",
    [Size.md]: "1em",
    [Size.l]: "1.5em",
    [Size.xl]: "2em",
    default: "1em",
  };

  static FontWeight: Record<Weight | "default", string> = {
    [Weight.light]: "50",
    [Weight.normal]: "100",
    [Weight.medium]: "300",
    [Weight.bold]: "700",
    [Weight.extrabold]: "800",
    [Weight.black]: "900",
    default: "100",
  };

  static FontSize: Record<Size | "default", string> = {
    [Size.xs]: "1rem",
    [Size.sm]: "1.5rem",
    [Size.md]: "2rem",
    [Size.l]: "2.5rem",
    [Size.xl]: "3rem",
    default: "1em",
  };

  static BorderRadius = {
    default: { borderRadius: ".5em" },
    fullyRounded: { borderRadius: "50em" },
  } as const;
}
