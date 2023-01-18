import { StyledSection } from './Section.styled';

interface SectionProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  line?: boolean;
}

export const Section = <T,>({ data, renderItem, line }: SectionProps<T>) => (
  <StyledSection line={line}>{data.map((item) => renderItem(item))}</StyledSection>
);
