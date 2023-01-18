export interface ITheme {
  colors: {
    [key: string]: string;
  };
  sizes: {
    header: {
      height: number;
    };
    container: {
      maxWidth: number;
      minHeight: number;
    };
    avatar: {
      width: number;
      height: number;
    };
  };
  indents: {
    header: {
      paddingTop: number;
      paddingBottom: number;
      paddingRight: number;
      paddingLeft: number;
    };
  };
  borders: {
    avatar: { borderRadius: number };
  };
}
