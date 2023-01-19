import styled from 'styled-components';

interface StyledSectionProps {
  line?: boolean;
}

export const StyledSection = styled.section<StyledSectionProps>`
  padding: ${({ theme }) => theme.indents.section.padding};
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.section.rowGap}px;
  border-right: ${({ line }) => (line ? '2px solid #c1c1c18f' : '')};

  @media ${({ theme }) => theme.media.large} {
    padding: ${({ theme }) => theme.indents.section.paddingLarge};
  }

  @media ${({ theme }) => theme.media.medium} {
    padding: ${({ theme }) => theme.indents.section.paddingMedium};
  }

  @media ${({ theme }) => theme.media.small} {
    row-gap: ${({ theme }) => theme.indents.section.rowGapSmall}px;
  }
`;
