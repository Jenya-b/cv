import styled from 'styled-components';
import { fontStylesItem, fontStylesDate } from 'styles/typography';

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

export const Date = styled.p`
  ${fontStylesDate}
  align-self: flex-start;
  margin-right: 15px;
  padding-top: 3px;
`;
