import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-right: ${({ theme }) => theme.indents.section.paddingRight}px;
  padding-left: ${({ theme }) => theme.indents.section.paddingLeft}px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.section.rowGap}px;
`;
