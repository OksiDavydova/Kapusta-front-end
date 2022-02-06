import { Logo } from "./Logo";
import { UserLogout } from "./UserLogout";
import { UserProfile } from "./UserProfile";
import {
  HeaderTag,
  HeaderContainer,
  UserProfileWrapper,
} from "./HeaderStyles.styled";

function Header() {
  return (
    <HeaderTag>
      <HeaderContainer>
        {/* <div className={s.logo}> */}
        <Logo />
        {/* </div> */}
        <UserProfileWrapper>
          <UserProfile />
          <UserLogout />
        </UserProfileWrapper>
      </HeaderContainer>
    </HeaderTag>
  );
}

export default Header;
