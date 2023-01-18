import styled from 'styled-components';

interface StyledSectionProps {
  line?: boolean;
}

export const StyledSection = styled.section<StyledSectionProps>`
  padding-right: ${({ theme }) => theme.indents.section.paddingRight}px;
  padding-left: ${({ theme }) => theme.indents.section.paddingLeft}px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.section.rowGap}px;
  border-right: ${({ line }) => (line ? '2px solid #c1c1c18f' : '')};
`;
