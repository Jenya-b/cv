import { List } from 'components/List/List';
import { ItemType } from 'interfaces/content';
import { Title, BlockWrapper } from './ContentBlock.styled';

export const ContentBlock = (item: ItemType) => (
  <BlockWrapper>
    <Title>{item.title}</Title>
    <List {...item} />
  </BlockWrapper>
);
