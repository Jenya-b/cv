import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: ${({ theme }) => theme.indents.mainContent.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.indents.mainContent.paddingBottom}px;
  background: ${({ theme }) => theme.colors.contentBackground};
  display: grid;
  grid-template: 1fr / minmax(${({ theme }) => theme.sizes.leftSection.minWidth}px, max-content) 1fr;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const Title = styled.h2``;
