import { List, Item, Link, Image } from './Social.styled';

interface SocialMediaProps {
  socialData: { icon: string; href: string }[];
}

export const SocialMedia = ({ socialData }: SocialMediaProps) => (
  <List>
    {socialData.map(({ icon, href }) => (
      <Item key={href}>
        <Link href={href}>
          <Image src={icon} />
        </Link>
      </Item>
    ))}
  </List>
);
