import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { socialMedia } from 'constants/data';
import { avatar } from 'constants/images';
import { StyledHeader, Avatar, AvatarImage, ProfileName, ProfessionName } from './Header.styled';

export const Header = () => (
  <StyledHeader>
    <Avatar>
      <AvatarImage src={avatar}></AvatarImage>
    </Avatar>
    <ProfileName>Evgeniy Borisevich</ProfileName>
    <ProfessionName>Frontend Developer</ProfessionName>
    <SocialMedia socialData={socialMedia} />
  </StyledHeader>
);
