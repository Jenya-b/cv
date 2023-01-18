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
      paddingTop: 40,
      paddingBottom: 50,
      paddingRight: 10,
      paddingLeft: 10,
    },
    icon: {
      marginRight: 10,
    },
    section: {
      paddingRight: 60,
      paddingLeft: 60,
      rowGap: 40,
    },
    sectionList: {
      marginTop: 10,
      rowGap: 8,
    },
    mainContent: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  borders: {
    avatar: { borderRadius: 50 },
  },
};
