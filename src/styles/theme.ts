import { ITheme } from 'interfaces/styled';

export const baseTheme: ITheme = {
  colors: {
    mainBackground: '#d5d5d5',
    headerBackground: '#222a35',
    contentBackground: '#ffffff',
    headerColor: '#f8fdf7',
    mainText: '#383838',
  },
  sizes: {
    header: {
      height: 300,
    },
    container: {
      maxWidth: 1200,
      minHeight: 100,
    },
    avatar: {
      width: 130,
      height: 130,
    },
    icon: {
      width: 18,
      height: 18,
    },
    leftSection: {
      minWidth: 300,
    },
  },
  indents: {
    header: {
      padding: '40px 10px 30px 10px',
    },
    icon: {
      marginRight: 10,
    },
    section: {
      padding: '0px 100px 0px 80px',
      paddingLarge: '0px 30px 0px 60px',
      paddingMedium: '0px 30px 0px 30px',
      rowGap: 40,
      rowGapSmall: 20,
    },
    sectionList: {
      marginTop: 10,
      rowGap: 8,
      marginTopSmall: 6,
      rowGapSmall: 4,
    },
    mainContent: {
      padding: '50px 0',
      paddingMedium: '30px 0',
    },
  },
  borders: {
    avatar: { borderRadius: 50 },
  },
  media: {
    large: '(max-width: 1000px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 480px)',
  },
};
