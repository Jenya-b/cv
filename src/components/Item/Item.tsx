import { IData } from 'interfaces/content';
import { StyledItem, Icon, IconImage, Desc } from './Item.styled';

interface ItemProps {
  data: IData;
}

export const Item = ({ data }: ItemProps) => (
  <StyledItem>
    {data.icon?.length && (
      <Icon>
        <IconImage src={data.icon} />
      </Icon>
    )}
    <Desc>{data.title}</Desc>
  </StyledItem>
);
