import { ITheme } from 'interfaces/styled';

export const baseTheme: ITheme = {
  colors: {
    mainBackground: '#d5d5d5',
    headerBackground: '#222a35',
    contentBackground: '#ffffff',
    headerColor: '#f8fdf7',
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
  },
  indents: {
    header: {
      paddingTop: 40,
      paddingBottom: 50,
      paddingRight: 10,
      paddingLeft: 10,
    },
  },
  borders: {
    avatar: { borderRadius: 50 },
  },
};
