export interface IData {
  title: string;
  icon?: string;
  date?: string;
}

export interface ItemType {
  title: string;
  data: IData[];
}
