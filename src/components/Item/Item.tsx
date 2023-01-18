import { IData } from 'interfaces/content';
import { StyledItem, Icon, IconImage, Desc, Date } from './Item.styled';

interface ItemProps {
  data: IData;
}

export const Item = ({ data }: ItemProps) => (
  <StyledItem>
    {data.icon && (
      <Icon>
        <IconImage src={data.icon} />
      </Icon>
    )}
    {data.date && <Date>{data.date}</Date>}
    <Desc>{data.title}</Desc>
  </StyledItem>
);
