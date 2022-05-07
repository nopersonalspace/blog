import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Button as ThemeButton, Spinner } from "theme-ui";

export const ButtonWrapper = styled(motion(ThemeButton))<{
  /** The colors to use */
  variant: "primary" | "secondary";
}>`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.orange : theme.colors.purple};

  &:hover {
    background: ${({ variant, theme }) =>
      variant === "primary" ? theme.colors.orange2 : theme.colors.purple1};
  }
`;

interface ButtonProps {
  /** The children to render in the card */
  children?: React.ReactNode;
  /** Variant of button */
  variant?: "primary" | "secondary";
  /** Action to perform on button press */
  onClick?: () => void;
  /** is the button loading? */
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  loading,
  ...props
}) => (
  <ButtonWrapper
    variant={variant ?? "primary"}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    {...props}
  >
    {loading ? <Spinner size={15} style={{ color: "white" }} /> : children}
  </ButtonWrapper>
);
