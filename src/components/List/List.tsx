import { Item } from 'components/Item/Item';
import { ItemType } from 'interfaces/content';
import { Items } from './List.styled';

export const List = (item: ItemType) => (
  <Items>
    {item.data.map((item) => (
      <Item key={item.title} data={item} />
    ))}
  </Items>
);
