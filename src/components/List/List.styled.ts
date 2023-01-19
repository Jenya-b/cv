import styled from 'styled-components';

export const Items = styled.ul`
  margin-top: ${({ theme }) => theme.indents.sectionList.marginTop}px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.sectionList.rowGap}px;

  @media ${({ theme }) => theme.media.small} {
    margin-top: ${({ theme }) => theme.indents.sectionList.marginTopSmall}px;
    row-gap: ${({ theme }) => theme.indents.sectionList.rowGapSmall}px;
  }
`;
