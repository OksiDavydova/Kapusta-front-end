import { Logo, UserLogout, UserProfile } from "../common";
import { HeaderStyled } from "../../styled/modules";

function Header() {
  return (
    <HeaderStyled.HeaderTag>
      <HeaderStyled.HeaderContainer>
        {/* <div className={s.logo}> */}
        <Logo />
        {/* </div> */}
        <HeaderStyled.UserProfileWrapper>
          <UserProfile />
          <UserLogout />
        </HeaderStyled.UserProfileWrapper>
      </HeaderStyled.HeaderContainer>
    </HeaderStyled.HeaderTag>
  );
}

export default Header;
