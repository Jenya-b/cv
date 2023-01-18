import styled from 'styled-components';

export const Items = styled.ul`
  margin-top: ${({ theme }) => theme.indents.sectionList.marginTop}px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.sectionList.rowGap}px;
`;
