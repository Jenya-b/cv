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
      padding: string;
    };
    icon: {
      marginRight: number;
    };
    section: {
      padding: string;
      paddingLarge: string;
      paddingMedium: string;
      rowGap: number;
      rowGapSmall: number;
    };
    sectionList: {
      marginTop: number;
      rowGap: number;
      marginTopSmall: number;
      rowGapSmall: number;
    };
    mainContent: {
      padding: string;
      paddingMedium: string;
    };
  };
  borders: {
    avatar: { borderRadius: number };
  };
  media: {
    large: string;
    medium: string;
    small: string;
  };
}
