// eslint-disable-next-line import/no-named-default
import { default as emotionStyled } from "@emotion/styled";
import { styled, WithStyles } from "@main/utils";
import React, { useState } from "react";

interface StyledCardProps {
  /** show the pointer cursor */
  $showPointer?: boolean;
}

const Div = emotionStyled.div``;
const StyledCard = styled(Div)<StyledCardProps>`
  border-width: 1px;
  box-shadow: 2px 3px 6px 1px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 2px 3px 6px 1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 2px 3px 6px 1px rgba(0, 0, 0, 0.51);
  border-radius: 16px;
  cursor: ${({ $showPointer }) => ($showPointer ? "pointer" : "default")};
  background: ${({ theme }) => theme.colors.darkBlue};
`;

interface CardProps {
  /** The children to render in the card */
  children?: React.ReactNode;
  /** Action to perform on click */
  onClick?: () => void;
}

export const Card: React.FC<CardProps & WithStyles> = ({
  children,
  onClick,
  ...otherProps
}) => {
  // TODO: Eventually do something here, when it is hovered
  const [, setHovered] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      $showPointer={!!onClick}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StyledCard>
  );
};
