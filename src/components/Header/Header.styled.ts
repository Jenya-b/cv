import styled from 'styled-components';
import { fontStylesProfessionName, fontStylesProfileName } from 'styles/typography';

export const StyledHeader = styled.header`
  padding-top: ${({ theme }) => theme.indents.header.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.indents.header.paddingBottom}px;
  padding-right: ${({ theme }) => theme.indents.header.paddingRight}px;
  padding-left: ${({ theme }) => theme.indents.header.paddingLeft}px;
  background: ${({ theme }) => theme.colors.headerBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.headerColor};
  letter-spacing: 2px;
`;

export const Avatar = styled.div`
  width: ${({ theme }) => theme.sizes.avatar.width}px;
  height: ${({ theme }) => theme.sizes.avatar.height}px;
  border-radius: ${({ theme }) => theme.borders.avatar.borderRadius}%;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const ProfileName = styled.div`
  ${fontStylesProfileName}
`;
export const ProfessionName = styled.div`
  ${fontStylesProfessionName}
`;
