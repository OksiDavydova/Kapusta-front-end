import { Logo } from "./Logo";
import { UserLogout } from "./UserLogout";
import { UserProfile } from "./UserProfile";
import {
  HeaderFixed,
  HeaderContainer,
  UserProfileWrapper,
} from "./HeaderStyles.styled";

function Header() {
  return (
    <HeaderFixed>
      <HeaderContainer>
        <Logo />
        <UserProfileWrapper>
          <UserProfile />
          <UserLogout />
        </UserProfileWrapper>
      </HeaderContainer>
    </HeaderFixed>
  );
}

export default Header;
