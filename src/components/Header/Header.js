import { Logo } from "./Logo";
import { UserLogout } from "./UserLogout";
import { UserProfile } from "./UserProfile";
import { HeaderContainer, UserProfileWrapper } from "./HeaderStyles.styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <UserProfileWrapper>
        <UserProfile />
        <UserLogout />
      </UserProfileWrapper>
    </HeaderContainer>
  );
}

export default Header;
