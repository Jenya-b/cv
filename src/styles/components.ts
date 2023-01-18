import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  min-height: ${({ theme }) => theme.sizes.container.minHeight}vh;
  max-width: ${({ theme }) => theme.sizes.container.maxWidth}px;
  margin: 0 auto;
  display: grid;
  grid-template: minmax(${({ theme }) => theme.sizes.header.height}px, auto) 1fr / 1fr;
`;
