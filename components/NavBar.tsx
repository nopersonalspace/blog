import styled from "@emotion/styled";
import { useClickOutside } from "@mantine/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { MenuButton } from "theme-ui";

import { FlexColumn, FlexRowCenterHorizontal } from "./FlexItems";

interface NavBarProps {
  /** The children to render in the card */
  children?: React.ReactNode;
  /** If true, will only show the hamburger menu */
  menuMode?: boolean;
}

const StyledNavBar = styled(FlexRowCenterHorizontal)`
  width: 100%;
`;

const ChildrenContainer = styled.div<{
  /** Blur the contents of the container */
  blur: boolean;
}>`
  ${({ blur }) =>
    blur &&
    `
    -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -ms-filter: blur(4px);
  -o-filter: blur(4px);
  filter: blur(4px);
  `}
`;

const NavMenuWrapper = styled(FlexColumn)`
  height: 100vh;
  background: #aaaaca;
  display: block;
  position: fixed;
  top: 0;
  padding: 0px 5px 5px 5px;
  z-index: 1;
  min-width: 300px;
`;

export const NavBar: React.FC<NavBarProps> = ({ children, menuMode }) => {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <div>
      {opened && (
        <div ref={ref}>
          <NavMenuWrapper>
            <h1 style={{ margin: 0 }}>NavBar</h1>
            <Link href="/">
              <h3>Home</h3>
            </Link>
          </NavMenuWrapper>
        </div>
      )}
      <ChildrenContainer blur={opened}>
        {!menuMode ? (
          <StyledNavBar>
            <MenuButton onClick={() => setOpened(true)} />
            <h1 style={{ margin: 0 }}>No Personal Space</h1>
          </StyledNavBar>
        ) : (
          <MenuButton
            style={{ margin: "5px", position: "fixed" }}
            onClick={() => setOpened(true)}
          />
        )}

        {children}
      </ChildrenContainer>
    </div>
  );
};
