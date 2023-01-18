import styled from 'styled-components';
import { fontStylesItem } from 'styles/typography';

export const Icon = styled.div`
  width: ${({ theme }) => theme.sizes.icon.width}px;
  height: ${({ theme }) => theme.sizes.icon.height}px;
  margin-right: ${({ theme }) => theme.indents.icon.marginRight}px;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Desc = styled.p`
  ${fontStylesItem}
`;
