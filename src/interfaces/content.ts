export interface IData {
  title: string;
  icon?: string;
  date?: string;
  link?: string;
}

export interface ItemType {
  title: string;
  data: IData[];
}
