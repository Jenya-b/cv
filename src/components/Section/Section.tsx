import { StyledSection } from './Section.styled';

interface SectionProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
}

export const Section = <T,>({ data, renderItem }: SectionProps<T>) => (
  <StyledSection>{data.map((item) => renderItem(item))}</StyledSection>
);
