import { useSelector } from "react-redux";
import { userIsAuth } from "../../redux/selectors";
import { Logo } from "./Logo";
import { UserLogout } from "./UserLogout";
import { UserProfile } from "./UserProfile";
import {
  HeaderFixed,
  HeaderContainer,
  UserProfileWrapper,
} from "./HeaderStyles.styled";

function Header() {
  const isAuth = useSelector(userIsAuth);
  return (
    <HeaderFixed>
      <HeaderContainer>
        <Logo />
        {isAuth && (
          <UserProfileWrapper>
            <UserProfile />
            <UserLogout />
          </UserProfileWrapper>
        )}
      </HeaderContainer>
    </HeaderFixed>
  );
}

export default Header;
