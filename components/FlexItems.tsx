import styled from "@emotion/styled";

export const FlexRow = styled.div`
  display: flex;
  flexdirection: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenterHorizontal = styled(FlexColumn)`
  justify-content: center;
`;

export const FlexColumnCenterVertical = styled(FlexColumn)`
  align-items: center;
`;

export const FlexColumnCenterBoth = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
`;

export const FlexRowCenterVertical = styled(FlexRow)`
  justify-content: center;
`;

export const FlexRowCenterHorizontal = styled(FlexRow)`
  align-items: center;
`;

export const FlexRowCenterBoth = styled(FlexRow)`
  align-items: center;
  justify-content: center;
`;
