import { StyledHeader, Avatar, AvatarImage, ProfileName, ProfessionName } from './Header.styled';

export const Header = () => (
  <StyledHeader>
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/76208126?v=4"></AvatarImage>
    </Avatar>
    <ProfileName>Evgeniy Borisevich</ProfileName>
    <ProfessionName>Frontend Developer</ProfessionName>
  </StyledHeader>
);
