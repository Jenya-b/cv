import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: ${({ theme }) => theme.indents.mainContent.padding};
  background: ${({ theme }) => theme.colors.contentBackground};
  display: grid;
  grid-template: 1fr / minmax(${({ theme }) => theme.sizes.leftSection.minWidth}px, max-content) 1fr;
  color: ${({ theme }) => theme.colors.mainText};

  @media ${({ theme }) => theme.media.medium} {
    grid-template-columns: 1fr;
    row-gap: ${({ theme }) => theme.indents.section.rowGap}px;
  }

  @media ${({ theme }) => theme.media.medium} {
    padding: ${({ theme }) => theme.indents.mainContent.paddingMedium};
  }

  @media ${({ theme }) => theme.media.small} {
    row-gap: ${({ theme }) => theme.indents.section.rowGapSmall}px;
  }
`;

export const Title = styled.h2``;
