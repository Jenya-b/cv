import { css } from 'styled-components';

export const fontStylesTitle = css`
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.small} {
    font-size: 20px;
  }
`;

export const fontStylesItem = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  @media ${({ theme }) => theme.media.small} {
    font-size: 16px;
  }
`;

export const fontStylesDate = css`
  font-size: 18px;
  font-weight: 600;

  @media ${({ theme }) => theme.media.small} {
    font-size: 16px;
  }
`;

export const fontStylesProfileName = css`
  font-size: 36px;
  font-weight: 400;

  @media ${({ theme }) => theme.media.small} {
    font-size: 28px;
  }
`;

export const fontStylesProfessionName = css`
  font-size: 18px;
  font-weight: 200;

  @media ${({ theme }) => theme.media.small} {
    font-size: 16px;
  }
`;
