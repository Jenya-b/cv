import { ContentBlock } from 'components/ContentBlock/ContentBlock';
import { Section } from 'components/Section/Section';
import { data, mainData } from 'constants/data';
import { ItemType } from 'interfaces/content';
import { StyledMain } from './Main.styled';

export const Main = () => {
  const renderItem = (item: ItemType) => <ContentBlock {...item} />;

  return (
    <StyledMain>
      <Section data={data} renderItem={renderItem} line={true} />
      <Section data={mainData} renderItem={renderItem} />
    </StyledMain>
  );
};
