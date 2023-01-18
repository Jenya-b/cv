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
    icon: {
      width: number;
      height: number;
    };
    leftSection: {
      minWidth: number;
    };
  };
  indents: {
    header: {
      paddingTop: number;
      paddingBottom: number;
      paddingRight: number;
      paddingLeft: number;
    };
    icon: {
      marginRight: number;
    };
    section: {
      paddingRight: number;
      paddingLeft: number;
      rowGap: number;
    };
    sectionList: {
      marginTop: number;
      rowGap: number;
    };
    mainContent: {
      paddingTop: number;
      paddingBottom: number;
    };
  };
  borders: {
    avatar: { borderRadius: number };
  };
}
